#!/usr/bin/env python3
"""Assemble the gallery locally from this repository and its pinned submodules."""

from __future__ import annotations

import hashlib
import json
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
HTML100 = ROOT / "sources" / "html100"
MOTION22 = ROOT / "sources" / "motion22"
MARKER = "opus-5-5-unified-gallery-build-v1"


def required_sources() -> None:
    for path in (HTML100 / "001-aurora-glass.html", MOTION22 / "index.html"):
        if not path.is_file():
            raise SystemExit(
                f"Missing source: {path.relative_to(ROOT)}. "
                "Run: git submodule update --init --recursive"
            )


def prepare_dist() -> None:
    if DIST.exists():
        marker = DIST / ".opus55-build-marker"
        if not marker.is_file() or marker.read_text(encoding="utf-8") != MARKER:
            raise SystemExit(f"Refusing to replace an unrecognized directory: {DIST}")
        shutil.rmtree(DIST)
    shutil.copytree(ROOT / "src", DIST)
    (DIST / ".opus55-build-marker").write_text(MARKER, encoding="utf-8")


def copy_sources() -> None:
    originals = sorted(HTML100.glob("[0-9][0-9][0-9]-*.html"))
    prompts = sorted(HTML100.glob("[0-9][0-9][0-9]-*.txt"))
    thumbs = sorted((HTML100 / "thumbs").glob("*.jpg"))
    demos = sorted((MOTION22 / "demos").glob("*.html"))
    if [len(originals), len(prompts), len(thumbs), len(demos)] != [100, 100, 100, 22]:
        raise SystemExit("Pinned source file counts changed; review the submodule revisions")
    for path in originals + prompts:
        shutil.copy2(path, DIST / path.name)
    (DIST / "thumbs").mkdir()
    for path in thumbs:
        shutil.copy2(path, DIST / "thumbs" / path.name)
    (DIST / "fusion" / "demos").mkdir()
    for path in demos:
        shutil.copy2(path, DIST / "fusion" / "demos" / path.name)


def build_legacy_page() -> None:
    """Apply this project's small lexicon extension to the pinned 22-case page."""
    source = (MOTION22 / "index.html").read_bytes()
    delta = json.loads((ROOT / "data" / "legacy-delta.json").read_text(encoding="utf-8"))
    if hashlib.sha256(source).hexdigest() != delta["source_sha256"]:
        raise SystemExit("The 22-case page changed; review the legacy extension before building")
    lines = source.decode("utf-8").splitlines(keepends=True)
    for edit in reversed(delta["edits"]):
        start, end = edit["start"], edit["end"]
        if lines[start:end] != edit["old"]:
            raise SystemExit(f"Legacy extension no longer matches source line {start + 1}")
        lines[start:end] = edit["new"]
    target = DIST / "fusion" / "legacy-22" / "index.html"
    target.parent.mkdir(parents=True)
    target.write_text("".join(lines), encoding="utf-8")


def run_generators() -> None:
    for name in ("build_preview.py", "fusion_catalog.py"):
        subprocess.run([sys.executable, str(ROOT / "scripts" / name)], check=True)


def verify() -> None:
    raw = (DIST / "fusion" / "catalog.js").read_text(encoding="utf-8")
    items = json.loads(raw.split("=", 1)[1].strip().rstrip(";"))
    variants = sum(len(item["variants"]) for item in items)
    videos = sum(item["medium"] == "video" for item in items)
    overlaps = sum(len(item["variants"]) == 2 for item in items)
    if (len(items), variants, videos, overlaps) != (118, 122, 15, 4):
        raise SystemExit("Generated gallery counts do not match the reviewed release")
    for item in items:
        for path in [item["thumbnail"], item.get("promptFile")]:
            if path and not (DIST / path).is_file():
                raise SystemExit(f"Missing generated asset: {path}")
        for variant in item["variants"]:
            for key in ("file", "payload"):
                path = variant[key]
                if not (DIST / path).is_file():
                    raise SystemExit(f"Missing generated asset: {path}")
        if item["medium"] == "video":
            path = f"fusion/audio/{item['id']}.js"
            if not (DIST / path).is_file():
                raise SystemExit(f"Missing audio track: {path}")
    print(f"Ready: {len(items)} themes, {variants} demos, {videos} soundtracks, {overlaps} paired themes")


def main() -> None:
    required_sources()
    prepare_dist()
    copy_sources()
    build_legacy_page()
    run_generators()
    verify()


if __name__ == "__main__":
    main()
