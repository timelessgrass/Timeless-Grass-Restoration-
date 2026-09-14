#!/usr/bin/env node
/**
 * Facebook lead ads kit. Renders the ad and Instant Form copy in src/data/campaigns.ts as
 *   marketing/facebook-lead-ads.md          (always)
 *   a copy-button HTML page                 (with --html <path>)
 * so what gets pasted into Ads Manager always matches the landing and follow-up pages.
 * Usage: node scripts/campaign-kit.mjs [--html out.html]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'campaign-kit-'));
const entry = path.join(dir, 'entry.ts');
fs.writeFileSync(entry, `export * from ${JSON.stringify(path.join(root, 'src/data/campaigns.ts'))};\nexport { brand, SITE_URL, META_PIXEL_ID } from ${JSON.stringify(path.join(root, 'src/data/site.ts'))};\n`);
const bundle = path.join(dir, 'kit.mjs');
execFileSync(path.join(root, 'node_modules/.bin/esbuild'), [entry, '--bundle', '--format=esm', '--platform=node', `--outfile=${bundle}`, '--log-level=error']);
const { ANGLES, REPLY_TIME, brand, SITE_URL, META_PIXEL_ID, followUpUrl, landingUrl } = await import(pathToFileURL(bundle).href);

const today = new Date().toISOString().slice(0, 10);
const plain = (s) => s.replace(/<[^>]+>/g, '');

/* Settings shared by all three Instant Forms and every ad. */
const SETTINGS = [
  ['Form type', 'Higher intent', 'Adds a review screen before submit. Fewer leads, far fewer junk ones.'],
  ['Intro background image', "Use image from ad", ''],
  ['Contact information', 'Full name · Phone number · ZIP code', 'Leave email off: Brian calls or texts.'],
  ['Privacy policy link text', 'Privacy policy', ''],
  ['Privacy policy URL', `${SITE_URL}/privacy/`, ''],
  ['Custom disclaimer title', 'Calls and texts', 'Optional. No consent checkbox.'],
  ['Custom disclaimer text', `By submitting, you agree ${brand.name} may call or text the number you entered about your request. Message and data rates may apply.`, ''],
  ['Completion call to action', 'View website', 'Button text and link are per form, below.'],
];
const PARAMS = [
  ['Campaign source', '{{site_source_name}}', 'Records Facebook vs Instagram'],
  ['Campaign medium', 'paid_social', ''],
  ['Campaign name', '{{campaign.name}}', ''],
  ['Campaign content', '{{ad.name}}', ''],
  ['Add parameter: utm_term', '{{adset.name}}', ''],
];
const PARAM_STRING = 'utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}';
const CHECKLIST = [
  `The site is live at ${SITE_URL} (www redirects there and keeps the tracking parameters). Use these exact links in Ads Manager.`,
  `Calls and texts go to ${brand.phone}, a Colorado number. A local 843 number will convert better on the Grand Strand; changing it later means new Instant Forms.`,
  'A published Instant Form cannot be edited. Proof every field before you publish; a fix means a new form.',
  `The web pages say Brian replies "${REPLY_TIME}" and answer "Is it safe for kids and dogs?" with yes. Brian should confirm both (QUESTIONS-FOR-BRIAN #15 and #17). The Instant Forms avoid both.`,
  `Meta Pixel ${META_PIXEL_ID} is on every page. Website ads: optimize for the Lead event (fires only after a landing-page form submits). Taps on call and text links fire Contact.`,
  `Every lead goes to Make, which emails Brian: the website forms post straight to Make, and Instant Form leads are pulled from the Facebook Page. After publishing each Instant Form, send one test lead with Meta's Lead Ads Testing Tool and check the email (automations/make/README.md).`,
];

/* ---------- Markdown ---------- */
const md = [];
const L = (s = '') => md.push(s);
const cc = (s) => `${s}  \`${plain(s).length} chars\``;
L('# Facebook lead ads: copy for Ads Manager');
L();
L(`Generated ${today} from \`src/data/campaigns.ts\` by \`node scripts/campaign-kit.mjs\`. Don't edit this file by hand: change the data file and run the script, so the forms keep matching the pages.`);
L();
L('## How the campaign fits together');
L();
L('| Angle | Instant Form ad: completion button goes to | Website ad: send traffic to |');
L('|---|---|---|');
for (const a of ANGLES) L(`| ${a.name} | ${followUpUrl(a)} | ${landingUrl(a)} |`);
L();
L('## Before you publish');
L();
for (const c of CHECKLIST) L(`- ${c}`);
L();
L('## Settings for all three Instant Forms');
L();
for (const [k, v, n] of SETTINGS) L(`- **${k}:** ${v}${n ? ` (${n})` : ''}`);
L();
L('## URL parameters for every ad (Tracking → Build a URL parameter)');
L();
for (const [k, v, n] of PARAMS) L(`- **${k}:** \`${v}\`${n ? ` (${n})` : ''}`);
L();
L(`Or paste the whole string: \`${PARAM_STRING}\``);
ANGLES.forEach((a, i) => {
  L();
  L(`## ${i + 1}. ${a.name}`);
  L();
  L('### Ad');
  L();
  a.ad.primary.forEach((p, j) => L(`- **Primary text ${'AB'[j]}:** ${cc(p)}`));
  a.ad.headlines.forEach((h, j) => L(`- **Headline ${'AB'[j]}:** ${cc(h)}`));
  L(`- **Description:** ${cc(a.ad.description)}`);
  L('- **Call to action:** Get quote');
  L();
  L('### Instant Form');
  L();
  L(`- **Form name:** ${a.form.name}`);
  L(`- **Intro headline:** ${cc(a.form.intro.headline)}`);
  L('- **Intro description (List layout):**');
  a.form.intro.bullets.forEach((b) => L(`  - ${cc(b)}`));
  L(`- **Questions description:** ${cc(a.form.questionsIntro)}`);
  a.questions.forEach((q, j) => {
    L(`- **Custom question ${j + 1} (Multiple choice):** ${cc(q.label)}`);
    q.choices.forEach((c) => L(`  - ${c.label}`));
  });
  L('- **Contact information:** Full name, Phone number, ZIP code');
  L(`- **Completion headline:** ${cc(a.form.ending.headline)}`);
  L(`- **Completion description:** ${cc(a.form.ending.description)}`);
  L(`- **Completion button:** View website · text "${a.form.ending.button}" · link ${followUpUrl(a)}`);
  L();
  L('### Website ad');
  L();
  L(`- **Website URL:** ${landingUrl(a)}`);
  L('- **URL parameters:** as above');
  L(`- **Landing page form:** asks the same ${a.questions.length} questions, then name, phone and ZIP, and posts to Make as form \`lp-${a.slug}\`.`);
});
const mdPath = path.join(root, 'marketing/facebook-lead-ads.md');
fs.mkdirSync(path.dirname(mdPath), { recursive: true });
fs.writeFileSync(mdPath, md.join('\n') + '\n');
console.log('wrote', path.relative(root, mdPath));

/* ---------- HTML copy sheet ---------- */
const out = process.argv.indexOf('--html');
if (out > -1) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const row = (k, v, { count = true, copy = true, note = '' } = {}) => `
      <div class="row"><div class="k">${esc(k)}${note ? `<small>${esc(note)}</small>` : ''}</div><div class="v">${esc(v)}</div><div class="side">${count ? `<span class="n" title="characters">${plain(v).length}</span>` : ''}${copy ? `<button class="copy" type="button" data-copy="${esc(v)}">Copy</button>` : ''}</div></div>`;
  const group = (t) => `<div class="group">${esc(t)}</div>`;
  const card = (title, sub, body) => `
    <article class="card"><header><h3>${esc(title)}</h3>${sub ? `<small>${esc(sub)}</small>` : ''}</header>${body}</article>`;
  const angles = ANGLES.map((a, i) => `
  <section class="angle" id="${a.slug}">
    <p class="eyebrow">Angle ${i + 1}</p>
    <h2>${esc(a.name)}</h2>
    <p class="lede">Instant Form completion button → <code>${esc(followUpUrl(a))}</code><br>Website ads → <code>${esc(landingUrl(a))}</code></p>
    ${card('The ad', 'Same copy for the Instant Form ad and the website ad', [
      ...a.ad.primary.map((p, j) => row(`Primary text ${'AB'[j]}`, p)),
      ...a.ad.headlines.map((h, j) => row(`Headline ${'AB'[j]}`, h)),
      row('Description', a.ad.description),
      row('Call to action', 'Get quote', { count: false, copy: false }),
    ].join(''))}
    ${card('Instant Form', 'In the order Ads Manager asks', [
      row('Form name', a.form.name, { count: false }),
      group('Intro'),
      row('Headline', a.form.intro.headline),
      ...a.form.intro.bullets.map((b, j) => row(`List item ${j + 1}`, b, { note: j === 0 ? 'Description → List' : '' })),
      group('Questions'),
      row('Description', a.form.questionsIntro),
      ...a.questions.flatMap((q, j) => [
        row(`Question ${j + 1}`, q.label, { note: 'Multiple choice' }),
        ...q.choices.map((c, n) => row(`  Answer ${n + 1}`, c.label)),
      ]),
      row('Contact information', 'Full name · Phone number · ZIP code', { count: false, copy: false }),
      group('Completion'),
      row('Headline', a.form.ending.headline),
      row('Description', a.form.ending.description),
      row('Call to action', 'View website', { count: false, copy: false }),
      row('Button text', a.form.ending.button),
      row('Website link', followUpUrl(a), { count: false }),
    ].join(''))}
    ${card('Website ad', 'Leads campaign, conversion location: Website', [
      row('Website URL', landingUrl(a), { count: false }),
      row('URL parameters', PARAM_STRING, { count: false, note: 'Or fill the builder: see Setup' }),
      row('Pixel event to optimize', 'Lead', { count: false, copy: false }),
    ].join(''))}
  </section>`).join('');

  const html = `<title>Timeless Lead Ads Kit</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=IBM+Plex+Mono:wght@500&display=swap">
<style>
:root{--bg:#f4f7f0;--surface:#fff;--well:#f4f7f0;--ink:#14200f;--muted:#5b6a55;--line:#dce4d3;--accent:#2e7a0b;--accent-ink:#fff;--soft:#e9f3df;--flag:#fff3dc;--mono:"IBM Plex Mono",ui-monospace,Menlo,monospace}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0c1309;--surface:#131c0f;--well:#0c1309;--ink:#e1eada;--muted:#9aab90;--line:#25331e;--accent:#8ad132;--accent-ink:#0c1309;--soft:#18240f;--flag:#2a2412}}
:root[data-theme="dark"]{--bg:#0c1309;--surface:#131c0f;--well:#0c1309;--ink:#e1eada;--muted:#9aab90;--line:#25331e;--accent:#8ad132;--accent-ink:#0c1309;--soft:#18240f;--flag:#2a2412}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.55 Poppins,system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
.top,main,.tabs>div{width:min(1000px,100% - 36px);margin-inline:auto}
.top{padding:44px 0 26px}
.eyebrow{margin:0;font:500 .72rem/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}
h1{margin:10px 0 0;font-size:clamp(1.9rem,4.4vw,2.8rem);font-weight:800;letter-spacing:-.025em;line-height:1.08;text-wrap:balance}
h2{margin:8px 0 6px;font-size:1.65rem;letter-spacing:-.02em;text-wrap:balance}
h3{margin:0;font-size:1rem}
.lede{margin:0;max-width:68ch;color:var(--muted)}
code{font:500 .84em var(--mono);overflow-wrap:anywhere}
.tabs{position:sticky;top:0;z-index:5;border-bottom:1px solid var(--line);background:color-mix(in srgb,var(--bg) 90%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.tabs>div{display:flex;gap:8px;overflow-x:auto;padding:10px 0;scrollbar-width:none}
.tabs a{flex:none;padding:7px 14px;border:1px solid var(--line);border-radius:999px;background:var(--surface);color:var(--ink);font-size:.86rem;font-weight:600;text-decoration:none}
.tabs a:hover{border-color:var(--accent)}
main{padding:8px 0 90px}
section{margin-top:44px;scroll-margin-top:70px}
.card{margin-top:18px;overflow:hidden;border:1px solid var(--line);border-radius:14px;background:var(--surface)}
.card>header{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:4px 14px;padding:14px 18px}
.card>header small{color:var(--muted);font-size:.8rem}
.row{display:grid;grid-template-columns:190px minmax(0,1fr) auto;gap:14px;align-items:start;padding:10px 18px;border-top:1px solid var(--line)}
.k{padding-top:8px;font-size:.82rem;font-weight:600;color:var(--muted);white-space:pre}
.k small{display:block;font:500 .68rem var(--mono);letter-spacing:.06em;color:var(--accent);white-space:normal}
.v{padding:7px 12px;border-radius:8px;background:var(--well);font-size:.93rem;white-space:pre-wrap;overflow-wrap:anywhere}
.side{display:flex;align-items:center;gap:10px;padding-top:4px}
.n{min-width:3ch;font:500 .72rem var(--mono);font-variant-numeric:tabular-nums;text-align:right;color:var(--muted)}
.copy{padding:6px 13px;border:1px solid var(--line);border-radius:999px;background:var(--surface);color:var(--ink);font:600 .78rem Poppins,system-ui,sans-serif;cursor:pointer;transition:background-color .2s,border-color .2s,color .2s}
.copy:hover{border-color:var(--accent)}
.copy.is-ok{border-color:var(--accent);background:var(--accent);color:var(--accent-ink)}
.group{padding:9px 18px;border-top:1px solid var(--line);background:var(--soft);font:500 .7rem var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}
.flow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:18px}
.flow div{padding:16px 18px;border:1px solid var(--line);border-radius:14px;background:var(--surface)}
.flow b{display:block;margin-bottom:8px}
.flow p{margin:4px 0 0;font-size:.84rem;color:var(--muted)}
.checks{margin:18px 0 0;padding:0;list-style:none;display:grid;gap:10px}
.checks li{padding:12px 16px 12px 44px;border-radius:12px;background:var(--flag);position:relative;max-width:78ch}
.checks li::before{content:"!";position:absolute;left:14px;top:12px;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ink);color:var(--bg);font-size:.72rem;font-weight:800}
a,button{-webkit-tap-highlight-color:transparent}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
@media (max-width:760px){.row{grid-template-columns:minmax(0,1fr) auto;gap:6px 10px}.k{grid-column:1/-1;padding-top:0;white-space:normal}.flow{grid-template-columns:1fr}}
</style>

<header class="top">
  <p class="eyebrow">${esc(brand.name)} · Meta lead ads · ${today}</p>
  <h1>Facebook lead ads kit</h1>
  <p class="lede">Every field for the three Instant Forms and their ads, in the order Ads Manager asks for them. Tap Copy, paste. The landing pages ask the same questions with the same answers, so leads arrive in one shape.</p>
</header>
<nav class="tabs" aria-label="Sections"><div><a href="#setup">Setup</a>${ANGLES.map((a, i) => `<a href="#${a.slug}">${i + 1}. ${esc(a.name)}</a>`).join('')}</div></nav>
<main>
  <section id="setup">
    <p class="eyebrow">Setup</p>
    <h2>How it fits together</h2>
    <div class="flow">${ANGLES.map((a, i) => `<div><b>${i + 1}. ${esc(a.name)}</b><p>Instant Form → <code>/fb/${a.slug}/</code></p><p>Website ad → <code>/lp/${a.slug}/</code></p></div>`).join('')}</div>
    <ul class="checks">${CHECKLIST.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    ${card('All three Instant Forms', 'Same settings on each', SETTINGS.map(([k, v, n]) => row(k, v, { count: false, copy: !/^(Higher intent|Use image|Full name|View website)/.test(v), note: n })).join(''))}
    ${card('URL parameters, every ad', 'Tracking → Build a URL parameter', PARAMS.map(([k, v, n]) => row(k, v, { count: false, note: n })).join('') + row('Or the whole string', PARAM_STRING, { count: false }))}
  </section>
  ${angles}
</main>
<script>
document.addEventListener('click', async (e) => {
  const b = e.target.closest('.copy');
  if (!b) return;
  const text = b.dataset.copy;
  let ok = false;
  try { await navigator.clipboard.writeText(text); ok = true; } catch (err) {
    const t = document.createElement('textarea');
    t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { ok = document.execCommand('copy'); } catch (err2) { ok = false; }
    t.remove();
  }
  if (!ok) { const v = b.closest('.row').querySelector('.v'); const r = document.createRange(); r.selectNodeContents(v); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  b.textContent = ok ? 'Copied' : 'Selected';
  b.classList.add('is-ok');
  clearTimeout(b._t); b._t = setTimeout(() => { b.textContent = 'Copy'; b.classList.remove('is-ok'); }, 1400);
});
</script>
`;
  fs.writeFileSync(process.argv[out + 1], html);
  console.log('wrote', process.argv[out + 1]);
}
