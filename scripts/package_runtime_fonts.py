#!/usr/bin/env python3
"""Lossless WOFF2 wrapping of complete fonts; originals remain unchanged.
First run: --discover selects only fonts embedded by the current complete build.
Later runs use manifest source paths and verify all original and output hashes.
Requires fonttools[woff]==4.60.1 only to regenerate derived fonts.
"""
from pathlib import Path
import argparse, base64, hashlib, io, json, re
from fontTools.ttLib import TTFont
from fontTools.ttLib import woff2
from functools import partial
woff2.brotli.compress = partial(woff2.brotli.compress, quality=6)
ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / 'sources/new-originals'
OUT = SOURCES / 'derived-fonts'
MANIFEST = OUT / 'manifest.json'
def sha(b): return hashlib.sha256(b).hexdigest()
def semantics(f):
    return {'glyphs': f.getGlyphOrder(), 'cmap': f.getBestCmap(), 'metrics': f['hmtx'].metrics,
            'axes': [(a.axisTag,a.minValue,a.defaultValue,a.maxValue) for a in f['fvar'].axes] if 'fvar' in f else []}
def main():
    ap=argparse.ArgumentParser();ap.add_argument('--discover',action='store_true');args=ap.parse_args()
    if args.discover:
        needed=set()
        for p in (ROOT/'dist/fusion/new-pages').rglob('*'):
            if p.suffix not in ('.css','.html'): continue
            for m in re.finditer(r'data:font/(?:ttf|otf);base64,([A-Za-z0-9+/=]+)',p.read_text()):
                needed.add(sha(base64.b64decode(m[1])))
        inputs={}
        for p in SOURCES.rglob('*'):
            if p.suffix.lower() not in ('.ttf','.otf'): continue
            key=sha(p.read_bytes())
            if key in needed: inputs.setdefault(key,p)
        if needed-inputs.keys(): raise RuntimeError('Embedded fonts have no retained original source')
    else:
        old=json.loads(MANIFEST.read_text()); inputs={x['sourceSha256']:SOURCES/x['source'] for x in old['fonts']}
    OUT.mkdir(parents=True,exist_ok=True); records=[]
    for key,p in sorted(inputs.items()):
        print('START',str(p.relative_to(SOURCES)),flush=True)
        raw=p.read_bytes()
        if sha(raw)!=key: raise RuntimeError('Original changed: '+str(p))
        dest=OUT/(key+'.woff2')
        a=TTFont(io.BytesIO(raw),recalcTimestamp=False); before=semantics(a)
        valid = False
        if dest.exists():
            try: valid = before == semantics(TTFont(dest,recalcTimestamp=False))
            except Exception: pass
        if not valid:
            a.flavor='woff2'; a.flavorData=woff2.WOFF2FlavorData(transformedTables=set()); temp=dest.with_suffix('.tmp');a.save(temp);temp.replace(dest)
        b=TTFont(dest,recalcTimestamp=False)
        if before!=semantics(b): raise RuntimeError('Font semantics differ: '+str(p))
        data=dest.read_bytes(); records.append({'source':str(p.relative_to(SOURCES)),'sourceSha256':key,'sourceBytes':len(raw),'file':str(dest.relative_to(SOURCES)),'sha256':sha(data),'bytes':len(data),'fullGlyphCount':len(before['glyphs']),'cmapCount':len(before['cmap'] or {}),'checks':['glyph order','Unicode cmap','horizontal metrics','variable font axes']})
        print(str(p.relative_to(SOURCES)),len(raw),'->',len(data),flush=True)
    MANIFEST.write_text(json.dumps({'operation':'complete-font WOFF2 packaging; no glyph subsetting, text filtering, or axis changes','tool':'fonttools[woff] 4.60.1','fonts':records},ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'fonts':len(records),'originalBytes':sum(x['sourceBytes'] for x in records),'woff2Bytes':sum(x['bytes'] for x in records)}))
if __name__=='__main__':main()
