# Make automations: lead alerts to Brian

Every lead is handled in Make. Nothing uses Netlify Forms.
- **Website forms** post straight to a Make webhook from the browser (`public/main.js`, webhook URLs in `LEAD_HOOKS` in `src/data/site.ts`).
- **Instant Form leads** are pulled from the Facebook Page by Make.

Three scenarios live in Make: To The Max Media, zone us2, team "My Team", folder **Timeless Turf Restoration**. Every alert is a designed HTML email to `brand.email` (today timelessgrass@gmail.com), sent through "My Gmail connection" (info@tothemaxmedia.com).

| Scenario | ID | Trigger | What it does |
|---|---|---|---|
| Organic website lead → Brian | 6272666 | Webhook `https://hook.us2.make.com/2rtexoaexdzczor72y9xtw2xyo29pf42` | The `quote` form (home page and /quote/) → one email |
| Facebook leads → route by medium & service → Brian | 6272684 | Webhook `https://hook.us2.make.com/6sad5csnuuzxxnwzfnao957roumxfdky` | Landing page forms `lp-*` and Instant Form leads from the feeder → router → email |
| Instant Form leads → Facebook lead router | 6272696 | Facebook Lead Ads, page "Timeless Restoration" (1360007903856817), every form | Looks up the form name, reshapes the lead like a website submission, posts it to the router webhook |

## What the website sends

`{ form_name, created_at, site_url, data: { ...every field, page, utm_*, fbclid, bot_field, elapsed_ms } }` as JSON. Make's webhooks allow cross-origin requests, so the browser reads the response and only shows success when Make accepted the lead.

**Spam checks**, in the browser and again in the first filter of each scenario:
- `bot_field` is a hidden trap field and must be empty.
- `elapsed_ms` is the time since the page loaded and must be over 2 seconds.

The browser silently skips sending when the trap is filled. Instant Form leads skip both checks.

## How the Facebook router decides

1. **Medium**, from the form name: `instant-*` Facebook Instant Form or `lp-*` website landing page.
2. **Service**, also from the form name: contains `membership`, `putting`, or `clean`.
3. Routes:
   - Turf cleaning (with a ballpark price from the size answer)
   - Membership (with a suggested plan from the dogs answer)
   - Putting green (flags HOA and golf greens for a site walk)
   - Anything else

   Each route has its own subject line. The email body is built once (module 4) with the service's colour, answers and hint.
4. **Ad attribution** comes from the URL parameters on the ad (`utm_source` `{{site_source_name}}`, `utm_campaign`, `utm_term` ad set, `utm_content` ad), which the landing page form carries. For Instant Forms it comes from the lead itself.

Instant Form names must contain `cleaning`, `membership` or `putting` (the kit's V2 names do).

## Instant Forms

The three V1 published forms checked on 2026-09-15 are cleaning `1436778848336765`, membership `984843124016157`, and putting green `1383462950568116`. Do not delete or replace them in ads until the V2 forms pass end-to-end tests.
- The feeder accepts the V2 question set and retains aliases for the V1 plan, dog and green-size fields during the transition.
- It normalizes both visible answers (for example, `501–1,000 sq ft`) and Ads Manager's underscored tokens (for example, `501_1_000_sq_ft`) to the canonical label before routing.
- The feeder reads each answer from `1.data.<key>` or, failing that, Meta's raw `field_data` list.

Send a test lead per form with Meta's [Lead Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing). If a row says "Not answered", open the feeder's last run in Make and compare module 1's output with module 3's JSON body.

## Test leads

A lead whose name contains "test lead" (what Meta's testing tool sends) or "(TEST)" gets a `[TEST]` subject. Blueprints built with `--test-to <address>` send those leads to that address instead of Brian, so a test never reaches him while ads run. Keep the address out of the repo: build those blueprints with `--out <dir outside the repo>`, then update the scenarios in Make. The live scenarios were built that way on 2026-09-15.

Every value that comes from a form or a URL parameter is HTML-escaped before it goes into an email.

## Still to check

1. **Facebook connection.** "My Facebook connection" (Ty Stevens) lists the page and could read all three forms on 2026-09-15, but its stored expiry date is 2026-09-02. If Instant Form alerts stop, reauthorize it in Make → Credentials.

## Changing prices, questions or the email

The email, the variables and all three blueprints are generated from `src/data` by:

```bash
node scripts/make-lead-alerts.mjs --organic-hook 2812950 --facebook-hook 2812951 --facebook-url https://hook.us2.make.com/6sad5csnuuzxxnwzfnao957roumxfdky --lead-hook 2812952 --preview /tmp/lead-email-previews
```

It writes `automations/make/*.blueprint.json` (import into the scenario, or update it through the Make API) and sample emails you can open in a browser.
