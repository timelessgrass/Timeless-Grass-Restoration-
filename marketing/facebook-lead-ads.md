# Facebook lead ads: copy for Ads Manager

Generated 2026-09-14 from `src/data/campaigns.ts` by `node scripts/campaign-kit.mjs`. Don't edit this file by hand: change the data file and run the script, so the forms keep matching the pages.

## How the campaign fits together

| Angle | Instant Form ad: completion button goes to | Website ad: send traffic to |
|---|---|---|
| Turf cleaning quote | https://www.timelessturfrestoration.com/fb/clean/ | https://www.timelessturfrestoration.com/lp/clean/ |
| Turf membership | https://www.timelessturfrestoration.com/fb/membership/ | https://www.timelessturfrestoration.com/lp/membership/ |
| Putting green restoration | https://www.timelessturfrestoration.com/fb/putting-green/ | https://www.timelessturfrestoration.com/lp/putting-green/ |

## Before you publish

- The site has to be live at https://www.timelessturfrestoration.com before ads run (push the site, connect the domain). Until the domain works, swap in the Netlify address in every link here.
- Calls and texts go to 303-349-2368, a Colorado number. A local 843 number will convert better on the Grand Strand; changing it later means new Instant Forms.
- A published Instant Form cannot be edited. Proof every field before you publish; a fix means a new form.
- The web pages say Brian replies "within one business day" and answer "Is it safe for kids and dogs?" with yes. Brian should confirm both (QUESTIONS-FOR-BRIAN #15 and #17). The Instant Forms avoid both.
- Meta Pixel 1047663254935147 is on every page. Website ads: optimize for the Lead event (fires only after a landing-page form submits). Taps on call and text links fire Contact.
- Every lead goes to Make, which emails Brian: the website forms post straight to Make, and Instant Form leads are pulled from the Facebook Page. After publishing each Instant Form, send one test lead with Meta's Lead Ads Testing Tool and check the email (automations/make/README.md).

## Settings for all three Instant Forms

- **Form type:** Higher intent (Adds a review screen before submit. Fewer leads, far fewer junk ones.)
- **Intro background image:** Use image from ad
- **Contact information:** Full name · Phone number · ZIP code (Leave email off: Brian calls or texts.)
- **Privacy policy link text:** Privacy policy
- **Privacy policy URL:** https://www.timelessturfrestoration.com/privacy/
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

- **Form name:** TTR · Turf cleaning quote
- **Intro headline:** Get your turf cleaning price  `28 chars`
- **Intro description (List layout):**
  - Priced by the square foot, never by the hour  `44 chars`
  - Yards up to 500 sq ft from $199  `31 chars`
  - Brian, the owner, calls or texts you back  `41 chars`
- **Questions description:** Three quick taps so Brian can price your yard before he calls. A 20 × 25 ft yard is 500 sq ft.  `94 chars`
- **Custom question 1 (Multiple choice):** About how big is the turf?  `26 chars`
  - Up to 500 sq ft
  - 500–1,000 sq ft
  - 1,000–2,000 sq ft
  - 2,000–5,000 sq ft
  - Over 5,000 sq ft
  - Not sure
- **Custom question 2 (Multiple choice):** Do dogs use it?  `15 chars`
  - No dogs
  - 1 dog
  - 2 or more dogs
- **Custom question 3 (Multiple choice):** What bothers you most?  `22 chars`
  - Pet odor
  - Dirty, dull or matted
  - Weeds, leaves or debris
  - Just due for a clean
- **Contact information:** Full name, Phone number, ZIP code
- **Completion headline:** Got it. Brian will reach out.  `29 chars`
- **Completion description:** He'll call or text from 303-349-2368. Save the number, and send photos to get your price faster.  `96 chars`
- **Completion button:** View website · text "See next steps" · link https://www.timelessturfrestoration.com/fb/clean/

### Website ad

- **Website URL:** https://www.timelessturfrestoration.com/lp/clean/
- **URL parameters:** as above
- **Landing page form:** asks the same 3 questions, then name, phone and ZIP, and posts to Make as form `lp-clean`.

## 2. Turf membership

### Ad

- **Primary text A:** Clean turf all year without remembering to book it. A membership brings four visits a year and priority scheduling. Plans from $89 a month on the Grand Strand.  `159 chars`
- **Primary text B:** Dogs on the turf every day? TIMELESS ELITE is a Premium Restoration every quarter, with pet-odor and antimicrobial treatment. $139 a month.  `139 chars`
- **Headline A:** Turf Memberships From $89/mo  `28 chars`
- **Headline B:** Clean Turf, Four Times a Year  `29 chars`
- **Description:** Priority scheduling for members  `31 chars`
- **Call to action:** Get quote

### Instant Form

- **Form name:** TTR · Turf membership
- **Intro headline:** Clean turf all year, from $89/mo  `32 chars`
- **Intro description (List layout):**
  - Four visits a year  `18 chars`
  - Priority scheduling for members  `31 chars`
  - Brian matches the plan to your yard  `35 chars`
- **Questions description:** Three quick taps so Brian can match you with a plan when he calls.  `66 chars`
- **Custom question 1 (Multiple choice):** About how big is the turf?  `26 chars`
  - Up to 500 sq ft
  - 500–1,000 sq ft
  - 1,000–2,000 sq ft
  - 2,000–5,000 sq ft
  - Over 5,000 sq ft
  - Not sure
- **Custom question 2 (Multiple choice):** Do dogs use it?  `15 chars`
  - No dogs
  - 1 dog
  - 2 or more dogs
- **Custom question 3 (Multiple choice):** Which plan sounds right?  `24 chars`
  - Essential Care · $89/mo
  - TIMELESS ELITE · $139/mo
  - Pet Turf ELITE · $169/mo
  - Not sure yet
- **Contact information:** Full name, Phone number, ZIP code
- **Completion headline:** You're on Brian's list.  `23 chars`
- **Completion description:** He'll call or text from 303-349-2368 to match you with a plan. Save the number so you know it's him.  `100 chars`
- **Completion button:** View website · text "Compare the plans" · link https://www.timelessturfrestoration.com/fb/membership/

### Website ad

- **Website URL:** https://www.timelessturfrestoration.com/lp/membership/
- **URL parameters:** as above
- **Landing page form:** asks the same 3 questions, then name, phone and ZIP, and posts to Make as form `lp-membership`.

## 3. Putting green restoration

### Ad

- **Primary text A:** Green rolling slow or bumpy? Brian has built and cared for putting greens for 13 years. He clears and brushes the green, cleans the cups and fringe, top-dresses it with fresh sand and rolls it true.  `198 chars`
- **Primary text B:** A synthetic green is only as good as its roll. Get yours brushed, top-dressed, rolled and speed-checked on the Grand Strand.  `124 chars`
- **Headline A:** Make Your Green Roll True Again  `31 chars`
- **Headline B:** Putting Green Restoration  `25 chars`
- **Description:** 13 years building and caring for greens  `39 chars`
- **Call to action:** Get quote

### Instant Form

- **Form name:** TTR · Putting green restoration
- **Intro headline:** Get your putting green quote  `28 chars`
- **Intro description (List layout):**
  - Brushed, top-dressed, rolled and speed-checked  `46 chars`
  - 13 years building and caring for greens  `39 chars`
  - Typical backyard greens: $299–$899  `34 chars`
- **Questions description:** Three quick taps so Brian knows what your green needs before he calls.  `70 chars`
- **Custom question 1 (Multiple choice):** How big is the green?  `21 chars`
  - Under 300 sq ft
  - 300–600 sq ft
  - 600–1,000 sq ft
  - Over 1,000 sq ft
  - Not sure
- **Custom question 2 (Multiple choice):** What is the green doing?  `24 chars`
  - Rolling slow
  - Bumpy or breaking oddly
  - Dirty, leaves or needles
  - Seams, cups or edges
  - Just due for service
- **Custom question 3 (Multiple choice):** Where is the green?  `19 chars`
  - Backyard
  - HOA or community
  - Golf course or business
- **Contact information:** Full name, Phone number, ZIP code
- **Completion headline:** Got it. Brian will reach out.  `29 chars`
- **Completion description:** He'll call or text from 303-349-2368. Photos of the green help him quote it.  `76 chars`
- **Completion button:** View website · text "Send photos of the green" · link https://www.timelessturfrestoration.com/fb/putting-green/

### Website ad

- **Website URL:** https://www.timelessturfrestoration.com/lp/putting-green/
- **URL parameters:** as above
- **Landing page form:** asks the same 3 questions, then name, phone and ZIP, and posts to Make as form `lp-putting-green`.
