#!/usr/bin/env python3
"""Reproduce the reviewed public edition without the private local source cache."""
from pathlib import Path
import json
import shutil

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "site"
OUTPUT = ROOT / "dist-public"
MARKER = ".opus55-public-build-marker"
MARKER_VALUE = "opus55-public-snapshot-v1"

def main():
    manifest = json.loads((SOURCE / "deployment-manifest.json").read_text())
    catalog = json.loads((SOURCE / "fusion/catalog.js").read_text().split("=", 1)[1].strip().rstrip(";"))
    new = [item for item in catalog if item["id"].startswith("n")]
    actual = (len(catalog), sum(len(item["variants"]) for item in catalog),
              sum(not item.get("imageOnly", False) for item in new),
              sum(item.get("imageOnly", False) for item in new))
    expected = tuple(manifest[key] for key in ("subjects", "variants", "code", "image"))
    if actual != expected or not (SOURCE / "index.html").is_file():
        raise SystemExit("Public snapshot and manifest disagree")
    if OUTPUT.exists():
        marker = OUTPUT / MARKER
        if not marker.is_file() or marker.read_text() != MARKER_VALUE:
            raise SystemExit(f"Refusing to replace an unrecognized directory: {OUTPUT}")
        shutil.rmtree(OUTPUT)
    shutil.copytree(SOURCE, OUTPUT)
    (OUTPUT / MARKER).write_text(MARKER_VALUE)
    print(f"Ready: {actual[0]} themes / {actual[1]} variants; new originals: {actual[2]} code + {actual[3]} images")
    print(f"Open {OUTPUT / 'index.html'} or serve dist-public/ with an HTTP server.")

if __name__ == "__main__":
    main()
