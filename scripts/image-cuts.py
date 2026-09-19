#!/usr/bin/env python3
"""Make responsive WebP cuts of every photo in public/assets/img (and the job before/afters).

Writes <name>-<width>.webp next to each source for the widths below that are smaller than the source,
plus src/data/image-cuts.json, the manifest src/lib/img.ts builds srcset from. Idempotent: a cut that
already exists and is newer than its source is left alone. Needs cwebp (brew install webp).

    python3 scripts/image-cuts.py
"""
import json, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, 'public/assets/img')
WIDTHS = [240, 480, 720, 960, 1400]
QUALITY = '78'

def size(path):
    out = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', path], capture_output=True, text=True).stdout
    w = h = 0
    for line in out.splitlines():
        if 'pixelWidth:' in line: w = int(line.split(':')[1])
        if 'pixelHeight:' in line: h = int(line.split(':')[1])
    return w, h

manifest, made = {}, 0
for dirpath, _, files in os.walk(IMG):
    for f in sorted(files):
        stem, ext = os.path.splitext(f)
        if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp'): continue
        if any(stem.endswith(f'-{w}') for w in WIDTHS) or stem.endswith('-640'): continue
        src = os.path.join(dirpath, f)
        sw, sh = size(src)
        if not sw: continue
        rel = '/' + os.path.relpath(src, os.path.join(ROOT, 'public')).replace(os.sep, '/')
        cuts = []
        for w in WIDTHS:
            if w > sw: continue
            out = os.path.join(dirpath, f'{stem}-{w}.webp')
            if not os.path.exists(out) or os.path.getmtime(out) < os.path.getmtime(src):
                subprocess.run(['cwebp', '-quiet', '-q', QUALITY, '-resize', str(w), '0', src, '-o', out], check=True)
                made += 1
            cuts.append(w)
        if cuts: manifest[rel] = {'widths': sorted(cuts), 'width': sw, 'height': sh}
out_path = os.path.join(ROOT, 'src/data/image-cuts.json')
json.dump(manifest, open(out_path, 'w'), indent=2, sort_keys=True)
print(f'{made} cut(s) written · {len(manifest)} photos in src/data/image-cuts.json')
