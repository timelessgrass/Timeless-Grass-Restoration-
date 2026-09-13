/** Exactly the indexable routes, from the content registry. */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';
import { allRoutes } from '../data/registry';
export const GET: APIRoute = () => {
  const all = allRoutes();
  if (new Set(all).size !== all.length) throw new Error('duplicate route in sitemap');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.map((r) => `  <url><loc>${SITE_URL}${r}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
