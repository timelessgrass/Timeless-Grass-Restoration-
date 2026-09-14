# Make automations: lead alerts to Brian

Three scenarios in Make (To The Max Media, zone us2, team "My Team", folder **Timeless Turf Restoration**). Every alert is a designed HTML email to `brand.email` in `src/data/site.ts` (today timelessgrass@gmail.com), sent through the "My Gmail connection" (info@tothemaxmedia.com).

| Scenario | ID | Trigger | What it does |
|---|---|---|---|
| Organic website lead → Brian | 6272666 | Webhook `https://hook.us2.make.com/2rtexoaexdzczor72y9xtw2xyo29pf42` | Netlify form `quote` (home page and /quote/) → one email |
| Facebook leads → route by medium & service → Brian | 6272684 | Webhook `https://hook.us2.make.com/6sad5csnuuzxxnwzfnao957roumxfdky` | Landing page forms `lp-*`, follow-up forms `fb-*`, and Instant Form leads from the feeder → router → email |
| Instant Form leads → Facebook lead router | 6272696 | Facebook Lead Ads, page "Timeless Restoration" (1360007903856817), every form | Looks up the form name, reshapes the lead like a Netlify submission, posts it to the router webhook |

## How the Facebook router decides

1. **Medium**, from the form name: `instant-*` Facebook Instant Form, `lp-*` website landing page, `fb-*` follow-up page.
2. **Service**, also from the form name: contains `membership`, `putting`, or `clean`.
3. Routes:
   - Follow-up page (best time to call)
   - Turf cleaning (with a ballpark price from the size answer)
   - Membership (with a suggested plan from the dogs answer)
   - Putting green (flags HOA and golf greens for a site walk)
   - Anything else

   Each route has its own subject line. The email body is built once (module 4) with the service's colour, answers and hint.
4. **Ad attribution** comes from the URL parameters on the ad (`utm_source` `{{site_source_name}}`, `utm_campaign`, `utm_term` ad set, `utm_content` ad). For Instant Forms it comes from the lead itself.

Instant Form names must contain `cleaning`, `membership` or `putting` (the kit's `TTR · Turf cleaning quote`, `TTR · Turf membership`, `TTR · Putting green restoration` do).

## Setup still to do

1. **Netlify** (after the site with the new forms is deployed; Netlify only lists forms it has seen in a deploy). Go to Project configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → HTTP POST request. Add two:
   - Form `quote` → the organic webhook URL above.
   - Any form → the Facebook router webhook URL above. The router ignores `quote`, so "Any form" is safe.
2. **Instant Forms.** After publishing each form, send a test lead with Meta's [Lead Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing) and check the email.
   - Answers are read by Meta's field keys, which are the question text in snake_case (`about_how_big_is_the_turf?`).
   - If a row says "Not answered", open the feeder's last run in Make, read the real key under module 1 → Data, and fix it in module 3's JSON body.
3. **Facebook connection.** "My Facebook connection" (Ty Stevens) still lists the page, but its stored expiry date is 2026-09-02. If Instant Form alerts stop, reauthorize it in Make → Credentials.

## Changing prices, questions or the email

The email, the variables and all three blueprints are generated from `src/data` by:

```bash
node scripts/make-lead-alerts.mjs --organic-hook 2812950 --facebook-hook 2812951 --facebook-url https://hook.us2.make.com/6sad5csnuuzxxnwzfnao957roumxfdky --lead-hook 2812952 --preview /tmp/lead-email-previews
```

It writes `automations/make/*.blueprint.json` (import into the scenario, or update it through the Make API) and sample emails you can open in a browser.
