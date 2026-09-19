#!/usr/bin/env node
/**
 * Strips unused icons from the inline sprite in every built page.
 *
 * Icons.astro ships all 40 symbols on every page (about 8 KB and 126 elements); a page uses a handful.
 * Doing it here, after the build, keeps the sprite at the top of the body where <use> always resolves.
 * Runs automatically as part of `npm run build`.
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const SPRITE_START = '<svg width="0" height="0"';
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const files = walk(DIST).filter((f) => f.endsWith('.html'));
let saved = 0, touched = 0, kept = 0, dropped = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const start = html.indexOf(SPRITE_START);
  const lastSymbol = html.lastIndexOf('</symbol>');
  if (start < 0 || lastSymbol < 0) continue;
  const end = html.indexOf('</svg>', lastSymbol) + '</svg>'.length;
  const sprite = html.slice(start, end);
  const rest = html.slice(0, start) + html.slice(end);

  const used = new Set([...rest.matchAll(/href="#(i-[a-z0-9-]+)"/g)].map((m) => m[1]));
  const symbols = [...sprite.matchAll(/<symbol id="(i-[a-z0-9-]+)"[\s\S]*?<\/symbol>/g)];
  const keep = symbols.filter((m) => used.has(m[1]));
  if (keep.length === symbols.length) continue;

  const head = sprite.slice(0, sprite.indexOf('<symbol'));
  const slim = `${head}${keep.map((m) => m[0]).join('')}</svg>`;
  const out = html.slice(0, start) + slim + html.slice(end);
  writeFileSync(file, out);
  saved += html.length - out.length;
  kept += keep.length;
  dropped += symbols.length - keep.length;
  touched++;
}
const missing = '';
console.log(`icons: ${touched} page(s) trimmed · ${Math.round(kept / Math.max(touched, 1))} icons kept per page, ${Math.round(dropped / Math.max(touched, 1))} dropped · ${Math.round(saved / 1024)} KB saved${missing}`);
