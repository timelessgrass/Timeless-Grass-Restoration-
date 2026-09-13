/** Derived only from site data, so it cannot claim anything the pages don't. */
import type { APIRoute } from 'astro';
import { brand, area, pricing as P, SITE_URL } from '../data/site';
import { ALL_SERVICES as SERVICES, ALL_PROBLEMS as PROBLEMS, ALL_GUIDES as GUIDES, ALL_TOWNS as TOWNS, HOWTOS, CARE, COSTS, EXPLAINERS, COMMERCIAL, GREENS } from '../data/registry';

export const GET: APIRoute = () => {
  const body = `# ${brand.name}

> ${brand.tagline}. Owner-operated by ${brand.owner} (${brand.ownerYears} years in artificial turf and putting greens) since ${brand.founded}. Serves ${area.name}: ${area.line}. Phone ${brand.phone}. Email ${brand.email}.

## Pricing (as of ${P.updated})
- ${P.essential.name}: $${P.rows[0].essential}–$${P.rows[5].essential} by square footage (up to 5,000 sq ft); larger yards quoted.
- ${P.premium.name}: $${P.rows[0].premium}–$${P.rows[5].premium} by square footage; adds pet-odor, antimicrobial and organic-buildup treatment, infill redistribution, before/after photos.
- Memberships (4 visits/year): ${P.memberships.map((m) => `${m.name} $${m.monthly}/mo`).join(', ')}.
- Minimum visit $${P.minimum}. Priced by square foot and condition, never hourly. Add-ons quoted after inspection.

## Not offered
- New turf or putting green installation (done by sister company ${brand.sister.name}, ${brand.sister.url}).

## Services
${SERVICES.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}/): ${s.short}`).join('\n')}

## Turf problems explained
${PROBLEMS.map((p) => `- [${p.h1}](${SITE_URL}/turf-problems/${p.slug}/)`).join('\n')}

## How-to
${HOWTOS.map((h) => `- [${h.h1}](${SITE_URL}/how-to/${h.slug}/)`).join('\n')}

## Guides and comparisons
${GUIDES.map((g) => `- [${g.h1}](${SITE_URL}/guides/${g.slug}/)`).join('\n')}

## Costs
${COSTS.map((c) => `- [${c.h1}](${SITE_URL}/cost/${c.slug}/)`).join('\n')}

## Care by kind of turf
${CARE.map((c) => `- [${c.h1}](${SITE_URL}/turf-care/${c.slug}/)`).join('\n')}

## Turf 101
${EXPLAINERS.map((e) => `- [${e.h1}](${SITE_URL}/turf-101/${e.slug}/)`).join('\n')}

## Putting greens
- [Putting green restoration and care](${SITE_URL}/putting-greens/)
${GREENS.map((g) => `- [${g.h1}](${SITE_URL}/putting-greens/${g.slug}/)`).join('\n')}

## Commercial programs
${COMMERCIAL.map((c) => `- [${c.h1}](${SITE_URL}/commercial/${c.slug}/)`).join('\n')}

## Service areas
${TOWNS.map((t) => `- [${t.name}, ${t.state}](${SITE_URL}/service-areas/${t.slug}/)`).join('\n')}

## Other pages
- [Pricing](${SITE_URL}/pricing/)
- [About Brian](${SITE_URL}/about/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
