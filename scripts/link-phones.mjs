#!/usr/bin/env node
/**
 * Makes every phone number on the built pages tap-to-call.
 *
 * Most numbers are already inside tel: links (header, sticky bar, CTAs). A few are written into content
 * strings instead — the answer box's closing "Call 303-349-2368.", the problem pages' callout, the form's
 * error message — and those render as plain text you can't tap on a phone. This wraps any number left in
 * body text, skipping anything already inside a link, and never touching attributes, head, scripts or JSON-LD.
 *
 * Runs as part of `npm run build`.
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
/* Lookarounds so ten digits inside a longer run never match. The Grass & Greens site hit this: a Facebook
   profile id contains a phone-shaped substring, and a crawler read it as a second number. */
const PHONE = /(?<!\d)\(?\d{3}\)?[\s.‑-]?\d{3}[\s.‑-]?\d{4}(?!\d)/g;
/** Only this number: a stray number in copy (a customer's, a partner's) shouldn't silently become a call link. */
const OURS = /^\(?303\)?[\s.‑-]?349[\s.‑-]?2368$/;
const HREF = 'tel:+13033492368';
const SKIP = new Set(['a', 'script', 'style', 'title', 'head', 'textarea', 'option', 'button', 'select', 'noscript']);

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let linked = 0, touched = 0;
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  let out = '', i = 0, depth = 0, changed = 0;
  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt < 0) { out += rewrite(html.slice(i)); break; }
    out += rewrite(html.slice(i, lt));
    if (html.startsWith('<!--', lt)) {                 // comments pass through untouched
      const end = html.indexOf('-->', lt);
      const stop = end < 0 ? html.length : end + 3;
      out += html.slice(lt, stop); i = stop; continue;
    }
    const gt = html.indexOf('>', lt);
    if (gt < 0) { out += html.slice(lt); break; }
    const tag = html.slice(lt, gt + 1);
    const name = (tag.match(/^<\/?\s*([a-zA-Z0-9-]+)/) || [])[1]?.toLowerCase();
    if (name && SKIP.has(name) && !tag.startsWith('<!--')) {
      if (tag.startsWith('</')) depth = Math.max(0, depth - 1);
      else if (!tag.endsWith('/>')) depth++;
    }
    out += tag;
    i = gt + 1;
  }
  function rewrite(text) {
    if (depth > 0 || !text.trim()) return text;
    return text.replace(PHONE, (m) => {
      if (!OURS.test(m)) return m;
      changed++;
      return `<a href="${HREF}" data-cta="call-text">${m}</a>`;
    });
  }
  if (changed) { writeFileSync(file, out); linked += changed; touched++; }
}
console.log(`phones: ${linked} number(s) made tappable across ${touched} page(s)`);
