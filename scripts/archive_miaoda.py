#!/usr/bin/env python3
"""Deterministic tar.gz used to measure and retain the actual publication artifact."""
import gzip, tarfile, sys
from pathlib import Path
root, output = map(Path, sys.argv[1:])
with output.open('wb') as dst:
    with gzip.GzipFile(fileobj=dst, mode='wb', filename='', mtime=0, compresslevel=9) as gz:
        with tarfile.open(fileobj=gz, mode='w|', format=tarfile.PAX_FORMAT) as tar:
            for p in sorted(root.rglob('*')):
                if not p.is_file(): continue
                info=tar.gettarinfo(str(p),arcname=p.relative_to(root).as_posix())
                info.uid=info.gid=0;info.uname=info.gname='';info.mtime=0
                with p.open('rb') as src:tar.addfile(info,src)
