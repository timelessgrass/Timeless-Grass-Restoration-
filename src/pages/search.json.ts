/** Build-time search index for the header search box. */
import type { APIRoute } from 'astro';
import { ALL_SERVICES, ALL_PROBLEMS, ALL_GUIDES, ALL_TOWNS, HOWTOS, CARE, COSTS, EXPLAINERS, COMMERCIAL, GREENS, LOCAL_SERVICES, findTown, findService } from '../data/registry';
export const GET: APIRoute = () => {
  const rows = [
    ...ALL_SERVICES.map((s) => ({ t: s.name, u: `/services/${s.slug}/`, k: 'Service', s: s.short })),
    ...ALL_PROBLEMS.map((p) => ({ t: p.h1, u: `/turf-problems/${p.slug}/`, k: 'Problem', s: p.short })),
    ...HOWTOS.map((h) => ({ t: h.h1, u: `/how-to/${h.slug}/`, k: 'How-to', s: h.short })),
    ...ALL_GUIDES.map((g) => ({ t: g.h1, u: `/guides/${g.slug}/`, k: g.kind === 'comparison' ? 'Comparison' : 'Guide', s: g.short })),
    ...COSTS.map((c) => ({ t: c.h1, u: `/cost/${c.slug}/`, k: 'Cost', s: c.short })),
    ...CARE.map((c) => ({ t: c.h1, u: `/turf-care/${c.slug}/`, k: 'Care', s: c.short })),
    ...EXPLAINERS.map((e) => ({ t: e.h1, u: `/turf-101/${e.slug}/`, k: 'Turf 101', s: e.short })),
    ...COMMERCIAL.map((c) => ({ t: c.h1, u: `/commercial/${c.slug}/`, k: 'Commercial', s: c.short })),
    ...GREENS.map((g) => ({ t: g.h1, u: `/putting-greens/${g.slug}/`, k: 'Putting green', s: g.short })),
    { t: 'Putting green restoration and care', u: '/putting-greens/', k: 'Putting green', s: 'golf green speed sand stimp' },
    ...ALL_TOWNS.map((t) => ({ t: `Turf cleaning in ${t.name}, ${t.state}`, u: `/service-areas/${t.slug}/`, k: 'Area', s: t.zips.join(' ') })),
    ...LOCAL_SERVICES.map((l) => { const t = findTown(l.town)!, s = findService(l.service)!; return { t: `${s.name} in ${t.name}, ${t.state}`, u: `/service-areas/${t.slug}/${s.slug}/`, k: 'Area', s: t.zips.join(' ') }; }),
    { t: 'Pricing', u: '/pricing/', k: 'Page', s: 'prices memberships cost' }, { t: 'About Brian', u: '/about/', k: 'Page', s: 'owner' }, { t: 'Get a free quote', u: '/quote/', k: 'Page', s: 'contact estimate' },
  ];
  return new Response(JSON.stringify(rows), { headers: { 'Content-Type': 'application/json' } });
};
