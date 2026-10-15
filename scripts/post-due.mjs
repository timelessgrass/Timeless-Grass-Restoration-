#!/usr/bin/env node
/**
 * Is a blog post due this week? Prints `due=true` or `due=false` (GitHub
 * Actions output format) and the slugs it found.
 *
 * Used by .github/workflows/weekly-publish.yml so the site is only rebuilt in
 * a week that has something to publish. The client's Netlify team pays per
 * build, so a quiet week must cost nothing.
 *
 * "Due" means a publish date in the last 7 days, today included, Myrtle Beach
 * time. The workflow runs weekly, so each post triggers exactly one build.
 * Reads the batch files as text on purpose: no build step, no dependencies.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const today = process.argv[2] || new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
}).format(new Date());
const start = new Date(`${today}T12:00:00Z`);
start.setUTCDate(start.getUTCDate() - 6);
const from = start.toISOString().slice(0, 10);

const dir = 'src/data';
const due = [];
for (const file of readdirSync(dir).filter((f) => /^blog-\d+\.ts$/.test(f))) {
  const text = readFileSync(join(dir, file), 'utf-8');
  for (const m of text.matchAll(/slug:\s*'([^']+)'[\s\S]*?publish:\s*'(\d{4}-\d{2}-\d{2})'/g)) {
    if (m[2] >= from && m[2] <= today) due.push(`${m[2]} ${m[1]}`);
  }
}
console.log(due.length ? `Due ${from}..${today}:\n  ${due.join('\n  ')}` : `Nothing due ${from}..${today}.`);
console.log(`due=${due.length > 0}`);
