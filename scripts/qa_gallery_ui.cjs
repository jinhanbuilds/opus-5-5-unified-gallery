// Verify the unchanged gallery controls against both the complete and publication editions.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const R=path.resolve(__dirname,'..'),D=path.resolve(process.env.QA_DIST||R+'/dist'),O=path.resolve(process.env.QA_OUT||R+'/docs/new-100-qa/ui-final-20261027');
const catalog=JSON.parse(fs.readFileSync(D+'/fusion/catalog.js','utf8').replace(/^[^=]*=/,'').trim().replace(/;$/,''));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
function ok(x,m){if(!x)throw Error(m)}fs.mkdirSync(O,{recursive:true});
(async()=>{const b=await chromium.launch({channel:'chrome',headless:true}),results=[];
for(const protocol of (process.env.QA_PROTOCOLS||'file,http').split(','))for(const width of [1440,390]){
const context=await b.newContext({viewport:{width,height:width===390?844:900},reducedMotion:'reduce'}),p=await context.newPage();p.setDefaultTimeout(30000);const errors=[],result={protocol,width,errors,checks:[]};
p.on('pageerror',e=>errors.push(e.message));
// Exercise the actual copy handler without replacing the user's OS clipboard.
await context.addInitScript(()=>{window.__copied=[];Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async v=>window.__copied.push(v)}})});
try{
const base=protocol==='file'?'file://'+D+'/':process.env.QA_HTTP||'http://127.0.0.1:8765/';
await p.goto(base+'index.html',{waitUntil:'load',timeout:60000});await p.waitForFunction(()=>document.querySelectorAll('.work').length===218);
async function count(n){await p.waitForFunction(n=>document.querySelector('#resultCount').textContent===n+' / 218',n);ok(await p.locator('.work:visible').count()===n,'visible card count '+n)}
await count(218);result.checks.push('218 cards and count');if(process.env.QA_HOMESCREEN&&protocol==='http'&&width===1440)await p.screenshot({path:path.resolve(process.env.QA_HOMESCREEN)});
for(const medium of ['video','web']){await p.locator('[data-medium='+medium+']').click();await count(catalog.filter(x=>x.medium===medium).length)}
await p.locator('#clearFilters').click();await p.locator('#selectedFilter').click();await count(122);await p.locator('#clearFilters').click();
await p.locator('[data-intent="知识可视化"]').click();await count(catalog.filter(x=>x.intent==='知识可视化').length);await p.locator('#clearFilters').click();
await p.locator('#advancedFilters summary').click().catch(()=>{});const style=catalog.find(x=>x.style.length)?.style[0];await p.locator('#styleFilter').selectOption(style);await count(catalog.filter(x=>x.style.includes(style)).length);await p.locator('#clearFilters').click();result.checks.push('medium, selected, intent and style filters');
await p.keyboard.press('/');ok(await p.locator('#search').evaluate(e=>e===document.activeElement),'slash search focus');await p.locator('#search').fill('no_such_work_zzzz');await count(0);ok(await p.locator('#empty').isVisible(),'empty state');await p.locator('#clearFilters').click();
await p.locator('#search').fill('n029');await count(1);const trigger=p.locator('[data-id=n029] .work-trigger');await trigger.click();await p.locator('#frameHost iframe').waitFor();
const frame=await(await p.locator('#frameHost iframe').elementHandle()).contentFrame();await frame.waitForFunction(()=>document.readyState==='complete'&&document.body?.childElementCount>1);
ok(await p.locator('#detailPrompt').textContent()===catalog.find(x=>x.id==='n029').prompt,'prompt mismatch');await p.locator('#copyPrompt').click();ok(await p.evaluate(()=>window.__copied.at(-1)===document.querySelector('#detailPrompt').textContent),'copy payload');
await p.locator('#close').click();await p.waitForFunction(()=>!document.querySelector('#viewer').open);ok(await p.locator('#frameHost iframe').count()===0,'iframe not removed on close');ok(await trigger.evaluate(e=>e===document.activeElement),'focus not restored');result.checks.push('search, empty state, prompt copy handler, close removes iframe and restores focus');
await p.locator('#clearFilters').click();for(const id of ['001','008','015','026']){await p.locator('#search').fill(id);await count(1);await p.locator('[data-id="'+id+'"] .work-trigger').click();ok(await p.locator('#variantPicker button').count()===2,'paired version missing '+id);const links=await p.locator('#sourceLinks a').allTextContents();ok(links.some(x=>x.includes('原 22 条片库'))&&links.some(x=>x.includes('动效词典')),'old detail/lexicon links missing '+id);for(let i=0;i<2;i++){await p.locator('#variantPicker button').nth(i).click();await p.locator('#frameHost iframe').waitFor();ok(await p.locator('#variantPicker button').nth(i).getAttribute('aria-pressed')==='true','variant selection failed');const href=await p.locator('#openOriginal').getAttribute('href');ok(href===catalog.find(x=>x.id===id).variants[i].file,'independent link mismatch');}await p.locator('#close').click();await p.waitForFunction(()=>!document.querySelector('#viewer').open)}result.checks.push('four paired works retain both versions and old detail/lexicon links');
await p.locator('#clearFilters').click();await p.locator('#search').fill('n029');await count(1);const live=p.locator('#livePreviewToggle');if(await live.getAttribute('aria-pressed')!=='true')await live.click();await p.locator('[data-id=n029]').scrollIntoViewIfNeeded();await p.locator('[data-id=n029] .work-live').waitFor({state:'attached'});await live.click();ok(await p.locator('.work-live').count()===0,'live preview not stopped');result.checks.push('live card preview starts and stops');
await p.goto(base+'index.html#n029',{waitUntil:'load'});await p.locator('#viewer[open]').waitFor();ok(await p.locator('#detailTitle').textContent()===catalog.find(x=>x.id==='n029').name,'deep link');await p.locator('#close').click();await p.waitForFunction(()=>!document.querySelector('#viewer').open);
ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'gallery horizontal overflow');ok(!errors.length,'gallery runtime errors');result.checks.push('deep link and viewport');result.pass=true;
await p.screenshot({path:O+'/'+protocol+'-'+width+'.jpg',type:'jpeg',quality:75});
}catch(e){result.pass=false;result.failure=String(e);await p.screenshot({path:O+'/'+protocol+'-'+width+'-failure.jpg',type:'jpeg',quality:70}).catch(()=>{})}
await context.close();results.push(result);console.log(protocol,width,result.pass?'PASS':'FAIL',result.failure||'')}
await b.close();fs.writeFileSync(O+'/results.json',JSON.stringify({date:new Date().toISOString(),catalogSha256:sha(fs.readFileSync(D+'/fusion/catalog.js')),results},null,2));if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
