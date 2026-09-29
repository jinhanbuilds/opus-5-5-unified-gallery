#!/usr/bin/env python3
"""Build the local, reviewable index for the two Opus 5.5 collections."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
HERE = ROOT / "dist" / "fusion"
SOURCE_22 = ROOT / "sources" / "motion22" / "index.html"
OVERLAP = {
    "w01-aurora-glass": "001",
    "w02-longform": "008",
    "w03-art-deco": "015",
    "w04-pulse": "026",
}
INTENTS = ["品牌展示", "知识可视化", "叙事内容", "视觉实验", "工具与游戏"]
BASE_INTENT = {
    "交互网页": "品牌展示",
    "生成艺术": "视觉实验",
    "排版实验": "视觉实验",
    "科学与模拟": "知识可视化",
    "音乐与游戏": "工具与游戏",
    "数据与工具": "工具与游戏",
}
INTENT_OVERRIDES = {
    "008": "叙事内容", "022": "叙事内容", "039": "叙事内容",
    "077": "叙事内容", "098": "叙事内容", "048": "视觉实验",
    "049": "视觉实验", "026": "视觉实验",
    "020": "知识可视化", "028": "知识可视化", "031": "知识可视化",
    "044": "知识可视化", "056": "知识可视化", "063": "知识可视化",
    "073": "知识可视化", "083": "知识可视化",
}
INTENT_22 = {
    "动效技法": "视觉实验", "产品与品牌": "品牌展示",
    "知识科普": "知识可视化", "镜头与地图": "知识可视化",
    "故事与片头": "叙事内容", "落地页": "品牌展示",
    "滚动叙事": "叙事内容", "交互与声音": "视觉实验",
    "3D 与 WebGL": "视觉实验",
}

# Navigation cues are conservative, editor-selected examples. Search always covers
# the complete text, including works that have no visual or motion cue yet.
STYLE_GROUPS = {
    "画册排版": "003 006 008 014 015 029 043 056 058 068 087 096 v08-kinetic-type",
    "玻璃与光": "001 012 032 041 045 074 082 v03-high-end-product",
    "金属与机械": "004 010 017 024 027 029 057 062 073 088 093 097 w05-escapement",
    "自然与手作": "005 011 018 021 037 040 051 059 061 065 069 075 078 084 091 094 w07-sakura-valley",
    "复古数字": "002 016 019 038 060 067 081 089 w06-neon-fluid",
    "极简与建筑": "020 024 031 043 047 056 071 096",
}
MOTION_GROUPS = {
    "滚动驱动": "008 014 022 043 063 068 096 w05-escapement",
    "形变转场": "010 027 048 050 054 068 v07-ui-morph",
    "物理模拟": "005 013 017 030 037 042 055 062 066 084 086 093 095 097 100 w06-neon-fluid",
    "声音与节奏": "007 026 057 079 080 092 v03-high-end-product v08-kinetic-type",
    "生成绘制": "003 009 011 021 023 034 045 049 059 065 075 078 094",
    "空间视差": "001 002 018 039 043 072 091 v09-room-to-quarks w07-sakura-valley",
}


def compact_json(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"))


def cues(item_id: str, groups: dict[str, str]) -> list[str]:
    return [name for name, ids in groups.items() if item_id in ids.split()]


def source_100() -> list[dict]:
    raw = (ROOT / "dist" / "preview" / "catalog.js").read_text()
    prefix = "window.OPUS_CATALOG = "
    assert raw.startswith(prefix)
    return json.loads(raw[len(prefix) :].strip().removesuffix(";"))


def source_22() -> list[dict]:
    source = SOURCE_22.read_text(encoding="utf-8")
    match = re.search(r'<script type="application/json" id="catalog">(.*?)</script>', source, re.S)
    assert match, "Pinned 22-case catalog not found"
    return json.loads(match.group(1))["items"]


def make_100(item: dict) -> dict:
    ident = item["id"]
    return {
        "id": ident,
        "name": item["name"],
        "english": item["title"],
        "description": item["description"],
        "interaction": item["interaction"],
        "medium": "web",
        "intent": INTENT_OVERRIDES.get(ident, BASE_INTENT[item["category"]]),
        "style": cues(ident, STYLE_GROUPS),
        "motion": cues(ident, MOTION_GROUPS),
        "originalCategory": item["category"],
        "thumbnail": item["thumbnail"],
        "prompt": item["prompt"],
        "promptKind": "完整原文",
        "promptNote": "原仓库 TXT 的创意要求与统一生成要求。",
        "promptFile": item["textFile"],
        "sourceUrl": "https://github.com/MiaAI-Lab/Claude-Opus-5.5-100-HTML-Files/blob/main/" + item["textFile"],
        "sourceLabel": "MiaAI-Lab 原仓库",
        "collections": ["html100"],
        "variants": [{
            "id": "source", "label": "原仓库作品", "file": item["file"],
            "payload": f"preview/pages/{ident}.js", "medium": "web",
        }],
        "searchExtra": " ".join([item["originalDescription"], item["techniques"], item["originalInteraction"]]),
    }


def add_22(base: dict | None, item: dict) -> dict:
    ident = item["id"]
    duplicate = base is not None
    if duplicate:
        assert item["prompt"] in base["prompt"], f"Prompt relationship changed: {ident}"
        base["collections"].append("selected22")
        base["variants"].append({
            "id": ident, "label": "动效片库演示", "file": f"fusion/demos/{ident}.html",
            "payload": f"fusion/pages/{ident}.js", "medium": "web",
        })
        base["briefPrompt"] = item["prompt"]
        base["briefPromptKind"] = item["prompt_kind"]
        base["selectedTitle"] = item["title"]
        base["selectedEffect"] = item["effect"]
        base["selectedSourceUrl"] = item["source"]["url"]
        base["selectedSourceAuthor"] = item["source"]["author"]
        base["sampleInputs"] = (item.get("demo_note") or {}).get("sample_inputs")
        base["demoNote"] = (item.get("demo_note") or {}).get("simplified")
        base["searchExtra"] += " " + " ".join(item.get("techniques", []))
        return base
    intent = INTENT_22[item["category"]]
    note = item.get("demo_note") or {}
    return {
        "id": ident,
        "name": item["title"],
        "english": "",
        "description": item["effect"],
        "interaction": "可暂停、拖动时间线，观察画面如何变化。" if item["type"] == "video" else "点击、滚动演示页面，体验完整交互。",
        "medium": item["type"],
        "intent": intent,
        "style": cues(ident, STYLE_GROUPS),
        "motion": cues(ident, MOTION_GROUPS),
        "originalCategory": item["category"],
        "thumbnail": f"fusion/thumbs/{ident}.jpg",
        "prompt": item["prompt"],
        "promptKind": item["prompt_kind"],
        "promptNote": "动效片库收录的提示词" + ("摘录；请勿当作逐字全文。" if item["prompt_kind"] == "摘录" else "原文。"),
        "promptFile": None,
        "sourceUrl": item["source"]["url"],
        "sourceLabel": item["source"]["author"] + " · " + item["source"]["platform"],
        "collections": ["selected22"],
        "variants": [{
            "id": ident, "label": "动效片库演示", "file": f"fusion/demos/{ident}.html",
            "payload": f"fusion/pages/{ident}.js", "medium": item["type"],
        }],
        "aspect": item["aspect"],
        "duration": note.get("duration"),
        "sampleInputs": note.get("sample_inputs"),
        "demoNote": note.get("simplified"),
        "templateZh": item.get("template_zh"),
        "searchExtra": " ".join(item.get("techniques", []) + item.get("tags", [])) + " " + item.get("use_when", ""),
    }


def main() -> None:
    original = source_100()
    selected = source_22()
    assert len(original) == 100 and len(selected) == 22
    by_id = {item["id"]: make_100(item) for item in original}
    assert len(by_id) == 100
    for item in selected:
        overlap_id = OVERLAP.get(item["id"])
        if overlap_id:
            by_id[overlap_id] = add_22(by_id[overlap_id], item)
        else:
            assert item["id"] not in by_id
            by_id[item["id"]] = add_22(None, item)
    items = list(by_id.values())
    assert len(items) == 118
    assert sum(len(item["variants"]) for item in items) == 122
    assert {item["intent"] for item in items} == set(INTENTS)
    assert sum(item["medium"] == "video" for item in items) == 15
    assert sum(item["medium"] == "web" for item in items) == 103
    (HERE / "catalog.js").write_text("window.OPUS_FUSION_CATALOG = " + compact_json(items) + ";\n")

    pages = HERE / "pages"
    pages.mkdir(exist_ok=True)
    for item in selected:
        ident = item["id"]
        html = (HERE / "demos" / f"{ident}.html").read_text()
        (pages / f"{ident}.js").write_text(
            "window.OPUS_FUSION_PAGES ||= {};window.OPUS_FUSION_PAGES["
            + compact_json(ident) + "]=" + compact_json(html) + ";\n"
        )

    lines = [
        "# Opus 5.5 统一图鉴 · 条目映射",
        "",
        "来源：两个固定版本的 Git 子模块。这个文件由 `scripts/fusion_catalog.py` 生成。",
        "",
        "- 118 个主题；122 个演示版本。15 个视频型效果，103 个网页作品。",
        "- W01/001、W02/008、W03/015、W04/026 共用创意提示词，保留两个不同演示。",
        "- 用途分类是本次编辑判断，来源原分类保留在数据中。风格、动作标签只对明确匹配的条目添加。",
        "",
        "| 条目 | 标题 | 形式 | 用途 | 来源集合 | 演示 | 提示词状态 |",
        "| --- | --- | --- | --- | --- | ---: | --- |",
    ]
    for item in items:
        medium = "视频型效果" if item["medium"] == "video" else "网页作品"
        groups = "、".join("100 HTML" if x == "html100" else "精选 22" for x in item["collections"])
        lines.append(f"| {item['id']} | {item['name']} | {medium} | {item['intent']} | {groups} | {len(item['variants'])} | {item['promptKind']} |")
    (HERE / "条目映射.md").write_text("\n".join(lines) + "\n")
    print("built", len(items), "subjects /", sum(len(x["variants"]) for x in items), "variants")


if __name__ == "__main__":
    main()
