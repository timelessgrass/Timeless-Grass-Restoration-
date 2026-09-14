#!/usr/bin/env python3
"""Copy brief for the Facebook campaign pages, for handing to another writer or model.
Reads the BUILT pages (dist/lp/*, dist/fb/*) so the "current copy" is exactly what visitors see, plus the
ad and Instant Form copy in marketing/facebook-lead-ads.md. Run after `npm run build`:
    python3 scripts/copy-brief.py      → marketing/landing-page-copy-brief.md
"""
import html, re, os
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://www.timelessturfrestoration.com'
ANGLES = [
    ('clean', 'Turf cleaning quote', 'TTR · Turf cleaning quote'),
    ('membership', 'Turf membership', 'TTR · Turf membership'),
    ('putting-green', 'Putting green restoration', 'TTR · Putting green restoration'),
]

BLOCK = {'h1', 'h2', 'h3', 'p', 'li', 'summary', 'figcaption', 'th', 'td', 'caption'}
SECTION = {'section', 'header', 'footer'}

class Page(HTMLParser):
    """Walks <main> and emits (section_index, kind, text) in document order."""
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_main = False; self.depth_skip = 0; self.sec = 0
        self.stack = []            # open capture: [tag, kind, text]
        self.out = []              # (sec, kind, text)
        self.fieldset = None       # {'legend': str, 'chips': [], 'hints': []}
        self.legend = None; self.chip = None
        self.div_depth = 0; self.mbar_depth = None; self.skip_tag = None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs); cls = a.get('class', '') or ''
        if tag == 'main': self.in_main = True; return
        if not self.in_main: return
        if tag in ('script', 'style', 'svg', 'noscript'): self.depth_skip += 1; return
        if self.depth_skip: return
        if tag in SECTION or (tag == 'div' and 'mbar' in cls.split()):
            self.sec += 1
            name = 'Sticky mobile bar' if tag == 'div' else {'header': 'Top bar', 'footer': 'Footer'}.get(tag, '')
            self.out.append((self.sec, 'SECTION', name))
        if tag == 'fieldset': self.fieldset = {'legend': '', 'chips': [], 'hints': []}; return
        if tag == 'legend': self.legend = ''; return
        if tag == 'label' and 'chip' in cls.split(): self.chip = ''; return
        if tag == 'input' and self.fieldset is not None and a.get('type') == 'radio' and a.get('data-hint'):
            self.fieldset['hints'].append((a.get('value', ''), re.sub('<[^>]+>', '', a['data-hint'])))
        if tag == 'input' and a.get('type') not in ('hidden', 'radio') and a.get('name') not in (None, 'bot_field'):
            self.out.append((self.sec, 'FIELD', f"{a.get('name')}{' (required)' if 'required' in a else ''}"))
        if tag == 'img' and a.get('alt'):
            self.out.append((self.sec, 'IMAGE', f"{a.get('src','')} (alt: {a['alt']})"))
        if tag == 'p' and 'hp' in cls.split(): self.depth_skip += 1; self.skip_tag = 'p'; return
        if self.stack:
            if tag in ('h3', 'p', 'div', 'small', 'br'): self.stack[-1][2] += ' — '
            elif tag in ('span', 'b', 'strong', 'a', 'em'): self.stack[-1][2] += ' '
            return
        if tag in BLOCK:
            kind = 'KICKER' if 'kicker' in cls.split() else tag.upper()
            if 'plan__badge' in cls: kind = 'BADGE'
            self.stack.append([tag, kind, ''])
        elif tag in ('a', 'button') and re.search(r'\b(btn|lf__back|lp-bar__tel)\b', cls):
            self.stack.append([tag, 'BUTTON', ''])
        elif tag == 'span' and ('plan__badge' in cls or 'istep__n' in cls):
            self.stack.append([tag, 'LABEL', ''])
    def handle_endtag(self, tag):
        if not self.in_main: return
        if tag == 'main': self.in_main = False; return
        if tag in ('script', 'style', 'svg', 'noscript') or (tag == 'p' and self.skip_tag == 'p' and self.depth_skip): self.depth_skip = max(0, self.depth_skip - 1); self.skip_tag = None; return
        if self.depth_skip: return
        if tag == 'legend' and self.legend is not None: self.fieldset['legend'] = self.legend.strip(); self.legend = None; return
        if tag == 'label' and self.chip is not None: self.fieldset['chips'].append(self.chip.strip()); self.chip = None; return
        if tag == 'fieldset' and self.fieldset is not None:
            f = self.fieldset; self.fieldset = None
            self.out.append((self.sec, 'QUESTION', f"{f['legend']} — answers: " + ' · '.join(f['chips'])))
            for v, h in f['hints']: self.out.append((self.sec, 'HINT', f'when "{v}" is picked: {h}'))
            return
        if self.stack and self.stack[-1][0] != tag and tag in ('span', 'b', 'strong', 'a', 'em'): self.stack[-1][2] += ' '
        if self.stack and self.stack[-1][0] == tag:
            _, kind, text = self.stack.pop()
            text = re.sub(r'\s+', ' ', text).strip()
            text = re.sub(r'(\s*—\s*)+', ' — ', text).strip(' —')
            text = re.sub(r'\s+([/.,!?])', r'\1', text)
            if kind == 'SUMMARY': text = re.sub(r'^\d+\s*', '', text)
            if text: self.out.append((self.sec, kind, text))
    def handle_data(self, data):
        if not self.in_main or self.depth_skip: return
        if self.legend is not None: self.legend += data; return
        if self.chip is not None: self.chip += data; return
        if self.stack: self.stack[-1][2] += data

def page_copy(path):
    p = Page(); p.feed(open(os.path.join(ROOT, 'dist', path, 'index.html'), encoding='utf-8').read())
    head = open(os.path.join(ROOT, 'dist', path, 'index.html'), encoding='utf-8').read()
    title = html.unescape(re.search(r'<title>(.*?)</title>', head, re.S).group(1))
    desc = html.unescape(re.search(r'<meta name="description" content="(.*?)"', head).group(1))
    lines = [f'- Browser title: {title}', f'- Meta description (link previews): {desc}', '']
    sections = {}
    for sec, kind, text in p.out: sections.setdefault(sec, []).append((kind, text))
    n = 0
    for sec in sorted(sections):
        items = sections[sec]
        name = next((t for k, t in items if k == 'SECTION' and t), '')
        heading = next((t for k, t in items if k in ('H1', 'H2')), '')
        kicker = next((t for k, t in items if k == 'KICKER'), '')
        body = [(k, t) for k, t in items if k != 'SECTION']
        if not body: continue
        n += 1
        label = name or heading or kicker or 'Section'
        lines.append(f'#### {n}. {label}')
        seen = set()
        for k, t in body:
            key = (k, t)
            if key in seen and k not in ('LI', 'TD'): continue
            seen.add(key)
            tag = {'KICKER': 'Eyebrow', 'H1': 'H1', 'H2': 'H2', 'H3': 'H3', 'P': 'Text', 'LI': '•', 'BUTTON': 'Button', 'LABEL': 'Label', 'BADGE': 'Badge',
                   'SUMMARY': 'FAQ question', 'FIGCAPTION': 'Photo caption', 'TH': 'Table head', 'TD': 'Cell', 'CAPTION': 'Table caption',
                   'QUESTION': 'Form question', 'HINT': '   hint', 'FIELD': 'Form field', 'IMAGE': 'Image'}.get(k, k)
            lines.append(f'- **{tag}:** {t}' if tag != '•' else f'  - {t}')
        lines.append('')
    return '\n'.join(lines)

kit = open(os.path.join(ROOT, 'marketing/facebook-lead-ads.md'), encoding='utf-8').read()
def kit_section(i, name):
    m = re.search(rf'## {i}\. {re.escape(name)}\n(.*?)(?=\n## \d\. |\Z)', kit, re.S)
    body = m.group(1).strip() if m else ''
    return re.sub(r'^### ', '#### ', body, flags=re.M)

AUDIENCE = {
    'clean': 'Homeowners on the Grand Strand who already have artificial turf (often dog owners) and are bothered by pet odor, leaves and pollen, matted paths or turf that looks tired. Cold traffic from a Facebook or Instagram feed ad, almost always on a phone.',
    'membership': 'Turf owners who want it kept clean all year without booking each visit, especially people whose dogs use the turf every day. Cold traffic from a feed ad; they are weighing a monthly plan against a one-time clean.',
    'putting-green': 'Owners of an existing synthetic putting green: backyard greens first, plus HOA/community and golf-course or business greens. The green rolls slow or bumpy, is dirty, or has seam/cup/edge issues. This is RESTORATION of a green they already have, never installation of a new one.',
}
OFFER = {
    'clean': 'A price by the square foot before any work starts. Essential Clean from $199 and Premium Restoration from $299 for yards up to 500 sq ft. The page shows a live ballpark as soon as they pick a size.',
    'membership': 'Four visits a year with priority scheduling: Essential Care $89/mo, TIMELESS ELITE $139/mo (a Premium Restoration every quarter), Pet Turf ELITE $169/mo (multi-dog and daily-potty yards; its extra steps are not final, so do not describe them). Honest math already on the page: ELITE ($1,668/yr) costs less than four Premium Restorations only on yards over 1,000 sq ft.',
    'putting-green': 'A restoration quote after a look at the green. Typical backyard green restoration runs $299–$899. HOA, community and golf/business greens start with a site walk. The work: blow and clear, brush, clean cups and fringe, top-dress with fresh green sand, roll, check speed; seams, cups, edges and drainage get checked.',
}

out = [f"""# Landing page copy brief: Facebook lead campaign

For: rewriting the copy on the three campaign landing pages and their Instant Form follow-up pages.
Business: TIMELESS Turf Restoration (Grand Strand, SC/NC). Generated from the built pages; regenerate with `npm run build && python3 scripts/copy-brief.py`.

## What to send back

- Return copy section by section using the same numbered section names below, one angle at a time.
- Keep each field about the same length as today unless you are cutting. Headlines must fit on a phone (H1 two short lines).
- Mark anything you want to ADD as NEW, and anything you'd REMOVE as CUT, with one line on why.
- Do not change the parts listed under "Locked" below; suggest changes to them separately if you think they matter.

## The business (facts you may use)

- Owner-operated by **Brian**, 13 years building and caring for artificial turf and putting greens (his sister company TIMELESS Grass & Greens builds them). This company **cleans, treats and restores existing turf and greens. It does not install.**
- Service area: the Grand Strand, Shallotte NC to Burgess SC, along the coast and inland through Conway, Loris and Longs (Myrtle Beach, North Myrtle Beach, Carolina Forest, Little River…).
- Priced by square footage and condition, never hourly; the price comes before any work starts. Finish standard on every job: "blown clean".
- Phone (calls and texts): 303-349-2368.
- Essential Clean: $199 (up to 500 sq ft), $249 (501–1,000), $299 (1,001–1,500), $349 (1,501–2,000), $449 (2,001–3,000), $599 (3,001–5,000), over 5,000 quoted. Includes debris removal, turf blowing, power brushing, surface rinse, basic spot treatment, final grooming.
- Premium Restoration: $299 / $399 / $499 / $599 / $749 / $899 for the same bands. Adds deep cleaning, pet-odor treatment, antimicrobial treatment, algae/mold treatment, detailed grooming, infill redistribution, minor weed and debris removal, edge and seam inspection, before and after photos. Minimum visit $199.
- Memberships (four visits a year, billed monthly): Essential Care $89/mo (blow-off and grooming, light rinse, basic odor treatment, priority scheduling); TIMELESS ELITE $139/mo (a Premium Restoration every quarter, priority scheduling, 10% off add-ons); Pet Turf ELITE $169/mo.
- Putting green restoration: typical backyard greens $299–$899, quoted after a look.
- Real before/after job photos exist (a dog yard, a side yard mid-clean with a power brush, a front lawn full of leaves). No review, rating or testimonial exists yet.

## Voice

Plain, specific, second person, like a tradesman explaining it at the kitchen table. Short sentences. Lead with the answer. No exclamation marks, no hype adjectives, no rhetorical questions in body copy. Hedge with "usually" or "most" instead of inventing precision. Don't sound defensive (no "we're not a call center", "nothing here is stock").

## Never write

- Invented numbers: statistics, review counts, star ratings, testimonials, customer names, job counts, awards.
- Licensed, insured, bonded, warranty, guarantee, price-match, same-day, 24/7, "#1", "best", "top-rated", "trusted by".
- Anything that implies installing turf or building a putting green.
- Bleach, pressure washing, wire brushes or acid as advice.
- The words elevate, seamless, unlock, delve, robust, leverage, game-changer, look no further.

## Not confirmed by Brian yet (avoid, or flag if you use them)

- Reply time ("within one business day" appears on the pages today).
- "Pet-safe / safe for kids and dogs once dry" (appears in the FAQ today).
- Membership cancellation terms or "no contract"; what the ELITE 10% covers beyond add-ons; what Pet Turf ELITE adds.
- Trip charges, free on-site visits, how fast a visit can be booked.

## Locked (the lead routing depends on these)

- Every form question and answer, word for word. The same wording is used in the Meta Instant Forms and by the Make automation that emails Brian; changing a word breaks the routing and the ballpark in his email.
- Form names (lp-clean, lp-membership, lp-putting-green, fb-clean, fb-membership, fb-putting-green) and the Instant Form names (they must contain "cleaning", "membership" or "putting").
- Prices, plan names and plan contents: they come from the sitewide price data and must match the pricing page.
- A published Instant Form can't be edited, so Instant Form copy changes mean new forms.

## How each route works

| Angle | Website ad → landing page (form on the page) | Instant Form ad → follow-up page after the form |
|---|---|---|
"""]
for slug, name, form in ANGLES:
    out.append(f"| {name} | {SITE}/lp/{slug}/ (form `lp-{slug}`) | Instant Form \"{form}\" → completion button → {SITE}/fb/{slug}/ (optional best-time form `fb-{slug}`) |\n")
out.append("""
- **Landing page** (`/lp/`): for ads whose destination is the website. No site navigation. The form sits in the first screen: step 1 taps the three questions (a hint appears under each answer), step 2 asks name, phone and ZIP. Submitting sends the lead to Make, which emails Brian, and fires the Meta Pixel "Lead" event. The visitor then sees "You're in, <name>!" with Save the number and Text photos buttons.
- **Follow-up page** (`/fb/`): where people land after already submitting the Instant Form on Facebook. The job is to make sure they answer Brian's call (save the number), get photos texted in, set expectations and handle doubts. An optional "When should Brian call?" form sends a lead update to Brian. Call and text taps fire the Pixel "Contact" event.
""")
for i, (slug, name, form) in enumerate(ANGLES, 1):
    out.append(f"\n---\n\n## {i}. {name}\n\n**Who lands here:** {AUDIENCE[slug]}\n\n**Offer and proof:** {OFFER[slug]}\n\n")
    out.append(f"### {i}A. Landing page: {SITE}/lp/{slug}/\n\nCurrent copy, in page order:\n\n{page_copy(f'lp/{slug}')}\n")
    out.append(f"### {i}B. Follow-up page after the Instant Form: {SITE}/fb/{slug}/\n\nCurrent copy, in page order:\n\n{page_copy(f'fb/{slug}')}\n")
    out.append(f"### {i}C. Matching ad and Instant Form copy (message match)\n\n{kit_section(i, name)}\n")

dest = os.path.join(ROOT, 'marketing/landing-page-copy-brief.md')
open(dest, 'w', encoding='utf-8').write(''.join(out))
print('wrote', os.path.relpath(dest, ROOT), sum(1 for _ in open(dest)), 'lines')
