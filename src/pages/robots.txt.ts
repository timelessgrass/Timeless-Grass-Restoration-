import type { APIRoute } from 'astro';
import { SITE_URL, PRELAUNCH } from '../data/site';

/* Meta's ad reviewer (meta-externalads) and link-preview crawler (facebookexternalhit) obey robots.txt, so
   they get their own group: without it the /lp/ and /fb/ ad landing pages are blocked from ad review and
   shared links show no preview. A named group wins over "*" for that crawler. */
const META = `User-agent: facebookexternalhit
User-agent: meta-externalads
User-agent: Facebot
Allow: /
`;

/* AI retrieval agents (they fetch pages to answer live questions) are allowed in;
   CCBot is training-corpus collection and costs no citations to block. */
const LIVE = `# TIMELESS Turf Restoration
${META}
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: OAI-SearchBot
User-agent: ClaudeBot
User-agent: Claude-User
User-agent: Claude-SearchBot
User-agent: anthropic-ai
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot
User-agent: Applebot-Extended
User-agent: Bingbot
Allow: /

User-agent: CCBot
Disallow: /

User-agent: *
Allow: /
Disallow: /fb/
Disallow: /lp/
Disallow: /quote/
Disallow: /.netlify/

Sitemap: ${SITE_URL}/sitemap.xml
`;
const PRE = `# Pre-launch: name, phone and GBP not final. See src/data/site.ts PRELAUNCH.
# Pages stay noindex; Meta's crawlers may read them so ads pass review.
${META}
User-agent: *
Disallow: /
`;
export const GET: APIRoute = () => new Response(PRELAUNCH ? PRE : LIVE, { headers: { 'Content-Type': 'text/plain' } });
