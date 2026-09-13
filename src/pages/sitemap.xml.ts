/** Exactly the indexable routes, built from the same data as the pages. */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';
import { SERVICES } from '../data/services';
import { PROBLEMS } from '../data/problems';
import { GUIDES } from '../data/guides';
import { TOWNS } from '../data/towns';

export const routes = (): string[] => [
  '/', '/services/', '/pricing/', '/about/', '/turf-problems/', '/guides/', '/service-areas/',
  ...SERVICES.map((s) => `/services/${s.slug}/`),
  ...PROBLEMS.map((p) => `/turf-problems/${p.slug}/`),
  ...GUIDES.map((g) => `/guides/${g.slug}/`),
  ...TOWNS.map((t) => `/service-areas/${t.slug}/`),
];

export const GET: APIRoute = () => {
  const all = routes();
  if (new Set(all).size !== all.length) throw new Error('duplicate route in sitemap');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.map((r) => `  <url><loc>${SITE_URL}${r}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
