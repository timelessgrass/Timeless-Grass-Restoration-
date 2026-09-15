#!/usr/bin/env node
/**
 * Tell IndexNow search engines (Bing, Yandex, Seznam, Naver and others) which pages changed.
 * Google does not use IndexNow; it reads the sitemap submitted in Search Console.
 *
 *   node scripts/indexnow.mjs                       every URL in the live sitemap
 *   node scripts/indexnow.mjs /pricing/ /about/     just those paths
 *
 * The key file public/<KEY>.txt must be deployed before this runs; the script checks it first.
 * Ahrefs Site Audit can also submit changed pages on its own with this key (project settings → IndexNow).
 */
const SITE = 'https://timelessturfrestoration.com'; // SITE_URL in src/data/site.ts
const KEY = '5d3c8a1f7e2b4096b7a1c4e8f02d6b93';

const keyUrl = `${SITE}/${KEY}.txt`;
const live = await fetch(keyUrl);
if (!live.ok || (await live.text()).trim() !== KEY) {
  console.error(`The key file isn't live at ${keyUrl} yet. Deploy first.`);
  process.exit(1);
}

const paths = process.argv.slice(2);
const urls = paths.length
  ? paths.map((p) => new URL(p, SITE).href)
  : [...(await (await fetch(`${SITE}/sitemap.xml`)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

for (let i = 0; i < urls.length; i += 10000) {
  const urlList = urls.slice(i, i + 10000);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: keyUrl, urlList }),
  });
  console.log(`IndexNow: ${urlList.length} URLs → HTTP ${res.status} ${(await res.text()).trim()}`);
}
