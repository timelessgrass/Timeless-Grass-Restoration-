#!/usr/bin/env python3
"""Post-build audit. Run: npm run build && python3 scripts/audit.py
Checks every page in dist/: internal links resolve, no orphans, title ≤60, description ≤160,
one H1, one LocalBusiness node, valid JSON-LD, no rating markup, tel link present, main content
≥ MIN_WORDS, no forbidden claims, sibling similarity per tier below the doorway threshold."""
import re, os, json, glob, sys, difflib, html
MIN_WORDS = 450
FORBIDDEN = [r'(?<!are you )(?<!Are you )\blicensed\b(?! and insured\?)(?! and insured for)', r'(?<!licensed and )\binsured\b', r'\b(licensed and |fully )bonded\b', r'(?<!rather than a )(?<!not a )\bguarantee', r'(\bour\b(?!\s+warranty guide)[^.]{0,30}\bwarrant|\bwe\b[^.]{0,20}\bwarrant|\d+[- ](day|month|year) warrant|warranty on our)', r'price[- ]match', r'same[- ]day (service|clean|cleaning|appointment|booking|response)', r'\b24/7 (service|support|availability|emergency)', r'#1\b', r'\btop[- ]rated\b', r'\btrusted by\b', r'★', r'\b\d+\+? (five|5)[- ]star\b', r'\breviews?\b.{0,20}\b\d{2,}\b', r'\bwe install\b', r'\belevate\b', r'\bseamless(ly)?\b', r'\bunlock\b', r'\bdelve\b', r'\brobust\b', r'\bleverage\b', r'game[- ]changer', r'look no further']
SKIP_WORDS = {'/quote/', '/privacy/', '/fb/', '/404/'}
pages = sorted(glob.glob('dist/**/index.html', recursive=True))
def route(p):
    r = '/' + os.path.relpath(os.path.dirname(p), 'dist').replace('.', '')
    return (r + '/').replace('//', '/')
routes = {route(p) for p in pages}
inbound = {r: 0 for r in routes}
issues, words, tiers = [], {}, {}
def prose_lines(h):
    m = re.search(r'<article class="prose"[^>]*>(.*?)</article>', h, re.S)
    t = re.sub(r'<[^>]+>', '\n', m.group(1) if m else '')
    return [l.strip() for l in t.split('\n') if len(l.strip()) > 40]
tier_lines = {}
for p in pages:
    h = open(p, encoding='utf-8').read(); r = route(p)
    for href in set(re.findall(r'href="(/[^"#?]*)', h)):
        if href.startswith('/assets/') or href.endswith(('.ico', '.png', '.jpg', '.webp', '.svg')):
            if not os.path.exists('public' + href): issues.append((r, 'missing asset', href))
        elif href.endswith(('.css', '.js', '.xml', '.txt', '.json')): continue
        elif href not in routes: issues.append((r, 'broken link', href))
        elif href != r: inbound[href] += 1
    t = html.unescape(re.search(r'<title>(.*?)</title>', h).group(1))
    d = re.search(r'name="description" content="([^"]*)"', h).group(1).replace('&amp;', '&').replace('&#39;', "'")
    if len(t) > 60 and r not in SKIP_WORDS: issues.append((r, 'title>60', len(t)))
    if len(d) > 160 and r not in SKIP_WORDS: issues.append((r, 'desc>160', len(d)))
    if h.count('<h1') != 1: issues.append((r, 'h1 count', h.count('<h1')))
    if 'tel:+' not in h: issues.append((r, 'no tel link', ''))
    if re.search(r'aggregateRating|ratingValue|reviewCount', h): issues.append((r, 'rating markup', ''))
    try:
        g = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', h, re.S).group(1))['@graph']
        if sum(1 for n in g if n.get('@type') == 'LocalBusiness') != 1: issues.append((r, 'business node count', ''))
    except Exception as e: issues.append((r, 'json-ld', str(e)[:60]))
    main = re.search(r'<main id="main">(.*)</main>', h, re.S).group(1)
    txt = re.sub(r'<script.*?</script>', '', main, flags=re.S); txt = re.sub(r'<[^>]+>', ' ', txt)
    words[r] = len(txt.split())
    if words[r] < MIN_WORDS and r not in SKIP_WORDS and not r.endswith(('/how-to/', '/guides/', '/cost/', '/turf-care/', '/turf-101/', '/commercial/', '/turf-problems/', '/service-areas/', '/services/')):
        issues.append((r, f'thin (<{MIN_WORDS} words)', words[r]))
    body = re.sub(r'<footer.*', '', txt, flags=re.S)
    for pat in FORBIDDEN:
        m = re.search(pat, body, re.I)
        if m: issues.append((r, 'forbidden phrase', m.group(0)))
    tier = '/'.join(r.split('/')[:2]) + '/'
    if r.count('/') >= 3 and r != tier: tier_lines.setdefault(tier, []).append((r, prose_lines(h)))
orphans = [r for r, n in inbound.items() if n == 0 and r not in ('/', '/404/', '/fb/')]
print(f'pages: {len(pages)}   min words: {min(words.values())}   median: {sorted(words.values())[len(words)//2]}')
print(f'issues: {len(issues)}'); [print('  ', i) for i in issues[:80]]
print('orphans:', orphans or 'none')
for tier, items in sorted(tier_lines.items()):
    worst = (0.0, '')
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            a, b = items[i][1], items[j][1]
            if not a or not b: continue
            s = difflib.SequenceMatcher(None, a, b).ratio()
            if s > worst[0]: worst = (s, f'{items[i][0]} vs {items[j][0]}')
    flag = '  <-- DOORWAY RISK' if worst[0] >= 0.6 else ''
    print(f'{tier:<18} {len(items):>3} pages  max sibling similarity {worst[0]:.2f}  {worst[1]}{flag}')
sys.exit(1 if issues or orphans else 0)
