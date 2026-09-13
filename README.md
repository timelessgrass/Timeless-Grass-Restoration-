# TIMELESS Turf Restoration

Static site (Astro 5, no client framework) for the turf cleaning and restoration company on the Grand Strand. Built by To The Max Media.

## Run

```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

Netlify: build `npm run build`, publish `dist` (declared in `netlify.toml`). Two Netlify Forms: `quote` (home and /quote/) and `fb-followup` (/fb/). Enable form notifications after the first deploy.

## Before launch (all in `src/data/site.ts`)

- `PRELAUNCH = true` puts `noindex` on every page and a blanket `Disallow` in robots.txt. Flip to `false` only when the items below are settled.
- `brand.name` — working name from Brian's call. Logo still reads "Grass & Greens".
- `brand.phone` — currently the Grass & Greens number. A separate brand needs its own local (843) number so the Google Business Profile and the site match byte-for-byte.
- `SITE_URL` — no domain registered yet; canonicals and the sitemap use it.
- Then: create the GBP as a service-area business, mirror NAP to Yelp / Nextdoor / Bing / Apple / Facebook, verify Search Console + Bing Webmaster, submit `/sitemap.xml`.

## Where things live

| What | Where |
|---|---|
| Business facts, pricing, memberships | `src/data/site.ts` |
| Services (10) | `src/data/services.ts` |
| Problem pages | `src/data/problems.ts`, `problems-2.ts`, `problems-3.ts` |
| How-to pages | `src/data/howtos.ts` |
| Guides and comparisons | `src/data/guides.ts`, `guides-2.ts`, `comparisons.ts` |
| Cost pages | `src/data/costs.ts` |
| Care by turf type | `src/data/care.ts` |
| Turf 101 explainers | `src/data/explainers.ts` |
| Commercial segments | `src/data/commercial.ts` |
| Town pages, each with `sources[]` | `src/data/towns.ts`, `towns-2.ts` |
| Service × town pages (hand-written local angle) | `src/data/local-services-1.ts`, `-2.ts` |
| Content registry (combines batches, builds routes, sitemap, search index) | `src/data/registry.ts` |
| Shared article schema | `src/data/types.ts` |
| Reading layout (TOC, takeaways, diagrams, FAQ, related) | `src/components/ArticleLayout.astro` |
| SVG diagrams | `src/components/Diagram.astro` |
| Writer rules for new content | `research/WRITER-BRIEF.md` |
| Layout, entity graph (one `#business` node) | `src/layouts/Base.astro` |
| Research notes | `research/` |
| Original static build | `archive/` |

Every page: unique title ≤60, description ≤160, self-canonical, breadcrumbs + `BreadcrumbList`, `WebPage` → `#business`, `FAQPage` mirroring the printed FAQ, an answer-box (`.answer-box__a`, speakable). Never `aggregateRating`.

## Audit

```
npm run build && python3 scripts/audit.py
```

Fails on: broken internal links, orphan pages, titles over 60 or descriptions over 160, missing H1 or tel link, more or fewer than one LocalBusiness node, rating markup, any page under 450 words of content, forbidden claims (licensed, insured, guarantee, #1, same-day service…), and sibling-page similarity at or above 0.6 within a tier (doorway risk). Search index: `/search.json`, built from the registry.

## Adding content

- A new town: add an entry to `TOWNS` with at least three blocks that are true only of that town, each fact traceable to a URL in `sources[]`. The sitemap, footer, service pages and area index pick it up automatically.
- A new problem or guide: add to the array; link it from the service that fixes it (`problems[]`) so it is never orphaned.
- Job photos from Brian: drop into `public/assets/img/`, reference from the town, service or problem page. Before/after pairs replace the "our work" note on the homepage.
