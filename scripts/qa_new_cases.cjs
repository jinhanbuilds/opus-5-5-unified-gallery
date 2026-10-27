// Browser checks use the actual source controls. No browser security flags.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const ROOT=path.resolve(__dirname,'..'),DIST=path.resolve(process.env.QA_DIST||ROOT+'/dist'),OUT=process.env.QA_OUT||path.join(ROOT,'docs/new-100-qa');
const cases=JSON.parse(fs.readFileSync(path.join(ROOT,'data/new-cases.json'))).filter(c=>!process.env.QA_IDS||process.env.QA_IDS.split(',').includes(c.id));
const widths=(process.env.QA_WIDTHS||'1440,390').split(',').map(Number);
const protocols=(process.env.QA_PROTOCOLS||'file,http').split(',');
fs.mkdirSync(OUT,{recursive:true});fs.mkdirSync(path.join(OUT,'screens'),{recursive:true});
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const buildFingerprint=sha(fs.readFileSync(DIST+(fs.existsSync(DIST+'/build-manifest.json')?'/build-manifest.json':'/deployment-manifest.json')));
fs.writeFileSync(path.join(OUT,'build-fingerprint.txt'),buildFingerprint+'\n');
const startedAt=new Date().toISOString();
function assert(value,message){if(!value)throw Error(message);}
async function drag(p,loc,from,to){const b=await loc.boundingBox();assert(b,'drag target not visible');await p.mouse.move(b.x+b.width*from[0],b.y+b.height*from[1]);await p.mouse.down();await p.mouse.move(b.x+b.width*to[0],b.y+b.height*to[1],{steps:14});await p.waitForTimeout(350);await p.mouse.up();}
async function gameState(p){return p.evaluate(()=>({state:window.__GAME__?.state||window.__br?.state||window.CB?.info?.()||window.__csf?.G?.mode||window.__pp?.state?.()||null,text:document.body.innerText.slice(-600)}));}
async function range(p,selector){const e=p.locator(selector).first();await e.scrollIntoViewIfNeeded();const before=await e.inputValue();await e.focus();await e.press('End');let after=await e.inputValue();if(after===before){await e.press('Home');after=await e.inputValue();}assert(after!==before,'range value did not change');return{before,after};}
async function interact(p,c){
  if(c.type==='video'){
    await p.waitForFunction(()=>window.__galleryReady&&window.__demo?.duration>0,null,{timeout:30000});
    const duration=await p.evaluate(()=>window.__demo.duration);
    await p.evaluate(()=>window.__demo.pause());const a=await p.evaluate(()=>window.__demo.time);await p.waitForTimeout(220);const b=await p.evaluate(()=>window.__demo.time);assert(Math.abs(a-b)<.04,'pause did not hold time');const pausedA=await p.screenshot({type:'png'});await p.waitForTimeout(160);const pausedB=await p.screenshot({type:'png'});assert(sha(pausedA)===sha(pausedB),'pause did not freeze the visible frame');
    await p.evaluate(d=>window.__demo.seek(d*.68),duration);await p.waitForTimeout(350);const seek=await p.evaluate(()=>window.__demo.time);assert(Math.abs(seek-duration*.68)<.08,'seek did not reach target');
    await p.evaluate(()=>window.__demo.play());const advanced=await (await p.waitForFunction(t=>{const d=window.__demo,delta=(d.time-t+d.duration)%d.duration;return delta>.03&&delta<d.duration-.03?d.time:false},seek,{timeout:15000})).jsonValue();assert(advanced!==seek,'playback did not advance');await p.evaluate(()=>window.__demo.pause());
    await p.mouse.click(8,8);await p.evaluate(()=>{window.__demo.setSound(true);window.__demo.play()});await p.waitForTimeout(300);
    const sound=await p.evaluate(()=>({audio:window.__qaAudio.map(a=>({paused:a.paused,time:a.currentTime,duration:a.duration})),contexts:window.__qaContexts.map(a=>a.state)}));
    assert(sound.audio.some(a=>!a.paused&&a.time>0)||sound.contexts.includes('running'),'original sound did not start');
    await p.evaluate(()=>{window.__demo.setSound(false);window.__demo.pause()});
    const muted=await p.evaluate(()=>window.__qaAudio.every(a=>a.paused||a.muted));assert(muted,'original audio did not stop');
    return{action:'pause, seek, play, original sound on/off',duration,seek,advanced,sound};
  }
  const n=Number(c.id.slice(1));
  if(c.group==='openvg'){
    if(n>=37&&n<=41){await p.waitForTimeout(2400);return{action:'observe native SVG animation at two times'};}
    const before=await gameState(p);
    const starts={29:'开始',30:'#startBtn',31:'开始游戏',32:'#btnStart',33:'开始游戏',34:'开始游戏',35:'#b-start',36:'开始游戏',42:'#btnStart',43:'#btnNew'};
    const start=starts[n];let target=start.startsWith('#')?p.locator(start):p.getByText(start,{exact:true}).first();
    if(await target.count()&&await target.isVisible()){const rect=await target.boundingBox();await p.mouse.click(rect.x+rect.width/2,rect.y+rect.height/2);}else await p.keyboard.press('Enter');
    await p.waitForTimeout(500);
    if(n===43){const egg=p.locator('#eggHit');for(let i=0;i<8;i++){if(!await egg.isVisible())break;await egg.click();await p.waitForTimeout(160);}await p.locator('#nameInput').waitFor({state:'visible',timeout:7000});await p.locator('#nameInput').fill('小光');await p.locator('#nameOk').click();await p.locator('#act_feed').click();await p.locator('#food_berry').click();await p.waitForFunction(()=>window.__pp.state().stats.feed>0,null,{timeout:7000});}
    else if(n===32||n===34){await drag(p,p.locator('body>svg'),[.3,.7],[.7,.35]);await p.mouse.click((await p.viewportSize()).width*.55,(await p.viewportSize()).height*.55);}
    else if(n===33){const svg=p.locator('body>svg');await drag(p,svg,[.15,.16],[.43,.45]);}
    else{await p.keyboard.down('ArrowRight');await p.keyboard.down('ArrowUp');await p.keyboard.press('Space');await p.waitForTimeout(700);await p.keyboard.up('ArrowRight');await p.keyboard.up('ArrowUp');}
    await p.waitForTimeout(500);const after=await gameState(p);assert(JSON.stringify(before)!==JSON.stringify(after),'game state did not change after start/input');return{action:'start original game and use its primary input',before,after};
  }
  if(c.group==='swan'){
    if(n===59)return{action:'adjust GPS range',...(await range(p,'input[type=range]'))};
    if(n===60){await p.locator('#guides').click();const cv=p.locator('canvas').first();await drag(p,cv,[.35,.35],[.58,.6]);return{action:'show symmetries and draw repeated motif'};}
    if(n===61)return{action:'change JPEG quality',...(await range(p,'input[type=range]'))};
    if(n===62)return{action:'change airfoil angle',...(await range(p,'#sA'))};
    if(n===63){await p.locator('#tour').click();await p.waitForTimeout(1100);return{action:'start molecular guided camera tour'};}
    if(n===64){if(await p.locator('#bReset').isVisible())await p.locator('#bReset').click();else await p.locator('#bPlay').click();await p.locator('#bFwd').click();await p.locator('#bFwd').click();return{action:'pause or reset BPE, then advance two merge steps'};}
    if(n===65){const cmd=p.locator('#cmd');for(const s of ['git switch -c gallery-review','echo "review" > note.txt','git add .','git commit -m "gallery-check"']){await cmd.fill(s);await cmd.press('Enter');}assert((await p.locator('body').innerText()).includes('gallery-review'),'sandbox branch missing');return{action:'create a branch and commit inside the original in-page Git simulation'};}
    if(n===66){const e=p.locator('#ringAp');await e.scrollIntoViewIfNeeded();const before=await p.locator('#exif').innerText();await e.focus();for(let i=0;i<8;i++)await e.press('ArrowRight');const after=await p.locator('#exif').innerText();assert(before!==after,'lens values unchanged');return{action:'adjust aperture ring',before,after};}
    if(n===67){await p.locator('#btn-power').click();await p.getByText('Кислота',{exact:true}).click();const sound=await p.evaluate(()=>window.__qaContexts.map(c=>c.state));assert(sound.includes('running'),'synth context not running');return{action:'power synth and select Acid patch',sound};}
    if(n===68||n===69){await p.locator('#play').click();const selector=n===68?'#soundCta':'#withSound';await p.locator(selector).click();await p.waitForTimeout(400);const sound=await p.evaluate(()=>window.__qaContexts.map(c=>c.state));assert(sound.includes('running'),'film score not running');await p.locator('#mute').click();return{action:'pause, restart film with original sound, mute',sound};}
    if(n===70){await p.locator('#bCut').click();await p.locator('#bTour').click();await p.waitForTimeout(600);return{action:'slice electron cloud and start orbital tour'};}
    if(n===71){await p.locator('[data-s="0.015625"]').click();assert(await p.locator('[data-s="0.015625"]').getAttribute('aria-pressed')==='true','watch speed did not change');await p.locator('section[data-ch="1"]').scrollIntoViewIfNeeded();await p.waitForTimeout(350);const wind=p.locator('#wind');if(await wind.isVisible())await wind.click();return{action:'slow watch to 1/64 and inspect winding chapter'};}
    if(n===72){await p.locator('#re').fill('a(b|c)+');await p.locator('#str').fill('abcc');await p.locator('#bFwd').click();return{action:'rebuild automata for a(b|c)+ and step through abcc'};}
  }
  if(c.group==='threejs'){
    const cv=p.locator('canvas').first();
    if(n===81){const joystick=p.locator('.tj-host-joystick');await drag(p,joystick,[.5,.5],[.85,.2]);await p.keyboard.down('ArrowUp');await p.keyboard.down('ArrowRight');await p.waitForTimeout(600);await p.keyboard.up('ArrowRight');await p.keyboard.up('ArrowUp');return{action:'steer ferry using original host joystick and keyboard fallback'};}
    if(n===84){const box=await cv.boundingBox();let found=null;for(const y of [.45,.52,.6,.67,.74]){for(const x of [.12,.2,.28,.36,.44]){await p.mouse.move(box.x+box.width*x,box.y+box.height*y);if(await cv.evaluate(e=>e.style.cursor)==='grab'){found=[x,y];break;}}if(found)break;}assert(found,'slingshot draggable object not found');await drag(p,cv,found,[Math.max(.02,found[0]-.14),Math.min(.9,found[1]+.1)]);await p.waitForTimeout(900);return{action:'grab and release slingshot',from:found};}
    await drag(p,cv,[.5,.5],[.7,.58]);if(n!==80)await p.mouse.wheel(0,-180);await p.waitForTimeout(500);return{action:n===80?'drag original cloth mesh':'orbit and zoom original three.js scene'};
  }
  if(c.group==='optical'){
    const hint=p.getByRole('button',{name:'見え方のヒント',exact:true});await hint.click();await p.waitForTimeout(300);const text=await p.locator('body').innerText();assert(text.length>200,'hint content not shown');const mechanism=p.getByTestId('mechanism-toggle');await mechanism.click();assert(await mechanism.getAttribute('aria-expanded')==='true','mechanism disclosure failed');const demo=p.getByTestId('demo');let demonstrated=false;if(await demo.isVisible()){await demo.click();await p.waitForFunction(()=>document.querySelector('[data-testid=demo]')?.getAttribute('aria-pressed')==='true',null,{timeout:7000});await p.waitForTimeout(550);demonstrated=true;await demo.click();}return{action:'reveal hint, explain mechanism, run native demonstration when available',demonstrated,text:text.slice(0,500)};
  }
  throw Error('No defined core check for '+c.id);
}
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});const jobs=process.env.QA_JOBS_FILE?JSON.parse(fs.readFileSync(process.env.QA_JOBS_FILE)).map(j=>({...j,c:cases.find(c=>c.id===j.id)})):protocols.flatMap(protocol=>widths.flatMap(width=>cases.map(c=>({protocol,width,c}))));let ix=0;const results=[];
  async function worker(){while(ix<jobs.length){const {protocol,width,c}=jobs[ix++],key=`${c.id}-${protocol}-${width}`;const context=await browser.newContext({viewport:{width,height:width===390?844:900},hasTouch:width===390,isMobile:width===390});
    await context.addInitScript(()=>{window.__qaAudio=[];window.__qaContexts=[];const A=window.Audio;window.Audio=new Proxy(A,{construct(t,a){const x=Reflect.construct(t,a);window.__qaAudio.push(x);return x}});for(const key of ['AudioContext','webkitAudioContext'])if(window[key]){const C=window[key];window[key]=new Proxy(C,{construct(t,a){const x=Reflect.construct(t,a);window.__qaContexts.push(x);return x}})}});
    const p=await context.newPage();p.setDefaultTimeout(20000);const errors=[],failed=[],external=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text().slice(0,250))});p.on('requestfailed',q=>failed.push(q.url()));p.on('request',q=>{if(/^https?:/.test(q.url())&&!q.url().startsWith((process.env.QA_HTTP||'http://127.0.0.1:8765/')))external.push(q.url())});const jobStarted=Date.now();let result={id:c.id,protocol,width,errors,failed,external,buildFingerprint};
    try{const url=(protocol==='file'?'file://'+DIST+'/':process.env.QA_HTTP||'http://127.0.0.1:8765/')+'fusion/new-pages/'+c.id+'.html';await p.goto(url,{waitUntil:'load',timeout:60000});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(900);
      if(c.type==='video'){await p.waitForFunction(()=>window.__galleryReady,null,{timeout:30000});await p.evaluate(()=>{window.__demo.pause();window.__demo.seek(window.__demo.duration*.22)});await p.waitForTimeout(400);}
      const a=await p.screenshot({path:path.join(OUT,'screens',key+'-a.jpg'),type:'jpeg',quality:72});result.core=await interact(p,c);await p.waitForTimeout(350);const b=await p.screenshot({path:path.join(OUT,'screens',key+'-b.jpg'),type:'jpeg',quality:72});result.frames={a:sha(a),b:sha(b),different:sha(a)!==sha(b)};
      result.viewport=await p.evaluate(()=>({width:innerWidth,documentWidth:document.documentElement.scrollWidth,height:innerHeight}));assert(result.viewport.documentWidth<=result.viewport.width+1,'horizontal viewport overflow');assert(!errors.length&&!failed.length,'runtime or resource error');assert(!external.length,'runtime still depends on remote resources');assert(result.frames.different,'two observed states produced identical screenshots');result.pass=true;
    }catch(e){result.pass=false;result.failure=String(e);await p.screenshot({path:path.join(OUT,'screens',key+'-failure.jpg'),type:'jpeg',quality:70}).catch(()=>{});}
    result.elapsedMs=Date.now()-jobStarted;await context.close();results.push(result);fs.writeFileSync(path.join(OUT,`result-${key}.json`),JSON.stringify(result,null,2));console.log(key,result.pass?'PASS':'FAIL',result.failure||'');
  }}await Promise.all(Array.from({length:Number(process.env.QA_WORKERS||3)},()=>worker()));await browser.close();fs.writeFileSync(path.join(OUT,'latest-run.json'),JSON.stringify({date:new Date().toISOString(),startedAt,buildFingerprint,protocols,widths,count:results.length,passed:results.filter(r=>r.pass).length,results},null,2));if(results.some(r=>!r.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
