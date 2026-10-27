#!/usr/bin/env python3
"""Reuse the pinned 22-case explanation interface for the 100 new originals."""
import json
import shutil
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main():
    items = json.loads((ROOT / "data/new-cases.json").read_text())
    source = (ROOT / "sources/motion22/index.html").read_text()
    font_root = ROOT / "sources/new-originals/detail-fonts"
    font_meta = json.loads((font_root / "provenance.json").read_text())
    css = (font_root / "original.css").read_text()
    for url, filename in font_meta["files"].items():
        css = css.replace(url, "fonts/" + filename)
    source = re.sub(r'<link rel="stylesheet" href="https://fonts.googleapis.com/[^"]+">', lambda m: "<style>" + css + "</style>", source, count=1)
    source = re.sub(r'<link rel="preconnect"[^>]+>', '', source)
    source = source.replace("<head>", '<head><link rel="icon" href="data:,">', 1)
    old_catalog = json.loads(re.search(r'<script type="application/json" id="catalog">(.*?)</script>', source, re.S).group(1))
    catalog = {"as_of": "2026-10-23", "items": items, "toolbox": old_catalog.get("toolbox", {})}
    encoded = json.dumps(catalog, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    source = re.sub(r'(<script type="application/json" id="catalog">).*?(</script>)', lambda m: m[1] + encoded + m[2], source, count=1, flags=re.S)
    source = source.replace("function demoUrl(it){ return 'demos/' + encodeURIComponent(it.id) + '.html'; }", "function demoUrl(it){ return '../new-pages/' + encodeURIComponent(it.id) + '.html'; }")
    source = source.replace("  f.src = demoUrl(it);", """  loadOriginalHtml(it).then(function(html){
    if (self.iframe !== f) return;
    var base = document.createElement('base'); base.href = new URL(demoUrl(it), document.baseURI).href;
    f.srcdoc = html.replace(/<head([^>]*)>/i, function(m){ return m + base.outerHTML; });
  }).catch(function(error){ self.screen.dataset.state = 'missing'; console.error(error); });""")
    source = source.replace("/* ---------- catalog ---------- */", """var originalPayloads = new Map();
function loadOriginalHtml(it){
  if (window.OPUS_FUSION_PAGES && window.OPUS_FUSION_PAGES[it.id]) return Promise.resolve(window.OPUS_FUSION_PAGES[it.id]);
  if (originalPayloads.has(it.id)) return originalPayloads.get(it.id);
  var promise = new Promise(function(resolve,reject){
    var script = document.createElement('script'); script.src = '../new-payloads/' + it.id + '.js';
    script.onload = function(){ script.remove(); var html=window.OPUS_FUSION_PAGES && window.OPUS_FUSION_PAGES[it.id]; typeof html === 'string' ? resolve(html) : reject(new Error('原作载荷缺失')); };
    script.onerror = function(){ script.remove(); originalPayloads.delete(it.id); reject(new Error('原作载荷未能载入')); };
    document.head.append(script);
  }); originalPayloads.set(it.id,promise); return promise;
}
/* ---------- catalog ---------- */""")
    source = source.replace("'摘要': '作者没有公开全文", "'公开配方': '作者公开的风格规则与制作配方，不等于完整生成会话。',\n  '创作简报': '作者公开的项目需求或实施规格，不等于逐轮生成对话。',\n  '摘要': '作者没有公开全文")
    source = source.replace("['原文', '摘录', '摘要'].forEach", "['原文', '摘录', '公开配方', '创作简报', '摘要'].forEach")
    source = source.replace("原文 / 摘录 / 摘要是什么意思", "提示词与配方的标注说明")
    source = source.replace("['简化了什么', n.simplified]", "['接入说明', n.simplified]")
    source = source.replace("预览是 Opus 按该提示词 + 示例输入现场生成的演示版，示例输入为虚构；原作成片见「溯源」。", "此预览运行原作源码。播放与资源路径适配见上方；模型归因、版本、许可与未知日期见「溯源」。")
    source = source.replace("方括号里的内容换成你自己的输入。", "编辑整理的中文改写模板；方括号内容可替换。它不是原作者的逐字提示词。")
    source = source.replace("  if (s.original_url) link(s.original_url, '原帖 / 成片');", """  if (s.original_url) link(s.original_url, '原作入口');
  if (s.code_url) link(s.code_url, '原作源码');
  if (s.recipe_url) link(s.recipe_url, '提示词 / 配方来源');
  if (s.model_evidence_url) link(s.model_evidence_url, '模型归因依据');
  p.append(kv([['模型', s.model], ['日期补充', s.publication_context], ['依据', s.model_evidence], ['固定版本', s.revision], ['原件 SHA-256', s.source_sha256], ['来源定位', s.locator], ['采集日期', s.collected_at], ['许可', s.license]]));""")
    source = source.replace("['日期', s.date ? h('span', { class: 'mono', text: s.date }) : '']", "['作品日期', s.date ? h('span', { class: 'mono', text: s.date }) : '作者未标明；采集日期不代替发布日期']")
    # Keep sound controls in the existing player strip; grid previews remain muted.
    source = source.replace("    s.el.append(s.play, s.scrub, tc);", """    s.el.append(s.play, s.scrub, tc);
    if (big) {
      s.sound = h('button', {type:'button',class:'ext-link','aria-pressed':'false',text:'开启原作声音'});
      s.el.append(s.sound);
    }""")
    source = source.replace("  if (s.play) s.play.addEventListener", """  if (s.sound) s.sound.addEventListener('click',function(){
    var enabled=s.sound.getAttribute('aria-pressed')!=='true';
    s.sound.setAttribute('aria-pressed',String(enabled));s.sound.textContent=enabled?'关闭原作声音':'开启原作声音';
    var w=self.win(); if(w)w.__demo.setSound && w.__demo.setSound(enabled);
  });
  if (s.play) s.play.addEventListener""")
    source = source.replace("收集用 Claude Opus 5.5 做动态视频和动效网页的公开提示词。每条都能直接看运行中的效果，展开后可读说明、复制提示词、查到出处。", "新增 100 条原作，来自 7 个项目。每条运行原作网页，沿用原片库的说明、提示词和溯源入口。")
    source = source.replace("预览是 Opus 按该提示词 + 示例输入现场生成的演示版，原作成片见每条溯源", "预览运行原作源码；公开提示词、风格配方与创作简报分别标注")
    source = source.replace("每个预览都是 Opus 按该条提示词加一组示例输入现场生成的单文件 HTML 演示。示例输入里的品牌、人名和数据都是虚构的；需要实拍或配乐的部分换成了程序化画面，时长也做了压缩。每条具体简化了什么，写在展开后的「说明」里。", "每个预览使用固定版本的原作源码，资源、字体和运行库在本地保存。仅作静态打包、路径和播放控制适配，原作声音保留。中文说明与中文改写模板由本图鉴编辑整理。尚未标明的日期或许可会在各条溯源中说明。")
    source = source.replace("从上面这些提示词里拆出来的可复用部件：骨架、审美块、质量底线、导出流程、运动词汇、禁用词和翻车修正句。每块都能直接复制。", "沿用原 22 条片库的通用工具箱；每块保留原有出处。新增案例的专属配方见各条详情。")
    source = source.replace("提示词是逐字原文；只截了一部分的标「摘录」，转述的标「摘要」，只有描述没有提示词的不收。", "作者公开文本按原文、摘录、公开配方或创作简报标注；编辑中文模板另行标明。")
    source = source.replace("OPUS 5.5 动效片库", "OPUS 5.5 新增原作")
    # Original layout and CSS remain the authoritative template.
    target = ROOT / "dist/fusion/new-100/index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(font_root, target.parent / "fonts", dirs_exist_ok=True)
    target.write_text(source)
    print("built 100 original-source explanations using the pinned 22-case template")


if __name__ == "__main__":
    main()
