#!/usr/bin/env python3
"""Repair writer files where a single-quoted string contains an apostrophe: converts the
offending string to a backtick template literal, guided by esbuild's error location, until
the file parses. Usage: python3 scripts/fix-quotes.py src/data/file.ts"""
import re, subprocess, sys
f = sys.argv[1]
for _ in range(60):
    r = subprocess.run(['node_modules/.bin/esbuild', f, '--format=esm', '--log-level=error'], capture_output=True, text=True)
    if r.returncode == 0: print(f, 'OK'); sys.exit(0)
    m = re.search(re.escape(f) + r':(\d+):(\d+):', r.stderr)
    if not m: print(r.stderr[:400]); sys.exit(1)
    ln, col = int(m.group(1)) - 1, int(m.group(2))
    lines = open(f, encoding='utf-8').read().split('\n'); line = lines[ln]
    # the string that opened before `col`: find the last  ": '"  or "[ '" / ", '" opener before col
    opens = [mm.end() - 1 for mm in re.finditer(r"(?::|\[|,)\s*'", line[:col])]
    if not opens: print('no opener on line', ln + 1, line[:120]); sys.exit(1)
    o = opens[-1]
    # closing quote: the first "'" after col that is followed by , or ] or ) or } or end
    mclose = re.search(r"'(?=\s*[,\]\)\}]|\s*$)", line[col:])
    if not mclose: print('no closer on line', ln + 1); sys.exit(1)
    c = col + mclose.start()
    inner = line[o + 1:c].replace('`', "'")
    lines[ln] = line[:o] + '`' + inner + '`' + line[c + 1:]
    open(f, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f'fixed line {ln + 1}')
print('gave up'); sys.exit(1)
