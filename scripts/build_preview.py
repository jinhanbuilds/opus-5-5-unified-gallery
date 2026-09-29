#!/usr/bin/env python3
"""Generate the 100-case catalog and iframe payloads from the pinned submodule."""
from pathlib import Path
import json, re, hashlib, zipfile

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'sources' / 'html100'
OUT = ROOT / 'dist' / 'preview'
RUNTIME = OUT / 'pages'
RUNTIME.mkdir(parents=True, exist_ok=True)
zh = {}
for line in (ROOT / 'data' / 'zh.tsv').read_text().splitlines():
    key, name, category, description, interaction = line.split('\t')
    assert key not in zh
    zh[key] = dict(name=name, category=category, description=description, interaction=interaction)
catalog = []
for f in sorted(SOURCE.glob('[0-9][0-9][0-9]-*.txt')):
    key = f.name[:3]
    raw = f.read_text()
    parts = re.split(r'^=== (.*?) ===\s*$', raw, flags=re.M)
    sections = dict(zip(parts[1::2], parts[2::2]))
    html_path = f.with_suffix('.html')
    thumb = SOURCE / 'thumbs' / f.with_suffix('.jpg').name
    assert html_path.exists() and thumb.exists() and key in zh
    original = html_path.read_text()
    prompt = sections['PROMPT (exact prompt used)'].strip()
    assert 'SHARED REQUIREMENTS' in prompt
    item = dict(id=key, slug=f.stem, title=raw.splitlines()[0].removeprefix('TITLE: ').strip(),
        file=html_path.name, textFile=f.name, thumbnail='thumbs/' + thumb.name,
        prompt=prompt, originalDescription=sections['DESCRIPTION'].strip(),
        techniques=sections['MAJOR VISUAL TECHNIQUES'].strip(),
        originalInteraction=sections['INTERACTION MODEL'].strip(),
        sourceHash=hashlib.sha256(html_path.read_bytes()).hexdigest(), **zh[key])
    catalog.append(item)
    runtime = original
    if key == '001':
        # A click can occur after the current RAF timestamp. Clamp the one-frame
        # negative progress before indexing HEAD_STOPS; upstream remains intact.
        before = 'const p = Math.min(1, (now - session.start) / SESSION);'
        after = 'const p = Math.max(0, Math.min(1, (now - session.start) / SESSION));'
        assert runtime.count(before) == 1
        runtime = runtime.replace(before, after)
    payload = json.dumps(runtime, ensure_ascii=False)
    (RUNTIME / (key + '.js')).write_text('window.OPUS_PAGES = window.OPUS_PAGES || {};\nwindow.OPUS_PAGES[' + json.dumps(key) + '] = ' + payload + ';\n')
assert len(catalog) == len(zh) == 100
assert [v['id'] for v in catalog] == [f'{n:03}' for n in range(1, 101)]
(OUT / 'catalog.js').write_text('window.OPUS_CATALOG = ' + json.dumps(catalog, ensure_ascii=False, separators=(',', ':')) + ';\n')
manifest = {'repository':'https://github.com/MiaAI-Lab/Claude-Opus-5.5-100-HTML-Files', 'count':100,
    'files': {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(SOURCE.glob('[0-9]*.*'))}}
(OUT / 'source-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(f'Built {len(catalog)} matching cards, complete prompts and offline page payloads.')
