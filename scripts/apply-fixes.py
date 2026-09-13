#!/usr/bin/env python3
"""Apply verified QA fixes deterministically.
Input: a JSON file with a list of findings, each {file, slug, quote, replacement}.
For each: the quote must occur exactly once in the file (else it is skipped and reported);
it is replaced verbatim. After each file is edited, esbuild must still parse it, or the file
is restored and every fix in it is reported as failed.
Usage: python3 scripts/apply-fixes.py fixes.json"""
import json, subprocess, sys, collections
findings = json.load(open(sys.argv[1], encoding='utf-8'))
by_file = collections.OrderedDict()
for f in findings: by_file.setdefault(f['file'], []).append(f)
applied, skipped, failed = [], [], []
for path, items in by_file.items():
    original = open(path, encoding='utf-8').read()
    text = original; done = []
    for f in items:
        n = text.count(f['quote'])
        if n != 1:
            skipped.append((path, f['slug'], f'quote found {n}x', f['quote'][:90])); continue
        text = text.replace(f['quote'], f['replacement'], 1); done.append(f)
    if text == original: continue
    open(path, 'w', encoding='utf-8').write(text)
    ok = subprocess.run(['node_modules/.bin/esbuild', path, '--format=esm', '--log-level=error'], capture_output=True, text=True)
    if ok.returncode != 0:
        open(path, 'w', encoding='utf-8').write(original)
        failed.extend((path, f['slug'], 'parse error after edit; file restored') for f in done)
        print(ok.stderr[:600])
    else:
        applied.extend((path, f['slug'], f['category'] if 'category' in f else '') for f in done)
print(f'applied {len(applied)}  skipped {len(skipped)}  failed {len(failed)}')
for s in skipped: print('  SKIP', s)
for s in failed: print('  FAIL', s)
sys.exit(1 if failed else 0)
