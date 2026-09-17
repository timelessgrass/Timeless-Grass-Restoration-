# Facebook lead ads: copy for Ads Manager

Generated 2026-09-17 from `src/data/campaigns.ts` by `node scripts/campaign-kit.mjs`. Don't edit this file by hand: change the data file and run the script, so the forms keep matching the pages.

## How the campaign fits together

| Angle | Instant Form ad: completion button goes to | Website ad: send traffic to |
|---|---|---|
| Turf cleaning quote | https://timelessturfrestoration.com/fb/clean/ | https://timelessturfrestoration.com/lp/clean/ |
| Turf membership | https://timelessturfrestoration.com/fb/membership/ | https://timelessturfrestoration.com/lp/membership/ |
| Putting green restoration | https://timelessturfrestoration.com/fb/putting-green/ | https://timelessturfrestoration.com/lp/putting-green/ |

## Before you publish

- Use one conversion location per ad set. Do not leave "Website and instant forms" mixed: the first $77 sent every link click to an Instant Form, so that setup did not test the website at all.
- At the current $30/day, test sequentially instead of dividing the budget across six paths. Start with the V2 cleaning Instant Form; after it has a real result baseline, run a separate website-only test against /lp/clean/. Membership is a better follow-up/retargeting offer than the first cold test.
- Expand the location targeting beyond Myrtle Beach +25 miles to the actual service area: Shallotte, NC through Burgess, SC, including Conway, Loris and Longs inland. Keep people living in this area.
- Turn off Standard Enhancements, video auto-crop, filtering and uncrop while diagnosing conversion. Keep the ad creative and destination message under your control.
- Fix the existing membership website destination from /fb/membership/ to /lp/membership/. The /fb/ routes are only completion pages after a Meta Instant Form submission.
- Add the full URL-parameter string below to every ad. Video 1 and Video 2 were missing it in the audited campaign.
- The site is live at https://timelessturfrestoration.com (www redirects there and keeps the tracking parameters). Use these exact links in Ads Manager.
- Calls and texts still go to 303-349-2368, a Colorado number. Decide whether to adopt a local 843 number before publishing V2; changing it later means another set of forms.
- These are V2 replacement forms. A published Instant Form cannot be edited; keep the old forms in place until each V2 form passes a test lead.
- The campaign pages intentionally make no reply-time or pet-safety promise until Brian confirms both items in QUESTIONS-FOR-BRIAN.
- Meta Pixel 1047663254935147 is on every page. Website ads: optimize for the Lead event (fires only after a landing-page form submits). Taps on call and text links fire Contact.
- Every lead goes to Make, which emails Brian: the website forms post straight to Make, and Instant Form leads are pulled from the Facebook Page. After publishing each Instant Form, send one test lead with Meta's Lead Ads Testing Tool and check the email (automations/make/README.md).

## Settings for all three Instant Forms

- **Form type:** More volume (Keep the live form type while diagnosing; V2 reduces friction with two qualifying questions and clearer value copy.)
- **Sharing:** Restricted (Only people who receive the ad should open this lead form.)
- **Language:** English (US)
- **Intro background image:** Use image from ad
- **Contact information:** Full name · Phone number · ZIP code (Leave email off: Brian calls or texts.)
- **Contact information explanation:** Brian, the owner, will use these details to call or text you about this request. No email required. (Add manually in Ads Manager if the API cannot set it.)
- **Privacy policy link text:** Privacy policy
- **Privacy policy URL:** https://timelessturfrestoration.com/privacy/
- **Custom disclaimer title:** Calls and texts (Optional. No consent checkbox.)
- **Custom disclaimer text:** By submitting, you agree TIMELESS Turf Restoration may call or text the number you entered about your request. Message and data rates may apply.
- **Completion call to action:** View website (Button text and link are per form, below.)

## URL parameters for every ad (Tracking → Build a URL parameter)

- **Campaign source:** `{{site_source_name}}` (Records Facebook vs Instagram)
- **Campaign medium:** `paid_social`
- **Campaign name:** `{{campaign.name}}`
- **Campaign content:** `{{ad.name}}`
- **Add parameter: utm_term:** `{{adset.name}}`

Or paste the whole string: `utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}`

## 1. Turf cleaning quote

### Ad

- **Primary text A:** Dog smell, leaves, matted paths? Brian deep cleans artificial turf, treats pet odor and brushes it back up. You get your price by the square foot before any work starts. Yards up to 500 sq ft from $199.  `202 chars`
- **Primary text B:** Turf looking tired? Get it blown clean. Priced by the square foot, from $199 on the Grand Strand.  `97 chars`
- **Headline A:** Turf Cleaning From $199  `23 chars`
- **Headline B:** Get Your Turf Cleaning Price  `28 chars`
- **Description:** Priced upfront by the square foot  `33 chars`
- **Call to action:** Get quote

### Instant Form

- **Form name:** TTR · Turf cleaning quote · V2
- **Intro headline:** Get your free turf cleaning quote  `33 chars`
- **Intro description (List layout):**
  - Pet odor, matted fibers, leaves and buildup  `43 chars`
  - Deep cleaning, odor treatment and power brushing  `48 chars`
  - Prices start at $199 for turf up to 500 sq ft  `45 chars`
- **Questions description:** Two quick taps help Brian understand the job before he calls or texts.  `70 chars`
- **Custom question 1 (Multiple choice):** What bothers you most?  `22 chars`
  - Pet odor
  - Dirty, dull or matted
  - Weeds, leaves or debris
  - Just due for a clean
- **Custom question 2 (Multiple choice):** About how big is the turf?  `26 chars`
  - Up to 500 sq ft
  - 501–1,000 sq ft
  - 1,001–2,000 sq ft
  - 2,001–5,000 sq ft
  - Over 5,000 sq ft
  - Not sure
- **Contact information:** Full name, Phone number, ZIP code
- **Completion headline:** Brian has your turf request.  `28 chars`
- **Completion description:** He'll call or text from 303-349-2368 to discuss the right clean and your price. Tap below to save his number and see which photos help.  `135 chars`
- **Completion button:** View website · text "See next steps" · link https://timelessturfrestoration.com/fb/clean/

### Website ad

- **Website URL:** https://timelessturfrestoration.com/lp/clean/
- **URL parameters:** as above
- **Landing page form:** asks the same 2 questions, then name, phone and ZIP, and posts to Make as form `lp-clean`.

## 2. Turf membership

### Ad

- **Primary text A:** Clean turf all year without remembering to book it. A membership brings four visits a year and priority scheduling. Plans from $89 a month on the Grand Strand.  `159 chars`
- **Primary text B:** Dogs on the turf every day? TIMELESS ELITE is a Premium Restoration every quarter, with pet-odor and antimicrobial treatment. $139 a month.  `139 chars`
- **Headline A:** Turf Memberships From $89/mo  `28 chars`
- **Headline B:** Clean Turf, Four Times a Year  `29 chars`
- **Description:** Priority scheduling for members  `31 chars`
- **Call to action:** Get quote

### Instant Form

- **Form name:** TTR · Turf membership · V2
- **Intro headline:** Find the right turf care plan  `29 chars`
- **Intro description (List layout):**
  - Four scheduled visits a year  `28 chars`
  - Cleaning and pet-odor options for your yard  `43 chars`
  - Plans start at $89/month  `24 chars`
- **Questions description:** Two quick taps help Brian recommend a plan. You choose after he explains the options.  `85 chars`
- **Custom question 1 (Multiple choice):** Do dogs use it?  `15 chars`
  - No dogs
  - 1 dog
  - 2 or more dogs
- **Custom question 2 (Multiple choice):** About how big is the turf?  `26 chars`
  - Up to 500 sq ft
  - 501–1,000 sq ft
  - 1,001–2,000 sq ft
  - 2,001–5,000 sq ft
  - Over 5,000 sq ft
  - Not sure
- **Contact information:** Full name, Phone number, ZIP code
- **Completion headline:** Brian has your plan request.  `28 chars`
- **Completion description:** He'll call or text from 303-349-2368 to recommend a plan for your yard and dogs. Tap below to compare the plans and save his number.  `132 chars`
- **Completion button:** View website · text "Compare the plans" · link https://timelessturfrestoration.com/fb/membership/

### Website ad

- **Website URL:** https://timelessturfrestoration.com/lp/membership/
- **URL parameters:** as above
- **Landing page form:** asks the same 2 questions, then name, phone and ZIP, and posts to Make as form `lp-membership`.

## 3. Putting green restoration

### Ad

- **Primary text A:** Green rolling slow or bumpy? Brian has built and cared for putting greens for 13 years. He clears and brushes the green, cleans the cups and fringe, top-dresses it with fresh sand and rolls it true.  `198 chars`
- **Primary text B:** A synthetic green is only as good as its roll. Get yours brushed, top-dressed, rolled and speed-checked on the Grand Strand.  `124 chars`
- **Headline A:** Make Your Green Roll True Again  `31 chars`
- **Headline B:** Putting Green Restoration  `25 chars`
- **Description:** 13 years building and caring for greens  `39 chars`
- **Call to action:** Get quote

### Instant Form

- **Form name:** TTR · Putting green restoration · V2
- **Intro headline:** Get your putting green restoration quote  `40 chars`
- **Intro description (List layout):**
  - For slow, bumpy or uneven synthetic greens  `42 chars`
  - Brushed, top-dressed, rolled and speed-checked  `46 chars`
  - 13 years building and caring for greens  `39 chars`
- **Questions description:** Two quick taps help Brian understand the green before he calls or texts.  `72 chars`
- **Custom question 1 (Multiple choice):** What is the green doing?  `24 chars`
  - Rolling slow
  - Bumpy or breaking oddly
  - Dirty, leaves or needles
  - Seams, cups or edges
  - Just due for service
- **Custom question 2 (Multiple choice):** Where is the green?  `19 chars`
  - Backyard
  - HOA or community
  - Golf course or business
- **Contact information:** Full name, Phone number, ZIP code
- **Completion headline:** Brian has your green request.  `29 chars`
- **Completion description:** He'll call or text from 303-349-2368 to discuss what the green needs and quote the restoration. Tap below to see which photos help.  `131 chars`
- **Completion button:** View website · text "See photo guide" · link https://timelessturfrestoration.com/fb/putting-green/

### Website ad

- **Website URL:** https://timelessturfrestoration.com/lp/putting-green/
- **URL parameters:** as above
- **Landing page form:** asks the same 2 questions, then name, phone and ZIP, and posts to Make as form `lp-putting-green`.
