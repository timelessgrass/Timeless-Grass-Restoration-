#!/usr/bin/env node
/**
 * Make.com lead alerts for TIMELESS Turf Restoration. Builds the HTML email Brian gets and the blueprints of
 * the three scenarios that send it. Prices, plan names, questions and Brian's address come from src/data, so
 * a price change is a rebuild plus a blueprint update in Make.
 *
 *   organic-lead          "quote" form on the main site (posts straight to Make) → one email
 *   facebook-leads        /lp/ and /fb/ forms, plus Instant Form leads        → routed by medium, then service
 *   instant-form-feeder   Facebook Lead Ads (page "Timeless Restoration")     → facebook-leads webhook, in the website forms' shape
 *
 * The website forms post { form_name, created_at, site_url, data: { ...fields, bot_field, elapsed_ms } } (public/main.js).
 *
 * Usage: node scripts/make-lead-alerts.mjs --organic-hook <id> --facebook-hook <id> --facebook-url <url> --lead-hook <id> [--preview <dir>]
 * Writes automations/make/*.blueprint.json; --preview also writes sample emails with made-up data.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name) => { const i = process.argv.indexOf(`--${name}`); return i > -1 ? process.argv[i + 1] : undefined; };
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'make-alerts-'));
const entry = path.join(tmp, 'entry.ts');
fs.writeFileSync(entry, `export { ANGLES, GREEN_RANGE } from ${JSON.stringify(path.join(root, 'src/data/campaigns.ts'))};\nexport { brand, pricing, money } from ${JSON.stringify(path.join(root, 'src/data/site.ts'))};\n`);
execFileSync(path.join(root, 'node_modules/.bin/esbuild'), [entry, '--bundle', '--format=esm', '--platform=node', `--outfile=${path.join(tmp, 'b.mjs')}`, '--log-level=error']);
const { ANGLES, GREEN_RANGE, brand, pricing: P, money } = await import(pathToFileURL(path.join(tmp, 'b.mjs')).href);

/* Make account: To The Max Media, zone us2 */
const GMAIL = 7749147; //  "My Gmail connection" (info@tothemaxmedia.com)
const FACEBOOK = 5649539; // "My Facebook connection" (Ty Stevens), which manages the page below
const PAGE_ID = '1360007903856817'; // Facebook Page "Timeless Restoration"
const TO = [brand.email];
const TZ = 'America/New_York';

const R = P.rows, M = P.memberships;
const angle = (slug) => ANGLES.find((a) => a.slug === slug);
const choices = (slug, name) => angle(slug).questions.find((q) => q.name === name).choices.map((c) => c.label);
const q = (s) => { if (s.includes('"')) throw new Error(`quote in IML string: ${s}`); return `"${s}"`; };
const iml = (s) => `{{${s}}}`;
/* Phone number for tel:/sms: links. Plain nested replace(): Make rejects a regex literal in a blueprint. */
const digitsOf = (x) => ['" "', '"-"', '"("', '")"', '"."'].reduce((acc, ch) => `replace(${acc}; ${ch}; emptystring)`, `ifempty(${x}; "")`);

/* ---------- values Brian sees, computed from the site data ---------- */
const band = (a, b = a) => {
  const r = (k) => (a === b ? money(R[a][k]) : `${money(R[a][k])}–${money(R[b][k])}`);
  return `${P.essential.name} ${r('essential')} · ${P.premium.name} ${r('premium')}`;
};
const sizes = choices('clean', 'size');
const BALLPARK = [[sizes[0], band(0)], [sizes[1], band(1)], [sizes[2], band(2, 3)], [sizes[3], band(4, 5)], [sizes[4], 'Custom quote after a look']];
const ballparkIml = `switch(1.data.size; ${BALLPARK.map(([k, v]) => `${q(k)}; ${q(v)}`).join('; ')}; ${q('Help them measure: 20 × 25 ft is 500 sq ft')})`;
const dogs = choices('membership', 'dogs');
const PLAN_BY_DOGS = dogs.map((d, i) => [d, `${M[i].name} · ${money(M[i].monthly)}/mo`]);
const planIml = `switch(1.data.dogs; ${PLAN_BY_DOGS.map(([k, v]) => `${q(k)}; ${q(v)}`).join('; ')}; ${q('Ask about dogs and how the yard is used')})`;
const greenIml = `if(contains(ifempty(1.data.green_where; ""); "HOA"); "Community green, so the quote starts with a site walk"; if(contains(ifempty(1.data.green_where; ""); "Golf"); "Business green, so the quote starts with a site walk"; ${q(`Typical backyard green restoration ${GREEN_RANGE}, quoted after a look`)}))`;
const smsText = (firstNameIml) => `Hi%20${firstNameIml}%2C%20${encodeURIComponent(`it's ${brand.owner} with ${brand.name}. I got your request. When is a good time to talk?`)}`;

/* ---------- the email ---------- */
const F = 'font-family:Arial,Helvetica,sans-serif;';
const row = ({ label, value, style = '', last = false }) => `
<tr style="${style}"><td class="lbl" style="${F}width:38%;padding:12px 18px;${last ? 'border-bottom:0;' : 'border-bottom:1px solid #e2e8d9;'}font-size:12px;font-weight:700;letter-spacing:.4px;color:#5d6c57;vertical-align:top;">${label}</td><td class="val" style="${F}padding:12px 18px;${last ? 'border-bottom:0;' : 'border-bottom:1px solid #e2e8d9;'}font-size:15px;line-height:1.45;font-weight:700;color:#0c1809;vertical-align:top;word-break:break-word;overflow-wrap:anywhere;">${value}</td></tr>`;
const srcRow = ([label, value]) => `
<tr><td style="${F}width:38%;padding:5px 10px 5px 0;font-size:12px;color:#7a8874;vertical-align:top;">${label}</td><td style="${F}padding:5px 0;font-size:13px;color:#2b3a26;vertical-align:top;">${value}</td></tr>`;
const email = (t) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><title>${t.title}</title>
<style>@media only screen and (max-width:480px){.px{padding-left:18px!important;padding-right:18px!important}.h1{font-size:25px!important}.lbl{width:36%!important;padding-left:14px!important;padding-right:8px!important}.val{padding-left:8px!important;padding-right:14px!important}.bsub{display:none!important} }</style></head>
<body style="margin:0;padding:0;background:#eef2ea;-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;">${t.preheader}${'&#847;&zwnj;&nbsp;'.repeat(40)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2ea;"><tr><td align="center" style="padding:28px 12px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
<tr><td style="padding:0 6px 14px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td style="${F}font-size:15px;font-weight:800;letter-spacing:3px;color:#0c1809;">TIMELESS<span class="bsub" style="font-size:10px;font-weight:700;letter-spacing:2px;color:#2e7a0b;">&nbsp;&nbsp;TURF RESTORATION</span></td>
<td align="right"><span style="${F}display:inline-block;padding:5px 11px;border-radius:999px;background:${t.accent};color:${t.accentInk};font-size:11px;font-weight:700;letter-spacing:1.2px;white-space:nowrap;">${t.badge}</span></td>
</tr></table></td></tr>
<tr><td style="background:#ffffff;border:1px solid #dde3d5;border-radius:18px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td class="px" style="background:#0c1809;border-radius:17px 17px 0 0;padding:30px 34px 28px;">
<div style="${F}font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8ad132;">${t.kicker}</div>
<div class="h1" style="${F}padding-top:8px;font-size:30px;line-height:1.15;font-weight:800;color:#ffffff;">${t.name}</div>
<div style="${F}padding-top:8px;font-size:14px;color:#b7c7af;">${t.sub}</div>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:16px;"><tr><td style="${F}padding:7px 14px;border:1px solid #33492a;border-radius:999px;background:#1b2b14;font-size:13px;font-weight:700;color:#dfe9d8;">${t.chip}</td></tr></table>
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td class="px" style="padding:24px 34px 4px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td width="50%" style="padding-right:6px;"><a href="tel:${t.digits}" style="${F}display:block;padding:15px 8px;border-radius:999px;background:#2e7a0b;font-size:15px;font-weight:800;color:#ffffff;text-align:center;text-decoration:none;">Call ${t.first}</a></td>
<td width="50%" style="padding-left:6px;"><a href="sms:${t.digits}?&amp;body=${t.sms}" style="${F}display:block;padding:13px 8px;border:2px solid #0c1809;border-radius:999px;background:#ffffff;font-size:15px;font-weight:800;color:#0c1809;text-align:center;text-decoration:none;">Text ${t.first}</a></td>
</tr></table>
<div style="${F}padding-top:12px;font-size:12px;color:#6b7a65;text-align:center;">Call first. No answer? The Text button opens a message ready to send.</div>
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td class="px" style="padding:22px 34px ${t.source ? '8px' : '32px'};">
<div style="${F}padding-bottom:8px;font-size:11px;font-weight:700;letter-spacing:2px;color:#2e7a0b;">${t.rowsTitle}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6ef;border-radius:14px;">${t.rows.map(row).join('')}
</table>
${t.hint ? `<div style="${F}margin-top:12px;padding:13px 16px;border-radius:12px;background:#e6f3d9;font-size:14px;line-height:1.45;color:#1d3313;">${t.hint}</div>` : ''}
</td></tr></table>
${t.source ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td class="px" style="padding:14px 34px 30px;">
<div style="${F}padding-bottom:6px;font-size:11px;font-weight:700;letter-spacing:2px;color:#2e7a0b;">WHERE THIS LEAD CAME FROM</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${t.source.map(srcRow).join('')}
</table>
</td></tr></table>` : ''}
</td></tr>
<tr><td style="${F}padding:16px 10px 0;font-size:12px;line-height:1.6;color:#6b7a65;text-align:center;">${t.footer}</td></tr>
</table>
</td></tr></table>
</body></html>`;
const link = (href, text) => `<a href="${href}" style="color:#0c1809;text-decoration:none;">${text}</a>`;

/* Organic: tokens map straight onto the Netlify payload (module 1) */
const organic = (v) => email({
  title: 'New quote request',
  preheader: `${v.name} wants a turf quote · ZIP ${v.zip} · ${v.plan}`,
  badge: 'WEBSITE LEAD', accent: '#2e7a0b', accentInk: '#ffffff',
  kicker: 'New quote request',
  name: v.name,
  sub: `ZIP ${v.zip} &nbsp;·&nbsp; ${v.when}`,
  chip: `Wants: <span style="color:#8ad132;">${v.plan}</span>`,
  digits: v.digits, phone: v.phone, first: v.first, sms: v.sms,
  rowsTitle: 'THEIR REQUEST',
  rows: [
    { label: 'Phone', value: link(`tel:${v.digits}`, v.phone) },
    { label: 'Email', value: link(`mailto:${v.emailRaw}`, v.email) },
    { label: 'ZIP code', value: v.zip },
    { label: 'Wants', value: v.plan },
    { label: 'Their note', value: `<span style="font-weight:400;white-space:pre-line;">${v.message}</span>`, last: true },
  ],
  footer: `Quote form on ${v.page}<br>Sent automatically by Make for ${brand.name}`,
});
const organicMake = organic({
  name: iml('1.data.name'), zip: iml('ifempty(1.data.zip; "not given")'), plan: iml('ifempty(1.data.plan; "Not sure, recommend one")'),
  when: iml(`formatDate(1.created_at; "ddd, MMM D · h:mm A"; "${TZ}")`),
  digits: iml(digitsOf('1.data.phone')), phone: iml('1.data.phone'),
  first: iml('first(split(trim(1.data.name); " "))'), sms: smsText(iml('encodeURL(first(split(trim(1.data.name); " ")))')),
  emailRaw: iml('1.data.email'), email: iml('ifempty(1.data.email; "Not given")'),
  message: iml('ifempty(1.data.message; "No note left")'), page: `${iml('1.site_url')}${iml('1.data.page')}`,
});

/* Facebook: module 2 sets the base variables, module 3 the service-specific ones, module 4 composes this */
const facebook = (v) => email({
  title: v.kicker,
  preheader: `${v.kicker}: ${v.name} · ${v.medium} · ${v.q1}`,
  badge: v.badge, accent: v.accent, accentInk: v.accentInk,
  kicker: v.kicker,
  name: v.name,
  sub: `ZIP ${v.zip} &nbsp;·&nbsp; ${v.when}`,
  chip: `${v.medium} &nbsp;·&nbsp; <span style="color:#8ad132;">${v.platform}</span>`,
  digits: v.digits, phone: v.phone, first: v.first, sms: v.sms,
  rowsTitle: v.rowsTitle,
  rows: [
    { label: v.q1Label, value: v.q1 },
    { label: v.q2Label, value: v.q2, style: v.hide },
    { label: v.q3Label, value: v.q3, style: v.hide },
    { label: 'Phone', value: link(`tel:${v.digits}`, v.phone) },
    { label: 'ZIP code', value: v.zip, last: true },
  ],
  hint: `${v.hintLabel}: <b>${v.hint}</b>`,
  source: [['How they came in', v.medium], ['Platform', v.platform], ['Campaign', v.campaign], ['Ad set', v.adset], ['Ad', v.ad], ['Page or form', v.page]],
  footer: `Campaign lead · form ${v.formName}<br>Sent automatically by Make for ${brand.name}`,
});
const facebookMake = facebook({
  kicker: iml('3.kicker'), badge: iml('upper(3.label)'), accent: iml('3.accent'), accentInk: iml('3.accent_ink'),
  name: iml('1.data.name'), zip: iml('ifempty(1.data.zip; "not given")'), when: iml('2.when'), medium: iml('2.medium'), platform: iml('2.platform'),
  digits: iml('2.digits'), phone: iml('1.data.phone'), first: iml('2.first'), sms: smsText(iml('encodeURL(2.first)')),
  rowsTitle: iml('3.rows_title'), q1Label: iml('3.q1_label'), q1: iml('3.q1'), q2Label: iml('3.q2_label'), q2: iml('3.q2'), q3Label: iml('3.q3_label'), q3: iml('3.q3'), hide: iml('3.hide'),
  hintLabel: iml('3.hint_label'), hint: iml('3.hint'),
  campaign: iml('2.campaign'), adset: iml('2.adset'), ad: iml('2.ad'), page: iml('2.page'), formName: iml('1.form_name'),
});

const UPDATE = '2.medium = "Follow-up page"';
const BASE_VARS = [
  ['service', 'if(contains(1.form_name; "membership"); "membership"; if(contains(1.form_name; "putting"); "putting-green"; if(contains(1.form_name; "clean"); "clean"; "other")))'],
  ['medium', 'if(contains(1.form_name; "instant-"); "Facebook Instant Form"; if(contains(1.form_name; "lp-"); "Website landing page"; if(contains(1.form_name; "fb-"); "Follow-up page"; "Website form")))'],
  ['platform', 'switch(lower(ifempty(1.data.utm_source; "none")); "fb"; "Facebook"; "facebook"; "Facebook"; "ig"; "Instagram"; "instagram"; "Instagram"; "an"; "Audience Network"; "msg"; "Messenger"; "none"; "Not tagged"; 1.data.utm_source)'],
  ['first', 'first(split(trim(ifempty(1.data.name; "there")); " "))'],
  ['digits', digitsOf('1.data.phone')],
  ['when', `formatDate(ifempty(1.created_at; now); "ddd, MMM D · h:mm A"; "${TZ}")`],
  ['campaign', 'ifempty(1.data.utm_campaign; "Not tagged")'],
  ['adset', 'ifempty(1.data.utm_term; "Not tagged")'],
  ['ad', 'ifempty(1.data.utm_content; "Not tagged")'],
  ['page', 'ifempty(1.data.page; 1.site_url)'],
];
const SERVICE_VARS = [
  ['label', `if(${UPDATE}; "Lead update"; switch(2.service; "clean"; "Turf cleaning"; "membership"; "Membership"; "putting-green"; "Green restoration"; "Facebook lead"))`],
  ['kicker', `if(${UPDATE}; "Picked a time to talk"; switch(2.service; "clean"; "New turf cleaning lead"; "membership"; "New membership lead"; "putting-green"; "New putting green restoration lead"; "New Facebook lead"))`],
  ['accent', `if(${UPDATE}; "#4a5a45"; switch(2.service; "membership"; "#d6a816"; "putting-green"; "#8ad132"; "#2e7a0b"))`],
  ['accent_ink', `if(${UPDATE}; "#ffffff"; switch(2.service; "membership"; "#0c1809"; "putting-green"; "#0c1809"; "#ffffff"))`],
  ['rows_title', `if(${UPDATE}; "THEIR UPDATE"; "THEIR ANSWERS")`],
  ['q1_label', `if(${UPDATE}; "Best time"; switch(2.service; "putting-green"; "Green size"; "other"; "Form"; "Turf size"))`],
  ['q1', `if(${UPDATE}; ifempty(1.data.best_time; "No preference"); switch(2.service; "putting-green"; ifempty(1.data.green_size; "Not answered"); "other"; 1.form_name; ifempty(1.data.size; "Not answered")))`],
  ['q2_label', 'switch(2.service; "putting-green"; "What the green is doing"; "Dogs")'],
  ['q2', 'switch(2.service; "putting-green"; ifempty(1.data.green_issue; "Not answered"); ifempty(1.data.dogs; "Not answered"))'],
  ['q3_label', 'switch(2.service; "clean"; "Bothers them most"; "membership"; "Plan they picked"; "putting-green"; "Where the green is"; "Details")'],
  ['q3', 'switch(2.service; "clean"; ifempty(1.data.issue; "Not answered"); "membership"; ifempty(1.data.plan_pick; "Not answered"); "putting-green"; ifempty(1.data.green_where; "Not answered"); "See the form")'],
  ['hide', `if(${UPDATE}; "display:none;"; if(2.service = "other"; "display:none;"; ""))`],
  ['hint_label', `if(${UPDATE}; "Next"; switch(2.service; "clean"; "Ballpark"; "membership"; "Suggested plan"; "putting-green"; "Restoration pricing"; "Next"))`],
  ['hint', `if(${UPDATE}; "Their answers came in with the first request. Match this to it by phone."; switch(2.service; "clean"; ${ballparkIml}; "membership"; ${planIml}; "putting-green"; ${greenIml}; "Call and ask what they need."))`],
];

/* ---------- blueprints ---------- */
const SCENARIO_META = { instant: true, version: 1, designer: { orphans: [] }, scenario: { dlq: false, dataloss: false, maxErrors: 3, autoCommit: true, roundtrips: 1, sequential: false, confidential: false, freshVariables: false, autoCommitTriggerLast: true } };
const at = (x, y = 0) => ({ designer: { x, y } });
const gmail = (id, subject, content, filter, x, y) => ({
  id, module: 'google-email:sendAnEmail', version: 4, parameters: { __IMTCONN__: GMAIL },
  ...(filter ? { filter } : {}),
  mapper: { to: TO, subject, bodyType: 'rawHtml', content }, metadata: at(x, y),
});
const cond = (a, o, b) => ({ a, o, ...(b !== undefined ? { b } : {}) });
/* Website forms are spam-checked here as well as in the browser: the honeypot must be empty and the form open over 2 s. */
const HUMAN = [cond('{{1.data.bot_field}}', 'text:equal', ''), cond('{{1.data.elapsed_ms}}', 'number:greater', '2000')];

const organicBlueprint = (hook) => ({
  name: 'Timeless Turf — Organic website lead → Brian (HTML email)',
  flow: [
    { id: 1, module: 'gateway:CustomWebHook', version: 1, parameters: { hook, maxResults: 1 }, mapper: {}, metadata: at(0) },
    gmail(2, `New turf quote request: {{1.data.name}} · {{ifempty(1.data.zip; "no ZIP")}}`, organicMake,
      { name: 'Main site quote form, not spam', conditions: [[cond('{{1.form_name}}', 'text:equal', 'quote'), ...HUMAN]] }, 300),
  ],
  metadata: SCENARIO_META,
});

const facebookBlueprint = (hook) => {
  const notUpdate = cond('{{2.medium}}', 'text:notequal', 'Follow-up page');
  const route = (id, filterName, conditions, subject, y) => ({ flow: [gmail(id, subject, '{{4.value}}', { name: filterName, conditions }, 1200, y)] });
  return {
    name: 'Timeless Turf — Facebook leads → route by medium & service → Brian',
    flow: [
      { id: 1, module: 'gateway:CustomWebHook', version: 1, parameters: { hook, maxResults: 1 }, mapper: {}, metadata: at(0) },
      { id: 2, module: 'util:SetVariables', version: 1, parameters: {},
        filter: { name: 'Campaign forms, not spam (Instant Form leads always pass)', conditions: [[cond('{{1.form_name}}', 'text:notequal', 'quote'), ...HUMAN], [cond('{{1.form_name}}', 'text:contain', 'instant-')]] },
        mapper: { variables: BASE_VARS.map(([name, value]) => ({ name, value: iml(value) })), scope: 'roundtrip' }, metadata: at(300) },
      { id: 3, module: 'util:SetVariables', version: 1, parameters: {},
        mapper: { variables: SERVICE_VARS.map(([name, value]) => ({ name, value: iml(value) })), scope: 'roundtrip' }, metadata: at(600) },
      { id: 4, module: 'util:ComposeTransformer', version: 1, parameters: {}, mapper: { value: facebookMake }, metadata: at(900) },
      { id: 5, module: 'builtin:BasicRouter', version: 1, mapper: null, metadata: at(1050), routes: [
        route(6, 'Follow-up page: best time to call', [[cond('{{2.medium}}', 'text:equal', 'Follow-up page')]],
          '⏰ {{1.data.name}} picked a time: {{ifempty(1.data.best_time; "any time")}}', -600),
        route(7, 'Turf cleaning lead', [[cond('{{2.service}}', 'text:equal', 'clean'), notUpdate]],
          '🧽 New turf cleaning lead: {{1.data.name}} · {{ifempty(1.data.size; "size not given")}} ({{2.medium}})', -300),
        route(8, 'Membership lead', [[cond('{{2.service}}', 'text:equal', 'membership'), notUpdate]],
          '📅 New membership lead: {{1.data.name}} · {{ifempty(1.data.plan_pick; "no plan picked")}} ({{2.medium}})', 0),
        route(9, 'Putting green restoration lead', [[cond('{{2.service}}', 'text:equal', 'putting-green'), notUpdate]],
          '⛳ Putting green restoration lead: {{1.data.name}} · {{ifempty(1.data.green_where; "location not given")}} ({{2.medium}})', 300),
        route(10, 'Anything else', [[cond('{{2.service}}', 'text:equal', 'other'), notUpdate]],
          '📩 New Facebook lead: {{1.data.name}} ({{1.form_name}})', 600),
      ] },
    ],
    metadata: SCENARIO_META,
  };
};

/* Instant Form answers arrive keyed by Meta's field names, which are the question text in snake_case. */
const key = (label) => label.toLowerCase().replace(/[^a-z0-9? ]/g, '').trim().replace(/\s+/g, '_');
const answer = (slug, name) => {
  const label = angle(slug).questions.find((x) => x.name === name).label;
  return `{{ifempty(get(1.data; ${q(key(label))}); get(1.data; ${q(key(label).replace(/\?$/, ''))}))}}`;
};
const feederBlueprint = (hook, url) => {
  const body = {
    form_name: 'instant-{{if(contains(lower(2.name); "membership"); "membership"; if(contains(lower(2.name); "putting"); "putting-green"; "clean"))}}',
    form_title: '{{2.name}}',
    created_at: '{{1.dateCreated}}',
    site_url: 'Facebook Instant Form',
    data: {
      name: '{{1.data.full_name}}', phone: '{{1.data.phone_number}}', email: '{{1.data.email}}', zip: '{{ifempty(1.data.zip_code; 1.data.post_code)}}',
      size: answer('clean', 'size'), dogs: answer('clean', 'dogs'), issue: answer('clean', 'issue'), plan_pick: answer('membership', 'plan_pick'),
      green_size: answer('putting-green', 'green_size'), green_issue: answer('putting-green', 'green_issue'), green_where: answer('putting-green', 'green_where'),
      utm_source: '{{1.platform}}', utm_medium: 'instant_form', utm_campaign: '{{1.campaignName}}', utm_content: '{{1.adName}}', utm_term: '{{1.adsetName}}',
      page: 'Instant Form: {{2.name}}', lead_id: '{{1.leadgenId}}',
    },
  };
  return {
    name: 'Timeless Turf — Instant Form leads → Facebook lead router',
    flow: [
      { id: 1, module: 'facebook-lead-ads:NewLeadMultiple', version: 2, mapper: {}, metadata: at(0),
        parameters: { v: '2', fields: ['id', 'ad_id', 'ad_name', 'adset_id', 'adset_name', 'campaign_id', 'campaign_name', 'created_time', 'custom_disclaimer_responses', 'field_data', 'form_id', 'is_organic', 'platform'], __IMTHOOK__: hook } },
      { id: 2, module: 'facebook-lead-ads:GetForm', version: 2, parameters: { __IMTCONN__: FACEBOOK }, mapper: { pageId: PAGE_ID, formId: '{{1.formId}}', outputFields: ['name'] }, metadata: at(300) },
      { id: 3, module: 'http:ActionSendData', version: 3, parameters: { handleErrors: false, useNewZLibDeCompress: true }, metadata: at(600),
        mapper: { url, method: 'post', bodyType: 'raw', contentType: 'application/json', data: JSON.stringify(body, null, 2).replace(/\{\{.*?\}\}/g, (m) => m.replace(/\\"/g, '"')), qs: [], headers: [], gzip: true, ca: '', timeout: '', useMtls: false, serializeUrl: false, shareCookies: false, parseResponse: false, followRedirect: true, useQuerystring: false, followAllRedirects: false, rejectUnauthorized: true } },
    ],
    metadata: SCENARIO_META,
  };
};

const outDir = path.join(root, 'automations/make');
fs.mkdirSync(outDir, { recursive: true });
const write = (file, data) => { fs.writeFileSync(path.join(outDir, file), typeof data === 'string' ? data : JSON.stringify(data, null, 2) + '\n'); console.log('wrote', `automations/make/${file}`); };
write('organic-lead-email.html', organicMake);
write('facebook-lead-email.html', facebookMake);
if (arg('organic-hook')) write('organic-lead.blueprint.json', organicBlueprint(+arg('organic-hook')));
if (arg('facebook-hook')) write('facebook-leads.blueprint.json', facebookBlueprint(+arg('facebook-hook')));
if (arg('lead-hook') && arg('facebook-url')) write('instant-form-feeder.blueprint.json', feederBlueprint(+arg('lead-hook'), arg('facebook-url')));

/* ---------- previews with made-up data (the same logic the Make variables run) ---------- */
const preview = arg('preview');
if (preview) {
  fs.mkdirSync(preview, { recursive: true });
  const enc = (s) => encodeURIComponent(s);
  fs.writeFileSync(path.join(preview, 'organic.html'), organic({
    name: 'Jane Doe', zip: '29577', plan: `${P.premium.name}`, when: 'Mon, Sep 14 · 2:41 PM', digits: '8435550100', phone: '843-555-0100', first: 'Jane',
    sms: smsText(enc('Jane')), emailRaw: 'jane@example.com', email: 'jane@example.com', message: 'Two dogs, maybe 600 sq ft.\nSmells after it rains.', page: 'https://www.timelessturfrestoration.com/quote/',
  }));
  const fb = (form, data, extra = {}) => {
    const service = form.includes('membership') ? 'membership' : form.includes('putting') ? 'putting-green' : form.includes('clean') ? 'clean' : 'other';
    const medium = form.includes('instant-') ? 'Facebook Instant Form' : form.includes('lp-') ? 'Website landing page' : form.includes('fb-') ? 'Follow-up page' : 'Website form';
    const up = medium === 'Follow-up page';
    const pick = (pairs, k, d) => (pairs.find(([x]) => x === k) || [0, d])[1];
    const green = (data.green_where || '').includes('HOA') ? 'Community green, so the quote starts with a site walk' : (data.green_where || '').includes('Golf') ? 'Business green, so the quote starts with a site walk' : `Typical backyard green restoration ${GREEN_RANGE}, quoted after a look`;
    const s = { clean: 'Turf cleaning', membership: 'Membership', 'putting-green': 'Putting green restoration' }[service];
    const badgeText = { 'putting-green': 'Green restoration' }[service] || s;
    return facebook({
      kicker: up ? 'Picked a time to talk' : `New ${s.toLowerCase()} lead`, badge: (up ? 'Lead update' : badgeText).toUpperCase(),
      accent: up ? '#4a5a45' : { membership: '#d6a816', 'putting-green': '#8ad132' }[service] || '#2e7a0b', accentInk: up || service === 'clean' ? '#ffffff' : '#0c1809',
      name: data.name, zip: data.zip, when: 'Mon, Sep 14 · 2:41 PM', medium, platform: extra.platform || 'Facebook', digits: '8435550100', phone: data.phone, first: data.name.split(' ')[0], sms: smsText(enc(data.name.split(' ')[0])),
      rowsTitle: up ? 'THEIR UPDATE' : 'THEIR ANSWERS',
      q1Label: up ? 'Best time' : service === 'putting-green' ? 'Green size' : 'Turf size', q1: up ? data.best_time : service === 'putting-green' ? data.green_size : data.size,
      q2Label: service === 'putting-green' ? 'What the green is doing' : 'Dogs', q2: service === 'putting-green' ? data.green_issue : data.dogs,
      q3Label: { clean: 'Bothers them most', membership: 'Plan they picked', 'putting-green': 'Where the green is' }[service], q3: { clean: data.issue, membership: data.plan_pick, 'putting-green': data.green_where }[service],
      hide: up ? 'display:none;' : '',
      hintLabel: up ? 'Next' : { clean: 'Ballpark', membership: 'Suggested plan', 'putting-green': 'Restoration pricing' }[service],
      hint: up ? 'Their answers came in with the first request. Match this to it by phone.' : { clean: pick(BALLPARK, data.size, 'Help them measure'), membership: pick(PLAN_BY_DOGS, data.dogs, 'Ask about dogs'), 'putting-green': green }[service],
      campaign: extra.campaign || 'General Cleaning', adset: extra.adset || 'Grand Strand · homeowners', ad: extra.ad || 'Before-after video', page: data.page, formName: form,
    });
  };
  fs.writeFileSync(path.join(preview, 'fb-clean.html'), fb('lp-clean', { name: 'Jane Doe', phone: '843-555-0100', zip: '29577', size: sizes[1], dogs: '1 dog', issue: 'Pet odor', page: '/lp/clean/' }));
  fs.writeFileSync(path.join(preview, 'fb-membership.html'), fb('instant-membership', { name: 'Marcus Lee', phone: '843-555-0142', zip: '29579', size: sizes[2], dogs: '2 or more dogs', plan_pick: `${M[2].name} · ${money(M[2].monthly)}/mo`, page: 'Instant Form: TTR · Turf membership' }, { platform: 'Instagram', campaign: 'Memberships', ad: 'Dog yard carousel' }));
  fs.writeFileSync(path.join(preview, 'fb-green.html'), fb('lp-putting-green', { name: 'Dana Walsh', phone: '843-555-0199', zip: '29572', green_size: '300–600 sq ft', green_issue: 'Rolling slow', green_where: 'HOA or community', page: '/lp/putting-green/' }, { campaign: 'Putting Green Restoration', ad: 'Green roll video' }));
  fs.writeFileSync(path.join(preview, 'fb-update.html'), fb('fb-clean', { name: 'Jane Doe', phone: '843-555-0100', zip: '29577', best_time: 'Evening', page: '/fb/clean/' }, { platform: 'Not tagged', campaign: 'Not tagged', adset: 'Not tagged', ad: 'Not tagged' }));
  console.log('previews in', preview);
}
