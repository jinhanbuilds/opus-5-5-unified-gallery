#!/usr/bin/env python3
"""Compare every displayed public text and original entry against retained sources."""
from pathlib import Path
import hashlib,json,re,subprocess,types
R=Path(__file__).resolve().parent.parent;S=R/'sources/new-originals';O=R/'docs/new-100-qa';O.mkdir(parents=True,exist_ok=True)
cs=json.loads((R/'data/new-cases.json').read_text());assert len(cs)==100 and len({c['id'] for c in cs})==100
assert len({(c['group'],c['slug']) for c in cs})==100
sha=lambda b:hashlib.sha256(b).hexdigest()
avi=(S/'avi-showreel.html').read_text();obj=re.search(r'const PROMPTS = (\{[\s\S]*?\n\});',avi)[1]
avi_prompts=json.loads(subprocess.check_output(['node','-e','const vm=require("vm"),fs=require("fs");process.stdout.write(JSON.stringify(vm.runInNewContext("("+fs.readFileSync(0,"utf8")+")",{}, {timeout:1000})))'],input=obj.encode()))
ps=json.loads((S/'prompts.txt').read_text())['prompts'];gs=json.loads((S/'generations.txt').read_text())['generations']
rows=[]
for c in cs:
    raw=(S/c['entry']).read_bytes();assert sha(raw)==c['source']['source_sha256'],c['id']+' entry hash'
    for k in ['effect','use_when','techniques','prompt','prompt_kind','template_zh','demo_note','source']:assert c[k],c['id']+' '+k
    text=c['prompt'].strip(); g=c['group']; loc=None
    if g=='lemo':
        loc='vendors/lemomo-ai/lemo-opuscar/styles/'+c['slug']+'/STYLE.md';assert text==(S/loc).read_text().strip()
    elif g=='mg':
        loc='vendors/Vincentwei1021/mg-styles-15/prompts/'+c['slug']+'.md';assert text in (S/loc).read_text()
    elif g=='openvg':
        loc='vendors/OpenVGLab/awesome-opus5.5-frontend-showcases/'+('README.md' if int(c['id'][1:])<42 else 'lottie-games/'+c['slug']+'/PROMPT.md');assert text in (S/loc).read_text()
    elif g=='avi':
        loc='avi-showreel.html#PROMPTS.'+c['slug'];assert text==avi_prompts[c['slug']]
    elif g=='swan':
        root=S/'vendors/swan4er/opus-100-projects';brief=(root/'BRIEF.md').read_text().strip();assert text.endswith(brief)
        section=text[:-len(brief)].strip();assert section in (root/'IDEAS.md').read_text();assert c['slug'] in section
        loc='vendors/swan4er/opus-100-projects/IDEAS.md#'+c['slug']+' + BRIEF.md'
    elif g=='threejs':
        generation=next(x for x in gs if 'https://threejseval.com'+x['sceneUrl']==c['source']['code_url']);p=next(x for x in ps if x['id']==generation['promptId'])
        assert text==p['text'] and generation['modelId']=='claude-opus-5-5-high';loc='generations.txt#'+generation['id']+' -> prompts.txt#'+p['id']
    elif g=='optical':
        root=S/'vendors/Maoku/Opus55OpticalIllusion/Docs';plan=(root/'PLAN.md').read_text().strip();assert text.startswith(plan)
        section=text[len(plan):].strip();assert section in (root/'IMPLEMENTATION_PLAN.md').read_text()
        assert (S/'vendors/Maoku/Opus55OpticalIllusion'/c['source']['code_url'].split(c['source']['revision']+'/')[1]).is_file()
        loc='vendors/Maoku/Opus55OpticalIllusion/Docs/PLAN.md + IMPLEMENTATION_PLAN.md'
    rows.append({'id':c['id'],'group':g,'entrySha256':sha(raw),'publicTextSha256':sha(c['prompt'].encode()),'publicTextVerifiedAt':loc,'pass':True})
# Reconstruct the old catalog with the committed builder, then compare full objects.
m=types.ModuleType('previous_catalog');m.__file__=str(R/'scripts/fusion_catalog.py');m.__name__='previous_catalog'
exec(subprocess.check_output(['git','show','HEAD:scripts/fusion_catalog.py'],cwd=R),m.__dict__)
old={x['id']:m.make_100(x) for x in m.source_100()}
for x in m.source_22():
    key=m.OVERLAP.get(x['id']) or x['id'];old[key]=m.add_22(old.get(key),x)
current=json.loads((R/'dist/fusion/catalog.js').read_text().split('=',1)[1].strip().rstrip(';'))
now={x['id']:x for x in current if not x['id'].startswith('n')};assert old==now
styles={}
for f in ['src/fusion/style.css','src/fusion/overrides.css']:
    original=subprocess.check_output(['git','show','HEAD:'+f],cwd=R);assert original==(R/f).read_bytes();styles[f]=sha(original)
groups={g:sum(c['group']==g for c in cs) for g in sorted({c['group'] for c in cs})};assert len(groups)==7 and max(groups.values())-min(groups.values())==2
out={'date':'2026-10-27','sourceEntries':100,'publicTexts':100,'groups':groups,'oldSubjectsEqual':len(old),'oldVariantsEqual':sum(len(x['variants']) for x in old.values()),'oldPairedSubjects':[k for k,x in old.items() if len(x['variants'])==2],'unchangedStyleHashes':styles,'rows':rows}
(O/'source-audit.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k!='rows'},ensure_ascii=False,indent=2))
