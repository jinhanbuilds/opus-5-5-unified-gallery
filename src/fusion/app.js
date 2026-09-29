(() => {
  'use strict';
  const catalog = window.OPUS_FUSION_CATALOG || [];
  const showcase = ['001','v01-showreel','043','v07-ui-morph','008','v05-transformer','026','v03-high-end-product','068','w05-escapement'];
  catalog.sort((a,b) => {
    const ai=showcase.indexOf(a.id), bi=showcase.indexOf(b.id);
    if(ai>=0||bi>=0)return (ai<0?999:ai)-(bi<0?999:bi);
    if(a.medium!==b.medium)return a.medium==='video'?-1:1;
    return a.id.localeCompare(b.id,'en',{numeric:true});
  });
  const intents=['品牌展示','知识可视化','叙事内容','视觉实验','工具与游戏'];
  const $ = (s) => document.querySelector(s);
  const gallery = $('#gallery'), viewer = $('#viewer'), stage = $('#stage'), flight = $('#flight');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const nodes = new Map(), payloads = new Map(), soundPayloads = new Map(), decodedTracks = new Map(), cardPreviews = new Map(), cardPreviewFailures = new Set();
  const state = {phase:'closed', item:null, variant:null, previewRevision:0, trigger:null, card:null, token:0, animations:[], scroll:0, timer:null, videoFrame:0, lastVideoTime:0, soundEnabled:false, soundTrackReady:false, soundBuffer:null, soundSource:null, soundStartContext:0, soundStartOffset:0};
  let audioContext=null, soundGain=null;
  window.OPUS_DIAGNOSTICS = [];
  let visible = catalog, layoutFrame = 0, resizeFrame = 0, searchTimer = 0, toastTimer = 0, cardPreviewTimer = 0, previewPreference = null;
  const filters={medium:'all',intents:new Set(),style:'',motion:'',selected:false};

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function shortId(id){return /^[vw]\d+/.test(id)?id.match(/^[vw]\d+/)[0].toUpperCase():id;}
  function createCard(item, index) {
    const article = el('article','work'); article.dataset.id = item.id;
    const inner = el('div','work-inner');
    inner.style.setProperty('--delay',`${Math.min(index,7)*24+90}ms`);
    if(index>11) inner.style.animation = 'none';
    const button = el('button','work-trigger'); button.type='button';
    button.setAttribute('aria-label',`展开 ${item.id} ${item.name}`);
    button.setAttribute('aria-haspopup','dialog'); button.setAttribute('aria-expanded','false');
    const media = el('span','work-media'), img = el('img');
    if(item.aspect)media.style.setProperty('--cover-aspect',item.aspect.replace(':',' / '));
    img.src=item.thumbnail; img.alt=`${item.name} · 效果画面`;
    img.width=1200; img.height=750; img.loading=index<8?'eager':'lazy'; img.decoding='async';
    img.addEventListener('error',()=>{article.classList.add('image-error');img.alt=`${item.name} · 截图未能载入，仍可打开作品`;});
    const hint = el('span','work-view','查看作品'); hint.append(el('span','','↗')); hint.setAttribute('aria-hidden','true');
    media.append(img,hint);
    const caption=el('span','work-caption'), heading=el('span','work-heading');
    heading.append(el('span','work-no',shortId(item.id)),el('span','work-title',item.name));
    const labels=el('span','work-labels');
    labels.append(el('span','work-medium',item.medium==='video'?'视频型效果':'网页作品'),el('span','work-intent',item.intent));
    if(item.collections.includes('selected22'))labels.append(el('span','work-selected','精选 22'));
    if(item.variants.length>1)labels.append(el('span','work-dual','双版本'));
    caption.append(heading,labels);
    if(item.english)caption.append(el('span','work-english',item.english));
    caption.append(el('span','work-description',item.description));
    button.append(media,caption); button.addEventListener('click',()=>open(item,button,article));
    inner.append(button); article.append(inner); nodes.set(item.id,article); return article;
  }
  gallery.append(...catalog.map(createCard));

  function layout() {
    cancelAnimationFrame(layoutFrame);
    layoutFrame=requestAnimationFrame(()=>{
      const width=gallery.clientWidth, cols=width<490?1:width<850?2:width<1190?3:width<1670?4:5;
      const gap=cols===1?0:26, cardWidth=(width-gap*(cols-1))/cols;
      const heights=Array.from({length:cols},(_,i)=>cols>2?[0,48,15,75,30][i]:0);
      for(const item of visible){const node=nodes.get(item.id);node.style.width=`${cardWidth}px`;}
      for(const [index,item] of visible.entries()){
        const node=nodes.get(item.id), col=index<cols?index:heights.indexOf(Math.min(...heights));
        node.style.left=`${col*(cardWidth+gap)}px`; node.style.top=`${heights[col]}px`;
        heights[col]+=node.getBoundingClientRect().height+(cols===1?34:36);
      }
      gallery.style.height=visible.length?`${Math.max(...heights)-28}px`:'0px';
      scheduleCardPreviews();
    });
  }
  const resize = new ResizeObserver(layout); resize.observe(gallery);
  document.fonts?.ready.then(layout); layout();

  const searchText = new Map(catalog.map(i=>[i.id,`${i.id} ${i.variants.map(v=>v.id).join(' ')} ${i.name} ${i.english} ${i.intent} ${i.originalCategory} ${i.style.join(' ')} ${i.motion.join(' ')} ${i.description} ${i.interaction} ${i.selectedTitle||''} ${i.selectedEffect||''} ${i.searchExtra||''} ${i.prompt}`.toLocaleLowerCase()]));
  function filter(){
    $('#advancedActive').hidden=!filters.style&&!filters.motion;
    const query=$('#search').value.trim().toLocaleLowerCase();
    const terms=query.split(/\s+/).filter(Boolean);
    const matches=i=>filters.medium==='all'||i.medium===filters.medium;
    visible=catalog.filter(i=>matches(i)
      &&(!filters.intents.size||filters.intents.has(i.intent))
      &&(!filters.style||i.style.includes(filters.style))
      &&(!filters.motion||i.motion.includes(filters.motion))
      &&(!filters.selected||i.collections.includes('selected22'))
      &&(/^\d{1,3}$/.test(query)?i.id===query.padStart(3,'0'):terms.every(term=>searchText.get(i.id).includes(term))));
    const ids=new Set(visible.map(i=>i.id));
    for(const [id,node] of nodes){node.hidden=!ids.has(id);node.querySelector('.work-inner').style.animation='none';}
    $('#resultCount').textContent=`${visible.length} / 118`;
    $('#empty').hidden=visible.length>0; gallery.hidden=visible.length===0; layout();
  }
  $('#search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(filter,100);});
  function clearFilters(){
    Object.assign(filters,{medium:'all',intents:new Set(),style:'',motion:'',selected:false});
    $('#search').value='';$('#styleFilter').value='';$('#motionFilter').value='';
    $('#selectedFilter').setAttribute('aria-pressed','false');
    for(const button of document.querySelectorAll('#mediumFilters button,#intentFilters button'))button.setAttribute('aria-pressed',String(button.dataset.medium==='all'||button.dataset.intent==='all'));
    filter();
  }
  $('#resetSearch').addEventListener('click',()=>{clearFilters();$('#search').focus();});
  $('#clearFilters').addEventListener('click',clearFilters);
  function makeButtons(group,values,attribute){
    const host=$(group);
    for(const value of values){
      const button=el('button','',value==='all'?'全部用途':value);
      button.type='button';button.dataset[attribute]=value;button.setAttribute('aria-pressed',String(value==='all'));
      if(value!=='all')button.append(el('small','',String(catalog.filter(i=>i.intent===value).length)));
      button.addEventListener('click',()=>{
        if(value==='all')filters.intents.clear();
        else if(filters.intents.has(value))filters.intents.delete(value);
        else filters.intents.add(value);
        for(const peer of host.querySelectorAll('button')){
          const selected=peer.dataset.intent==='all'?!filters.intents.size:filters.intents.has(peer.dataset.intent);
          peer.setAttribute('aria-pressed',String(selected));
        }
        filter();
      });
      host.append(button);
    }
  }
  makeButtons('#intentFilters',['all',...intents],'intent');
  for(const button of document.querySelectorAll('#mediumFilters button'))button.addEventListener('click',()=>{
    filters.medium=button.dataset.medium;
    for(const peer of document.querySelectorAll('#mediumFilters button'))peer.setAttribute('aria-pressed',String(peer===button));filter();
  });
  function optionsFor(select,field){
    const names=[...new Set(catalog.flatMap(i=>i[field]))];
    for(const name of names){const option=el('option','',name);option.value=name;select.append(option);}
    select.addEventListener('change',()=>{filters[field]=select.value;filter();});
  }
  optionsFor($('#styleFilter'),'style');optionsFor($('#motionFilter'),'motion');
  $('#selectedFilter').addEventListener('click',()=>{filters.selected=!filters.selected;$('#selectedFilter').setAttribute('aria-pressed',String(filters.selected));filter();});
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&state.phase==='closed'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){
      e.preventDefault();$('#search').focus();
    }
  });

  function cancelAnimations(){for(const animation of state.animations)animation.cancel();state.animations=[];}
  function animate(node,frames,options){
    if(reduced.matches) return Promise.resolve();
    const animation=node.animate(frames,{fill:'both',...options});state.animations.push(animation);
    return animation.finished.catch(()=>{});
  }
  function rect(node){const r=node.getBoundingClientRect();return {left:r.left,top:r.top,width:r.width,height:r.height};}
  function posterRect(){
    const r=rect(stage), aspect=state.item?.aspect?.split(':').map(Number), ratio=aspect?aspect[0]/aspect[1]:1.6;
    const w=Math.min(r.width,r.height*ratio),h=w/ratio;
    return {left:r.left+(r.width-w)/2,top:r.top+(r.height-h)/2,width:w,height:h};
  }
  function placeFlight(r){Object.assign(flight.style,{left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,display:'block',opacity:'1'});}
  function framesBetween(a,b){return [a,b].map(r=>({left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,opacity:1}));}
  function populate(item){
    $('#screenNumber').textContent=shortId(item.id);
    $('#detailCategory').textContent=`${item.medium==='video'?'视频型效果':'网页作品'} / ${item.intent}`;
    $('#detailEnglish').textContent=item.english;$('#detailEnglish').hidden=!item.english;
    $('#detailTitle').textContent=item.name;
    $('#detailDescription').textContent=item.description;$('#detailInteraction').textContent=item.interaction;
    $('#detailPrompt').textContent=item.prompt;
    $('#promptTitle').textContent=item.promptKind==='摘录'?'提示词摘录':'原始提示词';
    $('#promptKind').textContent=item.promptKind;
    $('#promptNote').textContent=item.promptNote;
    $('#briefDetails').hidden=!item.briefPrompt;
    $('#briefDetails').open=false;$('#briefPrompt').textContent=item.briefPrompt||'';
    $('#demoDetails').hidden=!item.sampleInputs&&!item.demoNote;
    $('#demoDetails').open=false;$('#sampleInputs').textContent=item.sampleInputs?'示例输入：'+item.sampleInputs:'';
    $('#demoNote').textContent=item.demoNote?'演示说明：'+item.demoNote:'';
    $('#promptFile').hidden=!item.promptFile;
    if(item.promptFile)$('#promptFile').href=item.promptFile;
    const badges=$('#detailBadges');badges.replaceChildren();
    for(const label of [item.originalCategory,...item.style,...item.motion])badges.append(el('span','',label));
    if(item.collections.includes('selected22'))badges.append(el('span','badge-selected','精选 22'));
    const sources=$('#sourceLinks');sources.replaceChildren();
    function sourceLink(label,url){const a=el('a','',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener';sources.append(a);}
    sourceLink(item.sourceLabel,item.sourceUrl);
    if(item.selectedSourceUrl&&item.selectedSourceUrl!==item.sourceUrl)sourceLink((item.selectedSourceAuthor||'动效片库')+' · 精选来源',item.selectedSourceUrl);
    if(item.collections.includes('selected22')){
      const caseId=item.variants.find(v=>v.id.startsWith('w'))?.id||item.id;
      const recipe=window.OPUS_LEXICON_LINKS?.cases?.[caseId];
      if(recipe)sourceLink('动效词典 · 对应配方',recipe);
      sourceLink('原 22 条片库 · 完整技法拆解',`fusion/legacy-22/index.html#${encodeURIComponent(caseId)}`);
    }
    $('#sourceSummary').textContent=item.variants.length>1
      ? '同一创意提示词保留两个不同演示。动效片库版本是按提示词制作的另一种呈现。'
      :item.collections.includes('selected22')
        ? '此演示按公开提示词与示例输入制作。原作者作品请从上方来源查看。'
        :'此作品及其完整提示词由原仓库提供。';
    const picker=$('#variantPicker');picker.replaceChildren();picker.hidden=item.variants.length<2;
    for(const variant of item.variants){
      const button=el('button','',variant.label);button.type='button';button.dataset.variant=variant.id;
      button.setAttribute('aria-pressed',String(variant===item.variants[0]));
      button.addEventListener('click',()=>chooseVariant(variant));picker.append(button);
    }
    state.variant=item.variants[0];
    updateVariantLinks();
    $('#poster').src=item.thumbnail;$('#poster').alt=`${item.name} 预览图`;
    flight.src=item.thumbnail;
    $('#copyPrompt span').textContent=item.promptKind==='摘录'?'复制提示词摘录':'复制完整提示词';
    $('#copyStatus').textContent='复制内容与上方显示一致';
    $('#previewError').hidden=true;
    stage.classList.remove('is-ready');$('#screenState').textContent='正在载入';
    stage.classList.toggle('is-portrait',item.medium==='video'&&item.aspect==='9:16');
    stage.classList.toggle('is-square',item.medium==='video'&&item.aspect==='1:1');
    $('#videoControls').hidden=item.medium!=='video';
    $('#screenHint').textContent=item.medium==='video'?'原演示无音轨 · 可手动开启后补音效':'点击画面交互；有声作品可播放';
    if(item.medium==='video'){
      $('#videoSeek').max=String(item.duration||15);$('#videoSeek').value='0';
      $('#videoTime').textContent=`00:00 / ${fmtTime(item.duration||15)}`;
      $('#videoPlay').textContent='暂停';$('#videoPlay').setAttribute('aria-label','暂停');
      $('#soundToggle').disabled=true;
      state.soundTrackReady=false;
      loadSoundTrack(item);
    }
    updateSoundButton();
    $('#frameHost').replaceChildren();
  }

  function updateVariantLinks(){
    for(const id of ['openOriginal','errorOriginal'])$('#'+id).href=state.variant.file;
    $('#screenState').textContent=state.variant.label+' · 正在载入';
  }

  function fmtTime(seconds){
    const value=Math.floor(Number(seconds)||0);
    return `${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`;
  }

  function updateSoundButton(){
    const button=$('#soundToggle');
    button.setAttribute('aria-pressed',String(state.soundEnabled));
    button.setAttribute('aria-label',state.soundEnabled?'关闭后补背景音效':'开启后补背景音效');
    button.textContent=state.soundEnabled?'♫ 关闭音效':'♫ 开启音效';
  }
  function ensureAudioContext(){
    if(audioContext)return audioContext;
    const Context=window.AudioContext||window.webkitAudioContext;
    if(!Context)throw new Error('浏览器不支持音频播放');
    audioContext=new Context();soundGain=audioContext.createGain();
    soundGain.gain.value=.48;soundGain.connect(audioContext.destination);
    return audioContext;
  }
  function loadSoundTrack(item){
    let promise=soundPayloads.get(item.id);
    if(!promise){
      promise=new Promise((resolve,reject)=>{
        if(window.OPUS_AUDIO_TRACKS?.[item.id]){resolve(window.OPUS_AUDIO_TRACKS[item.id]);return;}
        const script=document.createElement('script');
        script.src=`fusion/audio/${item.id}.js`;script.async=true;
        script.onload=()=>{script.remove();const data=window.OPUS_AUDIO_TRACKS?.[item.id];data?resolve(data):reject(new Error('音效数据缺失'));};
        script.onerror=()=>{script.remove();soundPayloads.delete(item.id);reject(new Error('音效文件无法载入'));};
        document.head.append(script);
      });
      soundPayloads.set(item.id,promise);
    }
    let decoded=decodedTracks.get(item.id);
    if(!decoded){
      decoded=promise.then(data=>{
        const binary=atob(data.slice(data.indexOf(',')+1));
        const bytes=Uint8Array.from(binary,char=>char.charCodeAt(0));
        return ensureAudioContext().decodeAudioData(bytes.buffer);
      });
      decodedTracks.set(item.id,decoded);
    }
    decoded.then(buffer=>{
      if(state.item?.id!==item.id||state.phase==='closing'||state.phase==='closed')return;
      state.soundBuffer=buffer;state.soundTrackReady=true;
      if(stage.classList.contains('is-ready'))$('#soundToggle').disabled=false;
    }).catch(()=>{
      if(state.item?.id===item.id)$('#screenHint').textContent='后补音效未能载入，画面仍可播放';
    });
  }
  function pauseSound(){
    const source=state.soundSource;state.soundSource=null;
    if(source){try{source.stop();}catch{}source.disconnect();}
  }
  function stopSound(clearSource=false){
    pauseSound();state.soundEnabled=false;updateSoundButton();
    if(clearSource){state.soundBuffer=null;state.soundTrackReady=false;}
  }
  function startSound(time){
    pauseSound();
    const source=audioContext.createBufferSource();source.buffer=state.soundBuffer;source.loop=true;
    const end=Math.min(state.item.duration||source.buffer.duration,source.buffer.duration);
    source.loopEnd=end;source.connect(soundGain);
    const offset=Math.max(0,Math.min(Number(time)||0,end-.05));
    source.start(0,offset);
    state.soundSource=source;state.soundStartContext=audioContext.currentTime;state.soundStartOffset=offset;
  }
  function syncSound(time,playing,force=false){
    if(!state.soundEnabled||!state.soundBuffer||state.item?.medium!=='video')return;
    if(!playing||document.hidden){pauseSound();return;}
    if(audioContext?.state!=='running')return;
    const duration=Math.min(state.item.duration||state.soundBuffer.duration,state.soundBuffer.duration);
    const predicted=state.soundSource?(state.soundStartOffset+audioContext.currentTime-state.soundStartContext)%duration:NaN;
    const drift=Math.min(Math.abs(predicted-time),duration-Math.abs(predicted-time));
    if(force||!state.soundSource||drift>.35)startSound(time);
  }
  $('#soundToggle').addEventListener('click',()=>{
    if(state.item?.medium!=='video')return;
    if(state.soundEnabled){
      stopSound();$('#screenHint').textContent='原演示无音轨 · 后补音效已关闭';return;
    }
    state.soundEnabled=true;updateSoundButton();
    $('#screenHint').textContent='正在播放原创后补音效 · 可随时关闭';
    const itemId=state.item.id;
    ensureAudioContext().resume().then(()=>{
      if(!state.soundEnabled||state.item?.id!==itemId)return;
      const demo=$('#frameHost iframe')?.contentWindow?.__demo;
      syncSound(demo?.time||0,demo?.playing!==false,true);
    }).catch(()=>{
      if(!state.soundEnabled)return;
      stopSound();$('#screenHint').textContent='浏览器未能播放音效，请再点一次开启';
    });
  });
  window.OPUS_SOUND_DIAGNOSTICS=()=>({
    contextState:audioContext?.state||'not-created',
    playing:!!state.soundSource,
    time:state.soundSource?(state.soundStartOffset+audioContext.currentTime-state.soundStartContext)%(state.item?.duration||state.soundBuffer.duration):null,
    bufferDuration:state.soundBuffer?.duration||null,
    itemId:state.item?.id||null,
  });

  function stopVideoTicker(){cancelAnimationFrame(state.videoFrame);state.videoFrame=0;}
  function tickVideo(){
    if(state.phase==='closed'||state.phase==='closing'||state.item?.medium!=='video')return;
    const frame=$('#frameHost iframe');
    try{
      const demo=frame?.contentWindow?.__demo;
      if(demo){
        const time=Number(demo.time)||0, duration=state.item.duration||15;
        if(document.activeElement!==$('#videoSeek'))$('#videoSeek').value=String(time);
        $('#videoTime').textContent=`${fmtTime(time)} / ${fmtTime(duration)}`;
        $('#videoPlay').textContent=demo.playing?'暂停':'播放';
        $('#videoPlay').setAttribute('aria-label',demo.playing?'暂停':'播放');
        syncSound(time,!!demo.playing,time<state.lastVideoTime-.5);
        state.lastVideoTime=time;
      }
    }catch{}
    state.videoFrame=requestAnimationFrame(tickVideo);
  }

  function videoCommand(type,time){
    const frame=$('#frameHost iframe');if(!frame)return;
    try{
      const win=frame.contentWindow;
      if(type==='seek'&&typeof win.seek==='function')win.seek(time);
      else if(type==='play')win.__demo?.play?.();
      else if(type==='pause')win.__demo?.pause?.();
      else win.postMessage(type==='seek'?{type:'demo:seek',t:time}:{type:'demo:'+type},'*');
    }catch{frame.contentWindow?.postMessage(type==='seek'?{type:'demo:seek',t:time}:{type:'demo:'+type},'*');}
  }
  $('#videoPlay').addEventListener('click',()=>{
    const frame=$('#frameHost iframe');
    let playing=true;try{playing=!!frame?.contentWindow?.__demo?.playing;}catch{}
    videoCommand(playing?'pause':'play');
    try{syncSound(frame?.contentWindow?.__demo?.time||0,!playing,true);}catch{}
  });
  $('#videoSeek').addEventListener('input',()=>{
    const time=Number($('#videoSeek').value);videoCommand('seek',time);
    state.lastVideoTime=time;
    $('#videoTime').textContent=`${fmtTime(time)} / ${fmtTime(state.item?.duration||15)}`;
    try{syncSound(time,!!$('#frameHost iframe')?.contentWindow?.__demo?.playing,true);}catch{}
  });

  function loadPayload(item,variant){
    const key=variant.id==='source'?item.id:variant.id;
    const cache=variant.id==='source'?window.OPUS_PAGES:window.OPUS_FUSION_PAGES;
    if(cache?.[key])return Promise.resolve(cache[key]);
    if(payloads.has(variant.payload))return payloads.get(variant.payload);
    const promise=new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=variant.payload;script.async=true;
      const deadline=setTimeout(()=>{script.remove();payloads.delete(variant.payload);reject(new Error('预览文件加载超时'));},12000);
      script.onload=()=>{clearTimeout(deadline);script.remove();
        const html=(variant.id==='source'?window.OPUS_PAGES:window.OPUS_FUSION_PAGES)?.[key];
        if(typeof html==='string')resolve(html);else{payloads.delete(variant.payload);reject(new Error('预览文件内容缺失'));}
      };
      script.onerror=()=>{clearTimeout(deadline);script.remove();payloads.delete(variant.payload);reject(new Error('无法读取本地预览文件'));};
      document.head.append(script);
    });
    payloads.set(variant.payload,promise);return promise;
  }

  function cardPreviewEnabled(){return previewPreference ?? !reduced.matches;}
  function updateCardPreviewToggle(){
    const button=$('#livePreviewToggle'), enabled=cardPreviewEnabled();
    button.textContent=enabled?'动态预览 · 开（无声）':'动态预览 · 关';
    button.setAttribute('aria-pressed',String(enabled));
  }
  function stopCardPreview(id){
    const preview=cardPreviews.get(id);if(!preview)return;
    preview.active=false;clearTimeout(preview.timer);
    preview.frame?.remove();preview.media.classList.remove('is-live');
    cardPreviews.delete(id);
  }
  function stopAllCardPreviews(){for(const id of [...cardPreviews.keys()])stopCardPreview(id);}
  function scheduleCardPreviews(delay=110){
    clearTimeout(cardPreviewTimer);
    cardPreviewTimer=setTimeout(reconcileCardPreviews,delay);
  }
  function reconcileCardPreviews(){
    if(!cardPreviewEnabled()||document.hidden||state.phase!=='closed'){
      stopAllCardPreviews();return;
    }
    const limit=innerWidth<520?1:innerWidth<1000?2:innerWidth<1670?4:5;
    const candidates=[];
    for(const item of visible){
      if(cardPreviewFailures.has(item.id))continue;
      const media=nodes.get(item.id).querySelector('.work-media'), bounds=media.getBoundingClientRect();
      const overlap=Math.min(bounds.bottom,innerHeight)-Math.max(bounds.top,0);
      if(overlap<Math.min(48,bounds.height*.2)||bounds.right<=0||bounds.left>=innerWidth)continue;
      candidates.push({item,top:bounds.top,left:bounds.left});
    }
    candidates.sort((a,b)=>a.top-b.top||a.left-b.left);
    const wanted=new Set(candidates.slice(0,limit).map(({item})=>item.id));
    for(const id of [...cardPreviews.keys()])if(!wanted.has(id))stopCardPreview(id);
    for(const {item} of candidates.slice(0,limit))if(!cardPreviews.has(item.id))startCardPreview(item);
  }
  async function startCardPreview(item){
    const media=nodes.get(item.id).querySelector('.work-media');
    const preview={media,frame:null,timer:0,active:true};
    cardPreviews.set(item.id,preview);
    try{
      const html=await loadPayload(item,item.variants[0]);
      if(!preview.active||cardPreviews.get(item.id)!==preview)return;
      const frame=el('iframe','work-live');preview.frame=frame;
      frame.title=`${item.name} · 动态预览`;
      frame.tabIndex=-1;frame.setAttribute('aria-hidden','true');
      frame.setAttribute('allow','autoplay \'none\'');
      frame.setAttribute('referrerpolicy','no-referrer');
      const bridge=`<script>window.addEventListener('error',()=>parent.postMessage({opusCardPreview:true},'*'));window.addEventListener('unhandledrejection',()=>parent.postMessage({opusCardPreview:true},'*'))<\/script>`;
      frame.srcdoc=html.replace(/<head([^>]*)>/i,match=>match+'<base href="about:srcdoc">'+bridge);
      preview.timer=setTimeout(()=>{
        if(cardPreviews.get(item.id)===preview){cardPreviewFailures.add(item.id);stopCardPreview(item.id);scheduleCardPreviews(0);}
      },12000);
      frame.addEventListener('load',()=>{
        if(!preview.active||cardPreviews.get(item.id)!==preview)return;
        clearTimeout(preview.timer);
        try{if(item.medium==='video')frame.contentWindow.__demo?.play?.();}catch{}
        media.classList.add('is-live');
      },{once:true});
      frame.addEventListener('error',()=>{
        if(cardPreviews.get(item.id)===preview){cardPreviewFailures.add(item.id);stopCardPreview(item.id);scheduleCardPreviews(0);}
      },{once:true});
      media.insertBefore(frame,media.querySelector('.work-view'));
    }catch{
      if(cardPreviews.get(item.id)===preview){cardPreviewFailures.add(item.id);stopCardPreview(item.id);scheduleCardPreviews(0);}
    }
  }
  updateCardPreviewToggle();
  $('#livePreviewToggle').addEventListener('click',()=>{
    previewPreference=!cardPreviewEnabled();updateCardPreviewToggle();
    if(cardPreviewEnabled())scheduleCardPreviews(0);else stopAllCardPreviews();
  });
  window.addEventListener('scroll',()=>scheduleCardPreviews(90),{passive:true});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){stopAllCardPreviews();pauseSound();}
    else{
      scheduleCardPreviews(0);
      try{const demo=$('#frameHost iframe')?.contentWindow?.__demo;if(demo)syncSound(demo.time,!!demo.playing,true);}catch{}
    }
  });
  window.addEventListener('message',event=>{
    if(!event.data?.opusCardPreview)return;
    for(const [id,preview] of cardPreviews){
      if(event.source===preview.frame?.contentWindow){
        cardPreviewFailures.add(id);stopCardPreview(id);scheduleCardPreviews(0);break;
      }
    }
  });

  async function loadPreview(item,variant,token,revision){
    const current=()=>state.token===token&&state.previewRevision===revision&&state.phase!=='closed'&&state.phase!=='closing';
    const fail=(message)=>{
      if(!current())return;
      $('#previewError').hidden=false;$('#screenState').textContent='载入失败';
      window.OPUS_DIAGNOSTICS.push({id:item.id,variant:variant.id,type:'load',message});
    };
    try{
      const html=await loadPayload(item,variant);
      if(!current())return;
      const frame=el('iframe');frame.title=`${item.id} ${item.name} · 完整动态预览`;
      frame.setAttribute('allow','fullscreen');frame.setAttribute('referrerpolicy','no-referrer');
      // Render from saved source text so a direct file:// launch works without fetch.
      const bridge=`<script>(()=>{const send=(type,message)=>parent.postMessage({opusPreview:true,token:${token},type,message},'*');window.addEventListener('error',e=>send('error',e.message));window.addEventListener('unhandledrejection',e=>send('error',String(e.reason)));window.addEventListener('keydown',e=>{if(e.key==='Escape')queueMicrotask(()=>{if(!e.defaultPrevented)send('escape','');});});})();<\/script>`;
      frame.srcdoc=html.replace(/<head([^>]*)>/i,(match)=>match+'<base href="about:srcdoc">'+bridge);
      state.timer=setTimeout(()=>fail('页面启动超时'),12000);
      frame.addEventListener('load',()=>{
        if(!current())return;
        clearTimeout(state.timer);
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
          if(!current())return;
          stage.classList.add('is-ready');$('#screenState').textContent=variant.label+' · '+(item.medium==='video'?'可拖动时间线':'可交互预览');
          if(item.medium==='video'){$('#soundToggle').disabled=!state.soundTrackReady;stopVideoTicker();tickVideo();}
        }));
      },{once:true});
      frame.addEventListener('error',()=>fail('页面载入失败'),{once:true});
      $('#frameHost').replaceChildren(frame);
    }catch(error){fail(error.message);}
  }

  function chooseVariant(variant){
    if(!state.item||state.variant===variant||state.phase==='closing')return;
    stopSound();$('#soundToggle').disabled=true;
    state.variant=variant;state.previewRevision++;
    setCaseHash(variant.id==='source'?state.item.id:variant.id);
    clearTimeout(state.timer);stopVideoTicker();$('#frameHost').replaceChildren();
    stage.classList.remove('is-ready');$('#previewError').hidden=true;
    for(const button of $('#variantPicker').querySelectorAll('button'))button.setAttribute('aria-pressed',String(button.dataset.variant===variant.id));
    updateVariantLinks();
    loadPreview(state.item,variant,state.token,state.previewRevision);
  }

  function setCaseHash(id){
    try{history.replaceState(null,'',location.pathname+location.search+(id?'#'+encodeURIComponent(id):''));}catch{}
  }
  async function open(item,trigger,card,requestedId=item.id){
    if(state.phase!=='closed')finishClose(false);
    stopAllCardPreviews();cancelAnimations();const token=++state.token;
    Object.assign(state,{phase:'opening',item,variant:item.variants[0],previewRevision:0,trigger,card,scroll:window.scrollY,lastVideoTime:0});
    setCaseHash(requestedId);
    const from=rect(trigger.querySelector('.work-media'));
    populate(item);viewer.classList.remove('is-closing');viewer.classList.add('is-entering');
    document.body.style.overflow='hidden';
    viewer.showModal();$('#infoScroll').scrollTop=0;$('.viewer-layout').scrollTop=0;
    trigger.setAttribute('aria-expanded','true');card.classList.add('is-source');
    $('#close').focus({preventScroll:true});
    const to=posterRect();placeFlight(from);
    requestAnimationFrame(()=>{if(state.token===token)viewer.classList.remove('is-entering');});
    // The preview can load immediately; flight remains above it until the shared image settles.
    loadPreview(item,state.variant,token,state.previewRevision);
    const motion=Promise.all([
      animate(flight,framesBetween(from,to),{duration:520,easing:'cubic-bezier(.18,.75,.2,1)'}),
      animate($('.screen'),[{opacity:0},{opacity:1}],{duration:300,delay:85,easing:'ease-out'}),
      animate($('.info'),[{opacity:0,transform:'translateX(25px)'},{opacity:1,transform:'translateX(0)'}],{duration:360,delay:150,easing:'cubic-bezier(.18,.75,.2,1)'})
    ]);
    await motion;
    if(state.token!==token||state.phase!=='opening')return;
    flight.style.display='none';cancelAnimations();state.phase='open';
  }

  async function close(){
    if(state.phase==='closed'||state.phase==='closing')return;
    setCaseHash('');
    const duringOpen=state.phase==='opening';
    const from=duringOpen&&flight.style.display==='block'?rect(flight):posterRect();
    const to=state.trigger?rect(state.trigger.querySelector('.work-media')):from;
    const token=++state.token;state.phase='closing';clearTimeout(state.timer);stopVideoTicker();stopSound(true);
    cancelAnimations();viewer.classList.add('is-closing');viewer.classList.remove('is-entering');
    // Remove the browsing context now, so sound and animation stop on the close action.
    $('#frameHost').replaceChildren();stage.classList.remove('is-ready');placeFlight(from);
    await Promise.all([
      animate($('.info'),[{opacity:1,transform:'translateX(0)'},{opacity:0,transform:'translateX(16px)'}],{duration:140,easing:'ease-in'}),
      animate($('.screen'),[{opacity:1},{opacity:0}],{duration:230,easing:'ease-in'}),
      animate(flight,framesBetween(from,to),{duration:250,delay:70,easing:'cubic-bezier(.4,0,.2,1)'})
    ]);
    if(state.token===token)finishClose();
  }
  function finishClose(restore=true){
    clearTimeout(state.timer);stopVideoTicker();stopSound(true);cancelAnimations();$('#frameHost').replaceChildren();
    flight.style.display='none';if(viewer.open)viewer.close();
    viewer.classList.remove('is-entering','is-closing');document.body.style.overflow='';
    state.card?.classList.remove('is-source');state.trigger?.setAttribute('aria-expanded','false');
    if(restore){window.scrollTo({top:state.scroll,behavior:'instant'});state.trigger?.focus({preventScroll:true});}
    Object.assign(state,{phase:'closed',item:null,variant:null,trigger:null,card:null});
    scheduleCardPreviews();
  }
  $('#close').addEventListener('click',close);
  viewer.addEventListener('cancel',e=>{e.preventDefault();close();});
  viewer.addEventListener('click',e=>{if(e.target===viewer)close();});
  $('#retry').addEventListener('click',()=>{
    if(!state.item)return;clearTimeout(state.timer);stopVideoTicker();stopSound();$('#soundToggle').disabled=true;$('#frameHost').replaceChildren();
    $('#previewError').hidden=true;stage.classList.remove('is-ready');$('#screenState').textContent='正在载入';
    state.previewRevision++;loadPreview(state.item,state.variant,state.token,state.previewRevision);
  });
  window.addEventListener('message',event=>{
    const frame=$('#frameHost iframe'), message=event.data;
    if(!frame||event.source!==frame.contentWindow||!message?.opusPreview||message.token!==state.token)return;
    if(message.type==='escape')close();
    if(message.type==='error'){
      window.OPUS_DIAGNOSTICS.push({id:state.item?.id,type:'source',message:message.message});
      $('#screenState').textContent='源页面报告错误';
    }
  });
  window.addEventListener('resize',()=>{
    cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>{
      if(state.phase==='opening'){
        cancelAnimations();flight.style.display='none';viewer.classList.remove('is-entering');state.phase='open';
      }
    });
  });
  reduced.addEventListener('change',()=>{
    updateCardPreviewToggle();scheduleCardPreviews(0);
    if(!reduced.matches)return;
    if(state.phase==='closing')finishClose();
    else if(state.phase==='opening'){cancelAnimations();flight.style.display='none';state.phase='open';}
  });

  function notify(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2400);}
  $('#copyPrompt').addEventListener('click',async()=>{
    const item=state.item;if(!item)return;
    try{
      let copied=false;
      if(navigator.clipboard?.writeText&&window.isSecureContext){
        try{await navigator.clipboard.writeText(item.prompt);copied=true;}catch{}
      }
      if(!copied){
        const field=el('textarea');field.value=item.prompt;field.setAttribute('readonly','');
        Object.assign(field.style,{position:'fixed',left:'0',top:'0',opacity:'0'});
        viewer.append(field);field.focus();field.select();field.setSelectionRange(0,field.value.length);
        copied=document.execCommand('copy');field.remove();$('#copyPrompt').focus({preventScroll:true});
      }
      if(!copied)throw new Error('clipboard unavailable');
      if(state.item?.id===item.id){$('#copyPrompt span').textContent=item.promptKind==='摘录'?'已复制提示词摘录':'已复制完整提示词';$('#copyStatus').textContent='复制内容与上方显示一致';}
      notify(`已复制「${item.name}」${item.promptKind==='摘录'?'提示词摘录':'提示词'}`);
    }catch{
      $('#copyStatus').textContent='复制受限，可选中上方原文手动复制';
      const range=document.createRange();range.selectNodeContents($('#detailPrompt'));const selection=getSelection();selection.removeAllRanges();selection.addRange(range);
    }
  });
  function openFromHash(){
    let id='';try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
    if(!id){if(state.phase==='open')close();return;}
    const item=catalog.find(entry=>entry.id===id||entry.variants.some(variant=>variant.id===id));
    if(!item)return;
    const variant=item.variants.find(candidate=>candidate.id===id);
    if(state.item?.id===item.id&&(id===item.id||state.variant?.id===id))return;
    const card=nodes.get(item.id),trigger=card?.querySelector('.work-trigger');
    if(!card||!trigger)return;
    if(card.hidden)clearFilters();
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      card.scrollIntoView({block:'center',behavior:'instant'});
      open(item,trigger,card,id);
      if(variant&&variant!==item.variants[0])chooseVariant(variant);
    }));
  }
  window.addEventListener('hashchange',openFromHash);
  if(location.hash)openFromHash();
})();
