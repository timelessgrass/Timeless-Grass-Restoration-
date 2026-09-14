# Landing page copy brief: Facebook lead campaign

For: rewriting the copy on the three campaign landing pages and their Instant Form follow-up pages.
Business: TIMELESS Turf Restoration (Grand Strand, SC/NC). Generated from the built pages; regenerate with `npm run build && python3 scripts/copy-brief.py`.

## What to send back

- Return copy section by section using the same numbered section names below, one angle at a time.
- Keep each field about the same length as today unless you are cutting. Headlines must fit on a phone (H1 two short lines).
- Mark anything you want to ADD as NEW, and anything you'd REMOVE as CUT, with one line on why.
- Do not change the parts listed under "Locked" below; suggest changes to them separately if you think they matter.

## The business (facts you may use)

- Owner-operated by **Brian**, 13 years building and caring for artificial turf and putting greens (his sister company TIMELESS Grass & Greens builds them). This company **cleans, treats and restores existing turf and greens. It does not install.**
- Service area: the Grand Strand, Shallotte NC to Burgess SC, along the coast and inland through Conway, Loris and Longs (Myrtle Beach, North Myrtle Beach, Carolina Forest, Little River…).
- Priced by square footage and condition, never hourly; the price comes before any work starts. Finish standard on every job: "blown clean".
- Phone (calls and texts): 303-349-2368.
- Essential Clean: $199 (up to 500 sq ft), $249 (501–1,000), $299 (1,001–1,500), $349 (1,501–2,000), $449 (2,001–3,000), $599 (3,001–5,000), over 5,000 quoted. Includes debris removal, turf blowing, power brushing, surface rinse, basic spot treatment, final grooming.
- Premium Restoration: $299 / $399 / $499 / $599 / $749 / $899 for the same bands. Adds deep cleaning, pet-odor treatment, antimicrobial treatment, algae/mold treatment, detailed grooming, infill redistribution, minor weed and debris removal, edge and seam inspection, before and after photos. Minimum visit $199.
- Memberships (four visits a year, billed monthly): Essential Care $89/mo (blow-off and grooming, light rinse, basic odor treatment, priority scheduling); TIMELESS ELITE $139/mo (a Premium Restoration every quarter, priority scheduling, 10% off add-ons); Pet Turf ELITE $169/mo.
- Putting green restoration: typical backyard greens $299–$899, quoted after a look.
- Real before/after job photos exist (a dog yard, a side yard mid-clean with a power brush, a front lawn full of leaves). No review, rating or testimonial exists yet.

## Voice

Plain, specific, second person, like a tradesman explaining it at the kitchen table. Short sentences. Lead with the answer. No exclamation marks, no hype adjectives, no rhetorical questions in body copy. Hedge with "usually" or "most" instead of inventing precision. Don't sound defensive (no "we're not a call center", "nothing here is stock").

## Never write

- Invented numbers: statistics, review counts, star ratings, testimonials, customer names, job counts, awards.
- Licensed, insured, bonded, warranty, guarantee, price-match, same-day, 24/7, "#1", "best", "top-rated", "trusted by".
- Anything that implies installing turf or building a putting green.
- Bleach, pressure washing, wire brushes or acid as advice.
- The words elevate, seamless, unlock, delve, robust, leverage, game-changer, look no further.

## Not confirmed by Brian yet (avoid, or flag if you use them)

- Reply time ("within one business day" appears on the pages today).
- "Pet-safe / safe for kids and dogs once dry" (appears in the FAQ today).
- Membership cancellation terms or "no contract"; what the ELITE 10% covers beyond add-ons; what Pet Turf ELITE adds.
- Trip charges, free on-site visits, how fast a visit can be booked.

## Locked (the lead routing depends on these)

- Every form question and answer, word for word. The same wording is used in the Meta Instant Forms and by the Make automation that emails Brian; changing a word breaks the routing and the ballpark in his email.
- Form names (lp-clean, lp-membership, lp-putting-green, fb-clean, fb-membership, fb-putting-green) and the Instant Form names (they must contain "cleaning", "membership" or "putting").
- Prices, plan names and plan contents: they come from the sitewide price data and must match the pricing page.
- A published Instant Form can't be edited, so Instant Form copy changes mean new forms.

## How each route works

| Angle | Website ad → landing page (form on the page) | Instant Form ad → follow-up page after the form |
|---|---|---|
| Turf cleaning quote | https://www.timelessturfrestoration.com/lp/clean/ (form `lp-clean`) | Instant Form "TTR · Turf cleaning quote" → completion button → https://www.timelessturfrestoration.com/fb/clean/ (optional best-time form `fb-clean`) |
| Turf membership | https://www.timelessturfrestoration.com/lp/membership/ (form `lp-membership`) | Instant Form "TTR · Turf membership" → completion button → https://www.timelessturfrestoration.com/fb/membership/ (optional best-time form `fb-membership`) |
| Putting green restoration | https://www.timelessturfrestoration.com/lp/putting-green/ (form `lp-putting-green`) | Instant Form "TTR · Putting green restoration" → completion button → https://www.timelessturfrestoration.com/fb/putting-green/ (optional best-time form `fb-putting-green`) |

- **Landing page** (`/lp/`): for ads whose destination is the website. No site navigation. The form sits in the first screen: step 1 taps the three questions (a hint appears under each answer), step 2 asks name, phone and ZIP. Submitting sends the lead to Make, which emails Brian, and fires the Meta Pixel "Lead" event. The visitor then sees "You're in, <name>!" with Save the number and Text photos buttons.
- **Follow-up page** (`/fb/`): where people land after already submitting the Instant Form on Facebook. The job is to make sure they answer Brian's call (save the number), get photos texted in, set expectations and handle doubts. An optional "When should Brian call?" form sends a lead update to Brian. Call and text taps fire the Pixel "Contact" event.

---

## 1. Turf cleaning quote

**Who lands here:** Homeowners on the Grand Strand who already have artificial turf (often dog owners) and are bothered by pet odor, leaves and pollen, matted paths or turf that looks tired. Cold traffic from a Facebook or Instagram feed ad, almost always on a phone.

**Offer and proof:** A price by the square foot before any work starts. Essential Clean from $199 and Premium Restoration from $299 for yards up to 500 sq ft. The page shows a live ballpark as soon as they pick a size.

### 1A. Landing page: https://www.timelessturfrestoration.com/lp/clean/

Current copy, in page order:

- Browser title: Turf Cleaning From $199 | TIMELESS Turf Restoration
- Meta description (link previews): Artificial turf deep cleaned, pet odor treated and brushed back up on the Grand Strand. Priced by the square foot before any work starts.

#### 1. Top bar
- **Image:** /assets/brand/logo.webp (alt: TIMELESS Turf Restoration)
- **Button:** Call or text 303-349-2368

#### 2. Get your turf blown clean again
- **Eyebrow:** Grand Strand turf cleaning
- **H1:** Get your turf blown clean again
- **Text:** Deep cleaned through the fibers and infill, pet odor treated, brushed back up. You get your price before any work starts.
  - Up to 500 sq ft from $199
  - By the square foot, never hourly
  - 13 years in turf
- **H2:** Get your price
  - 1 · Your turf
  - 2 · Where to send it
- **Form question:** About how big is the turf? — answers: Up to 500 sq ft · 500–1,000 sq ft · 1,000–2,000 sq ft · 2,000–5,000 sq ft · Over 5,000 sq ft · Not sure
- **   hint:** when "Up to 500 sq ft" is picked: Ballpark: Essential Clean $199 · Premium Restoration $299
- **   hint:** when "500–1,000 sq ft" is picked: Ballpark: Essential Clean $249 · Premium Restoration $399
- **   hint:** when "1,000–2,000 sq ft" is picked: Ballpark: Essential Clean $299–$349 · Premium Restoration $499–$599
- **   hint:** when "2,000–5,000 sq ft" is picked: Ballpark: Essential Clean $449–$599 · Premium Restoration $749–$899
- **   hint:** when "Over 5,000 sq ft" is picked: Big yard. Brian prices it after a look.
- **   hint:** when "Not sure" is picked: No problem. A 20 × 25 ft yard is 500 sq ft, and Brian can measure.
- **Form question:** Do dogs use it? — answers: No dogs · 1 dog · 2 or more dogs
- **   hint:** when "No dogs" is picked: No pets and light dirt? The Essential Clean is usually enough.
- **   hint:** when "1 dog" is picked: Dog yards get the Premium Restoration, with pet-odor and antimicrobial treatment.
- **   hint:** when "2 or more dogs" is picked: Dog yards get the Premium Restoration, with pet-odor and antimicrobial treatment.
- **Form question:** What bothers you most? — answers: Pet odor · Dirty, dull or matted · Weeds, leaves or debris · Just due for a clean
- **Button:** Next: where to send it
- **Form field:** name (required)
- **Form field:** phone (required)
- **Form field:** zip (required)
- **Button:** Get My Free Quote
- **Button:** Change my answers
- **Text:** Something went wrong. Please call or text 303-349-2368.
- **Text:** By submitting, you agree Brian may call or text you about your request. Privacy
- **H2:** You're in!
- **Text:** Brian will call or text you from 303-349-2368 within one business day.
- **Button:** Save the number
- **Button:** Text photos
- **Image:** /assets/img/jobs/side-yard-turf-power-brushed-before-after-640.webp (alt: Side-yard artificial turf half cleaned, with a power brush resting on the finished section)
- **Photo caption:** Mid-clean. Brushed past the line; the front is how we found it.

#### 3. What one visit changes
- **Eyebrow:** Before & after
- **H2:** What one visit changes
- **Image:** /assets/img/jobs/dog-yard-turf-cleaned-before-after-640.webp (alt: Before and after: artificial turf dog yard with pet waste, then cleaned and brushed)
- **Photo caption:** Dog yard. Waste and debris cleared, fibers brushed back up.
- **Image:** /assets/img/jobs/side-yard-turf-power-brushed-before-after-640.webp (alt: Narrow side-yard artificial turf half cleaned, with a power brush resting on the finished section)
- **Photo caption:** Side yard, mid-clean. Brushed and cleared past the line. The front is how we found it.
- **Image:** /assets/img/jobs/front-lawn-turf-leaves-cleared-before-after-640.webp (alt: Before and after: artificial front lawn covered in dry leaves, then cleared and blown clean)
- **Photo caption:** Front lawn. Leaves and debris cleared, turf blown clean.

#### 4. Two ways to clean it
- **Eyebrow:** Upfront pricing
- **H2:** Two ways to clean it
- **Text:** Priced by the square foot, never by the hour. Your exact price comes before any work starts.
- **Text:** One-time clean
- **H3:** Essential Clean
- **Text:** Regular upkeep for people-only yards, or a refresh between deep cleans.
- **Text:** from $199 — Up to 500 sq ft. Every size below.
  - Debris removal
  - Turf blowing
  - Power brushing
  - Surface rinse
  - Basic spot treatment
  - Final grooming
  - Pet-odor & antimicrobial treatment
  - Infill redistribution
- **Button:** Get my price
- **Label:** Best for dog yards
- **H3:** Premium Restoration
- **Text:** A deep clean for pet yards, odor, algae and tired, matted turf.
- **Text:** from $299 — Up to 500 sq ft. Every size below.
  - Everything in Essential Clean
  - Deep turf cleaning
  - Pet-odor treatment
  - Antimicrobial treatment
  - Organic buildup (algae, mold) treatment
  - Detailed grooming
  - Infill redistribution
  - Minor weed & debris removal
  - Edge & seam inspection
  - Before & after photos
- **Table caption:** Price by turf size
- **Table head:** Turf area
- **Table head:** Essential Clean
- **Table head:** Premium Restoration
- **Table head:** Up to 500 sq ft
- **Cell:** $199
- **Cell:** $299
- **Table head:** 501–1,000 sq ft
- **Cell:** $249
- **Cell:** $399
- **Table head:** 1,001–1,500 sq ft
- **Cell:** $299
- **Cell:** $499
- **Table head:** 1,501–2,000 sq ft
- **Cell:** $349
- **Cell:** $599
- **Table head:** 2,001–3,000 sq ft
- **Cell:** $449
- **Cell:** $749
- **Table head:** 3,001–5,000 sq ft
- **Cell:** $599
- **Cell:** $899
- **Table head:** Over 5,000 sq ft
- **Cell:** Custom quote
- **Text:** $199 minimum per visit. Repairs, new infill and heavy odor or stain treatments are quoted after we inspect. Prices as of September 2026.

#### 5. From quote to blown clean
- **Eyebrow:** How it works
- **H2:** From quote to blown clean
  - Step 1 — Tell us about your turf — Three taps and a phone number. Photos help.
  - Step 2 — Get your price — By the square foot, before any work starts.
  - Step 3 — We clean it — Deep cleaned, groomed and blown clean.

#### 6. Hi, I'm Brian.
- **Image:** /assets/img/putting-green-at-sunset-wide.jpg (alt: Backyard putting green at sunset)
- **Photo caption:** Blown clean. The finish on every job.
- **Eyebrow:** Who you'll talk to
- **H2:** Hi, I'm Brian.
- **Text:** I've spent 13 years building and caring for artificial turf and putting greens. I clean turf the way it was built: through the blades, backing and infill.
- **Text:** You get a clear price before any work starts, and I don't leave until it's blown clean.
- **Text:** Brian, owner of TIMELESS Turf Restoration

#### 7. Quick answers
- **Eyebrow:** Good to know
- **H2:** Quick answers
- **FAQ question:** How much will it cost?
- **Text:** It depends on size and condition. For yards up to 500 sq ft, an Essential Clean is $199 and a Premium Restoration is $299; the table on this page has every size. You get your exact price before any work starts.
- **FAQ question:** Essential Clean or Premium Restoration?
- **Text:** No pets and light dirt: Essential Clean. Dogs, odor, algae, or turf that has never been professionally cleaned: Premium Restoration. Not sure? Brian will recommend one.
- **FAQ question:** Can you get the dog smell out?
- **Text:** The smell lives in the infill, not the blades, so spraying the surface doesn't last. A Premium Restoration includes pet-odor and antimicrobial treatment. A yard that has gone a long time may need the heavy pet-odor add-on ($75–$150), quoted before any work.
- **FAQ question:** Is it safe for kids and dogs?
- **Text:** Yes. We use turf-safe, pet-safe products, and your turf is ready to use once it is dry.
- **FAQ question:** Where do you work?
- **Text:** Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.

#### 8. Ready for clean turf?
- **Eyebrow:** Takes 30 seconds
- **H2:** Ready for clean turf?
- **Text:** Three taps and your number. Brian comes back with a price.
- **Button:** Get my price
- **Button:** 303-349-2368

#### 9. Footer
- **Text:** © 2026 TIMELESS Turf Restoration · 303-349-2368 · timelessgrass@gmail.com · Visit our full site · Privacy

#### 10. Sticky mobile bar
- **Button:** Call
- **Button:** Get my price

### 1B. Follow-up page after the Instant Form: https://www.timelessturfrestoration.com/fb/clean/

Current copy, in page order:

- Browser title: You're in! Here's what happens next | TIMELESS Turf Restoration
- Meta description (link previews): Your request is in. Here's what happens next.

#### 1. Top bar
- **Image:** /assets/brand/logo.webp (alt: TIMELESS Turf Restoration)
- **Button:** Call or text 303-349-2368

#### 2. You're in! Here's what happens next.
- **Eyebrow:** Request received
- **H1:** You're in! Here's what happens next.
- **Text:** Brian, the owner, will call or text you from 303-349-2368 within one business day.
- **Button:** Save
- **Text:** Save the number so you know it's Brian when he calls.
- **Button:** Text Brian photos
- **Button:** Call now

#### 3. Get your price faster
- **Eyebrow:** Optional · 1 minute
- **H2:** Get your price faster
- **Text:** Text Brian a few photos. These help most:
- **H3:** One wide shot
- **Text:** The whole yard from a corner, so Brian can size it up.
- **H3:** The problem spots
- **Text:** Where the dogs go, where it smells, where it looks flat.
- **H3:** Rough size, if you know it
- **Text:** Length × width is plenty. A 20 × 25 ft yard is 500 sq ft.
- **Button:** Text photos to 303-349-2368

#### 4. From request to clean turf
- **Eyebrow:** What happens next
- **H2:** From request to clean turf
  - Within 1 business day — Brian reaches out — A quick call or text from 303-349-2368.
  - Optional — You send a few photos — Two or three photos help get your price right the first time.
  - Before any work — You get an upfront price — By the square foot, never by the hour.
  - Most yards: one visit — We clean it — Deep cleaned, groomed and blown clean.

#### 5. What one visit changes
- **Eyebrow:** Before & after
- **H2:** What one visit changes
- **Image:** /assets/img/jobs/dog-yard-turf-cleaned-before-after-640.webp (alt: Before and after: artificial turf dog yard with pet waste, then cleaned and brushed)
- **Photo caption:** Dog yard. Waste and debris cleared, fibers brushed back up.
- **Image:** /assets/img/jobs/side-yard-turf-power-brushed-before-after-640.webp (alt: Narrow side-yard artificial turf half cleaned, with a power brush resting on the finished section)
- **Photo caption:** Side yard, mid-clean. Brushed and cleared past the line. The front is how we found it.
- **Image:** /assets/img/jobs/front-lawn-turf-leaves-cleared-before-after-640.webp (alt: Before and after: artificial front lawn covered in dry leaves, then cleared and blown clean)
- **Photo caption:** Front lawn. Leaves and debris cleared, turf blown clean.

#### 6. No hourly rates. No surprises.
- **Eyebrow:** Upfront pricing
- **H2:** No hourly rates. No surprises.
- **Text:** Your exact price comes before any work starts.
- **Table caption:** Price by turf size
- **Table head:** Turf area
- **Table head:** Essential Clean
- **Table head:** Premium Restoration
- **Table head:** Up to 500 sq ft
- **Cell:** $199
- **Cell:** $299
- **Table head:** 501–1,000 sq ft
- **Cell:** $249
- **Cell:** $399
- **Table head:** 1,001–1,500 sq ft
- **Cell:** $299
- **Cell:** $499
- **Table head:** 1,501–2,000 sq ft
- **Cell:** $349
- **Cell:** $599
- **Table head:** 2,001–3,000 sq ft
- **Cell:** $449
- **Cell:** $749
- **Table head:** 3,001–5,000 sq ft
- **Cell:** $599
- **Cell:** $899
- **Table head:** Over 5,000 sq ft
- **Cell:** Custom quote
- **Text:** $199 minimum per visit. Repairs, new infill and heavy odor or stain treatments are quoted after we inspect. Prices as of September 2026.
- **Text:** Want it kept clean all year? Memberships start at $89/month.

#### 7. Hi, I'm Brian.
- **Image:** /assets/img/putting-green-at-sunset-wide.jpg (alt: Backyard putting green at sunset)
- **Photo caption:** Blown clean. The finish on every job.
- **Eyebrow:** Who you'll talk to
- **H2:** Hi, I'm Brian.
- **Text:** I've spent 13 years building and caring for artificial turf and putting greens. I clean turf the way it was built: through the blades, backing and infill.
- **Text:** You get a clear price before any work starts, and I don't leave until it's blown clean.
- **Text:** Brian, owner of TIMELESS Turf Restoration

#### 8. When should Brian call?
- **Eyebrow:** Optional
- **H2:** When should Brian call?
- **Text:** Pick a time and he'll aim for it.
- **Form question:** Best time to reach you? — answers: Morning · Afternoon · Evening · Text me instead
- **Form field:** name
- **Form field:** phone (required)
- **Button:** Send to Brian
- **Text:** Got it. Brian will aim for that time.
- **Text:** Something went wrong. Please call or text 303-349-2368.
- **Text:** We only use your number to match this with your request.

#### 9. Quick answers
- **Eyebrow:** Before Brian calls
- **H2:** Quick answers
- **FAQ question:** Is this going to be a pushy sales call?
- **Text:** No. Brian asks a few questions about your turf, gives you a price, and that's it.
- **FAQ question:** How much will it cost?
- **Text:** It depends on size and condition. For yards up to 500 sq ft, an Essential Clean is $199 and a Premium Restoration is $299; the table on this page has every size. You get your exact price before any work starts.
- **FAQ question:** Essential Clean or Premium Restoration?
- **Text:** No pets and light dirt: Essential Clean. Dogs, odor, algae, or turf that has never been professionally cleaned: Premium Restoration. Not sure? Brian will recommend one.
- **FAQ question:** Can you get the dog smell out?
- **Text:** The smell lives in the infill, not the blades, so spraying the surface doesn't last. A Premium Restoration includes pet-odor and antimicrobial treatment. A yard that has gone a long time may need the heavy pet-odor add-on ($75–$150), quoted before any work.
- **FAQ question:** Is it safe for kids and dogs?
- **Text:** Yes. We use turf-safe, pet-safe products, and your turf is ready to use once it is dry.
- **FAQ question:** Where do you work?
- **Text:** Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.

#### 10. Call or text anytime.
- **Eyebrow:** Questions before Brian calls?
- **H2:** Call or text anytime.
- **Text:** Send photos, ask about pricing, or pick a better time to talk.
- **Button:** Call 303-349-2368
- **Button:** Send a text

#### 11. Footer
- **Text:** © 2026 TIMELESS Turf Restoration · 303-349-2368 · timelessgrass@gmail.com · Visit our full site · Privacy

#### 12. Sticky mobile bar
- **Button:** Call
- **Button:** Text us photos

### 1C. Matching ad and Instant Form copy (message match)

#### Ad

- **Primary text A:** Dog smell, leaves, matted paths? Brian deep cleans artificial turf, treats pet odor and brushes it back up. You get your price by the square foot before any work starts. Yards up to 500 sq ft from $199.  `202 chars`
- **Primary text B:** Turf looking tired? Get it blown clean. Priced by the square foot, from $199 on the Grand Strand.  `97 chars`
- **Headline A:** Turf Cleaning From $199  `23 chars`
- **Headline B:** Get Your Turf Cleaning Price  `28 chars`
- **Description:** Priced upfront by the square foot  `33 chars`
- **Call to action:** Get quote

#### Instant Form

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

#### Website ad

- **Website URL:** https://www.timelessturfrestoration.com/lp/clean/
- **URL parameters:** as above
- **Landing page form:** asks the same 3 questions, then name, phone and ZIP, and posts to Make as form `lp-clean`.

---

## 2. Turf membership

**Who lands here:** Turf owners who want it kept clean all year without booking each visit, especially people whose dogs use the turf every day. Cold traffic from a feed ad; they are weighing a monthly plan against a one-time clean.

**Offer and proof:** Four visits a year with priority scheduling: Essential Care $89/mo, TIMELESS ELITE $139/mo (a Premium Restoration every quarter), Pet Turf ELITE $169/mo (multi-dog and daily-potty yards; its extra steps are not final, so do not describe them). Honest math already on the page: ELITE ($1,668/yr) costs less than four Premium Restorations only on yards over 1,000 sq ft.

### 2A. Landing page: https://www.timelessturfrestoration.com/lp/membership/

Current copy, in page order:

- Browser title: Turf Memberships From $89/mo | TIMELESS Turf Restoration
- Meta description (link previews): Four turf visits a year with priority scheduling, from $89 a month on the Grand Strand. Compare the plans and get matched to one.

#### 1. Top bar
- **Image:** /assets/brand/logo.webp (alt: TIMELESS Turf Restoration)
- **Button:** Call or text 303-349-2368

#### 2. Clean turf all year, handled for you
- **Eyebrow:** Turf memberships
- **H1:** Clean turf all year, handled for you
- **Text:** A membership puts four visits a year on Brian's schedule, and members get priority scheduling. Plans from $89 a month.
  - Four visits a year
  - Priority scheduling
  - From $89 a month
- **H2:** Find your plan
  - 1 · Your turf
  - 2 · Where to send it
- **Form question:** About how big is the turf? — answers: Up to 500 sq ft · 500–1,000 sq ft · 1,000–2,000 sq ft · 2,000–5,000 sq ft · Over 5,000 sq ft · Not sure
- **   hint:** when "Not sure" is picked: No problem. A 20 × 25 ft yard is 500 sq ft, and Brian can measure.
- **Form question:** Do dogs use it? — answers: No dogs · 1 dog · 2 or more dogs
- **   hint:** when "No dogs" is picked: Essential Care ($89/mo) covers light upkeep, four times a year.
- **   hint:** when "1 dog" is picked: TIMELESS ELITE ($139/mo) is a Premium Restoration every quarter, with pet-odor treatment.
- **   hint:** when "2 or more dogs" is picked: Pet Turf ELITE ($169/mo) is built for multi-dog and daily-potty yards.
- **Form question:** Which plan sounds right? — answers: Essential Care · $89/mo · TIMELESS ELITE · $139/mo · Pet Turf ELITE · $169/mo · Not sure yet
- **   hint:** when "Not sure yet" is picked: Brian will recommend one when he calls.
- **Button:** Next: where to send it
- **Form field:** name (required)
- **Form field:** phone (required)
- **Form field:** zip (required)
- **Button:** Find My Plan
- **Button:** Change my answers
- **Text:** Something went wrong. Please call or text 303-349-2368.
- **Text:** By submitting, you agree Brian may call or text you about your request. Privacy
- **H2:** You're in!
- **Text:** Brian will call or text you from 303-349-2368 within one business day.
- **Button:** Save the number
- **Button:** Text photos
- **Image:** /assets/img/jobs/dog-yard-turf-cleaned-before-after-640.webp (alt: Before and after: artificial turf dog yard with pet waste, then cleaned and brushed)
- **Photo caption:** Dog yard. Waste and debris cleared, fibers brushed back up.

#### 3. What one visit changes
- **Eyebrow:** Before & after
- **H2:** What one visit changes
- **Image:** /assets/img/jobs/dog-yard-turf-cleaned-before-after-640.webp (alt: Before and after: artificial turf dog yard with pet waste, then cleaned and brushed)
- **Photo caption:** Dog yard. Waste and debris cleared, fibers brushed back up.
- **Image:** /assets/img/jobs/side-yard-turf-power-brushed-before-after-640.webp (alt: Narrow side-yard artificial turf half cleaned, with a power brush resting on the finished section)
- **Photo caption:** Side yard, mid-clean. Brushed and cleared past the line. The front is how we found it.
- **Image:** /assets/img/jobs/front-lawn-turf-leaves-cleared-before-after-640.webp (alt: Before and after: artificial front lawn covered in dry leaves, then cleared and blown clean)
- **Photo caption:** Front lawn. Leaves and debris cleared, turf blown clean.

#### 4. Pick how much care it gets
- **Eyebrow:** Memberships
- **H2:** Pick how much care it gets
- **Text:** Four visits a year on every plan. Brian matches the plan to your yard and dogs.
- **Text:** 4 visits a year
- **H3:** Essential Care
- **Text:** Light maintenance, four times a year.
- **Text:** $89/mo — $1,068 a year
  - Blow-off & grooming
  - Light rinse
  - Basic odor treatment
  - Priority scheduling
- **Button:** Choose Essential Care
- **Label:** Deep clean every quarter
- **H3:** TIMELESS ELITE
- **Text:** A Premium Restoration every quarter.
- **Text:** $139/mo — $1,668 a year
  - Deep cleaning
  - Antimicrobial & pet-odor treatment
  - Grooming & brushing
  - Infill conditioning
  - Edge & seam inspection
  - Minor spot treatment
  - Priority scheduling
  - 10% off repairs & add-ons
- **Button:** Choose TIMELESS ELITE
- **H3:** Pet Turf ELITE
- **Text:** Built for multi-dog and daily-potty yards.
- **Text:** $169/mo — $2,028 a year
  - Everything in TIMELESS ELITE
- **Text:** The extra pet-yard steps in this plan are being finalized with Brian — ask when he calls.
- **Button:** Choose Pet Turf ELITE

#### 5. Membership or one-time clean?
- **Eyebrow:** Straight answer
- **H2:** Membership or one-time clean?
- **H3:** A membership fits if
  - Dogs use the turf every day
  - You want visits on the calendar without booking each one
  - The yard is over 1,000 sq ft: TIMELESS ELITE is $1,668 a year, less than four Premium Restorations ($1,996 at 1,001–1,500 sq ft)
- **H3:** One-time cleans fit if
  - It's a people-only yard with light use
  - The yard is under 1,000 sq ft and you're happy to book when it needs it (four Premium Restorations are $1,196 a year up to 500 sq ft)
  - You want one deep clean before deciding
- **Text:** Not sure? Pick "Not sure yet" in the form and Brian will recommend one.

#### 6. How a membership works
- **Eyebrow:** How it works
- **H2:** How a membership works
  - Step 1 — Brian matches a plan — By yard size, dogs and how you use it.
  - Step 2 — Four visits a year — Each one follows the plan you pick.
  - Step 3 — Members book first — Priority scheduling on every visit.

#### 7. Hi, I'm Brian.
- **Image:** /assets/img/putting-green-at-sunset-wide.jpg (alt: Backyard putting green at sunset)
- **Photo caption:** Blown clean. The finish on every job.
- **Eyebrow:** Who you'll talk to
- **H2:** Hi, I'm Brian.
- **Text:** I've spent 13 years building and caring for artificial turf and putting greens. I clean turf the way it was built: through the blades, backing and infill.
- **Text:** You get a clear price before any work starts, and I don't leave until it's blown clean.
- **Text:** Brian, owner of TIMELESS Turf Restoration

#### 8. Quick answers
- **Eyebrow:** Good to know
- **H2:** Quick answers
- **FAQ question:** What is the difference between the plans?
- **Text:** Essential Care ($89/mo) is light upkeep: blow-off & grooming, light rinse, basic odor treatment, four times a year. TIMELESS ELITE ($139/mo) is a Premium Restoration every quarter. Pet Turf ELITE ($169/mo) is built for multi-dog and daily-potty yards; Brian goes over what it adds when he calls.
- **FAQ question:** Is a membership cheaper than booking cleans?
- **Text:** On yards over 1,000 sq ft, yes: TIMELESS ELITE is $1,668 a year, less than four Premium Restorations ($1,996 at 1,001–1,500 sq ft). On smaller yards, four one-time visits cost less ($1,196 up to 500 sq ft), and a membership buys priority scheduling and never having to remember to book.
- **FAQ question:** How does billing work?
- **Text:** The monthly price is the four visits a year spread over twelve months. Brian walks you through the details before you sign up.
- **FAQ question:** Is it safe for kids and dogs?
- **Text:** Yes. We use turf-safe, pet-safe products, and your turf is ready to use once it is dry.
- **FAQ question:** Where do you work?
- **Text:** Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.

#### 9. Put your turf on a schedule
- **Eyebrow:** Takes 30 seconds
- **H2:** Put your turf on a schedule
- **Text:** Three taps and your number. Brian matches you with a plan.
- **Button:** Find my plan
- **Button:** 303-349-2368

#### 10. Footer
- **Text:** © 2026 TIMELESS Turf Restoration · 303-349-2368 · timelessgrass@gmail.com · Visit our full site · Privacy

#### 11. Sticky mobile bar
- **Button:** Call
- **Button:** Find my plan

### 2B. Follow-up page after the Instant Form: https://www.timelessturfrestoration.com/fb/membership/

Current copy, in page order:

- Browser title: You're on the list! Here's how it works | TIMELESS Turf Restoration
- Meta description (link previews): Your request is in. Here's what happens next.

#### 1. Top bar
- **Image:** /assets/brand/logo.webp (alt: TIMELESS Turf Restoration)
- **Button:** Call or text 303-349-2368

#### 2. You're on the list! Here's how it works.
- **Eyebrow:** Request received
- **H1:** You're on the list! Here's how it works.
- **Text:** Brian, the owner, will call or text you from 303-349-2368 within one business day.
- **Button:** Save
- **Text:** Save the number so you know it's Brian when he calls.
- **Button:** Text Brian photos
- **Button:** Call now

#### 3. Get your plan faster
- **Eyebrow:** Optional · 1 minute
- **H2:** Get your plan faster
- **Text:** Text Brian a few photos. These help most:
- **H3:** One wide shot
- **Text:** The whole yard, so Brian can size up the visits.
- **H3:** Where the dogs go
- **Text:** The corners and paths that get the most use.
- **H3:** Dates that matter
- **Text:** Guests coming, a party, a season you want it at its best.
- **Button:** Text photos to 303-349-2368

#### 4. From request to your first visit
- **Eyebrow:** What happens next
- **H2:** From request to your first visit
  - Within 1 business day — Brian reaches out — A quick call or text about your yard and dogs.
  - On the call — You pick a plan — Brian recommends one. You decide.
  - Four a year — Visits on the calendar — Each one follows your plan.
  - Every visit — Members book first — Priority scheduling for members.

#### 5. What one visit changes
- **Eyebrow:** Before & after
- **H2:** What one visit changes
- **Image:** /assets/img/jobs/dog-yard-turf-cleaned-before-after-640.webp (alt: Before and after: artificial turf dog yard with pet waste, then cleaned and brushed)
- **Photo caption:** Dog yard. Waste and debris cleared, fibers brushed back up.
- **Image:** /assets/img/jobs/side-yard-turf-power-brushed-before-after-640.webp (alt: Narrow side-yard artificial turf half cleaned, with a power brush resting on the finished section)
- **Photo caption:** Side yard, mid-clean. Brushed and cleared past the line. The front is how we found it.
- **Image:** /assets/img/jobs/front-lawn-turf-leaves-cleared-before-after-640.webp (alt: Before and after: artificial front lawn covered in dry leaves, then cleared and blown clean)
- **Photo caption:** Front lawn. Leaves and debris cleared, turf blown clean.

#### 6. Four visits a year on every plan
- **Eyebrow:** The plans
- **H2:** Four visits a year on every plan
- **Text:** Brian will recommend one when he calls. Already know? Tell him by text.
- **Text:** 4 visits a year
- **H3:** Essential Care
- **Text:** Light maintenance, four times a year.
- **Text:** $89/mo — $1,068 a year
  - Blow-off & grooming
  - Light rinse
  - Basic odor treatment
  - Priority scheduling
- **Button:** Ask about Essential Care
- **Label:** Deep clean every quarter
- **H3:** TIMELESS ELITE
- **Text:** A Premium Restoration every quarter.
- **Text:** $139/mo — $1,668 a year
  - Deep cleaning
  - Antimicrobial & pet-odor treatment
  - Grooming & brushing
  - Infill conditioning
  - Edge & seam inspection
  - Minor spot treatment
  - Priority scheduling
  - 10% off repairs & add-ons
- **Button:** Ask about TIMELESS ELITE
- **H3:** Pet Turf ELITE
- **Text:** Built for multi-dog and daily-potty yards.
- **Text:** $169/mo — $2,028 a year
  - Everything in TIMELESS ELITE
- **Text:** The extra pet-yard steps in this plan are being finalized with Brian — ask when he calls.
- **Button:** Ask about Pet Turf ELITE

#### 7. Hi, I'm Brian.
- **Image:** /assets/img/putting-green-at-sunset-wide.jpg (alt: Backyard putting green at sunset)
- **Photo caption:** Blown clean. The finish on every job.
- **Eyebrow:** Who you'll talk to
- **H2:** Hi, I'm Brian.
- **Text:** I've spent 13 years building and caring for artificial turf and putting greens. I clean turf the way it was built: through the blades, backing and infill.
- **Text:** You get a clear price before any work starts, and I don't leave until it's blown clean.
- **Text:** Brian, owner of TIMELESS Turf Restoration

#### 8. When should Brian call?
- **Eyebrow:** Optional
- **H2:** When should Brian call?
- **Text:** Pick a time and he'll aim for it.
- **Form question:** Best time to reach you? — answers: Morning · Afternoon · Evening · Text me instead
- **Form field:** name
- **Form field:** phone (required)
- **Button:** Send to Brian
- **Text:** Got it. Brian will aim for that time.
- **Text:** Something went wrong. Please call or text 303-349-2368.
- **Text:** We only use your number to match this with your request.

#### 9. Quick answers
- **Eyebrow:** Before Brian calls
- **H2:** Quick answers
- **FAQ question:** Is this going to be a pushy sales call?
- **Text:** No. Brian asks a few questions about your turf, gives you a price, and that's it.
- **FAQ question:** What is the difference between the plans?
- **Text:** Essential Care ($89/mo) is light upkeep: blow-off & grooming, light rinse, basic odor treatment, four times a year. TIMELESS ELITE ($139/mo) is a Premium Restoration every quarter. Pet Turf ELITE ($169/mo) is built for multi-dog and daily-potty yards; Brian goes over what it adds when he calls.
- **FAQ question:** Is a membership cheaper than booking cleans?
- **Text:** On yards over 1,000 sq ft, yes: TIMELESS ELITE is $1,668 a year, less than four Premium Restorations ($1,996 at 1,001–1,500 sq ft). On smaller yards, four one-time visits cost less ($1,196 up to 500 sq ft), and a membership buys priority scheduling and never having to remember to book.
- **FAQ question:** How does billing work?
- **Text:** The monthly price is the four visits a year spread over twelve months. Brian walks you through the details before you sign up.
- **FAQ question:** Is it safe for kids and dogs?
- **Text:** Yes. We use turf-safe, pet-safe products, and your turf is ready to use once it is dry.
- **FAQ question:** Where do you work?
- **Text:** Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.

#### 10. Call or text anytime.
- **Eyebrow:** Questions before Brian calls?
- **H2:** Call or text anytime.
- **Text:** Send photos, ask about pricing, or pick a better time to talk.
- **Button:** Call 303-349-2368
- **Button:** Send a text

#### 11. Footer
- **Text:** © 2026 TIMELESS Turf Restoration · 303-349-2368 · timelessgrass@gmail.com · Visit our full site · Privacy

#### 12. Sticky mobile bar
- **Button:** Call
- **Button:** Text us photos

### 2C. Matching ad and Instant Form copy (message match)

#### Ad

- **Primary text A:** Clean turf all year without remembering to book it. A membership brings four visits a year and priority scheduling. Plans from $89 a month on the Grand Strand.  `159 chars`
- **Primary text B:** Dogs on the turf every day? TIMELESS ELITE is a Premium Restoration every quarter, with pet-odor and antimicrobial treatment. $139 a month.  `139 chars`
- **Headline A:** Turf Memberships From $89/mo  `28 chars`
- **Headline B:** Clean Turf, Four Times a Year  `29 chars`
- **Description:** Priority scheduling for members  `31 chars`
- **Call to action:** Get quote

#### Instant Form

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

#### Website ad

- **Website URL:** https://www.timelessturfrestoration.com/lp/membership/
- **URL parameters:** as above
- **Landing page form:** asks the same 3 questions, then name, phone and ZIP, and posts to Make as form `lp-membership`.

---

## 3. Putting green restoration

**Who lands here:** Owners of an existing synthetic putting green: backyard greens first, plus HOA/community and golf-course or business greens. The green rolls slow or bumpy, is dirty, or has seam/cup/edge issues. This is RESTORATION of a green they already have, never installation of a new one.

**Offer and proof:** A restoration quote after a look at the green. Typical backyard green restoration runs $299–$899. HOA, community and golf/business greens start with a site walk. The work: blow and clear, brush, clean cups and fringe, top-dress with fresh green sand, roll, check speed; seams, cups, edges and drainage get checked.

### 3A. Landing page: https://www.timelessturfrestoration.com/lp/putting-green/

Current copy, in page order:

- Browser title: Putting Green Restoration | TIMELESS Turf Restoration
- Meta description (link previews): Slow or bumpy synthetic green? Cleared, brushed, top-dressed, rolled and speed-checked on the Grand Strand. Typical backyard greens $299–$899.

#### 1. Top bar
- **Image:** /assets/brand/logo.webp (alt: TIMELESS Turf Restoration)
- **Button:** Call or text 303-349-2368

#### 2. Make your green roll true again
- **Eyebrow:** Putting green restoration
- **H1:** Make your green roll true again
- **Text:** Brian has built and cared for synthetic greens for 13 years. He clears, brushes, top-dresses and rolls your green, then checks the speed.
  - Typical greens $299–$899
  - Seams, cups and edges checked
  - 13 years building greens
- **H2:** Get your green quote
  - 1 · Your green
  - 2 · Where to send it
- **Form question:** How big is the green? — answers: Under 300 sq ft · 300–600 sq ft · 600–1,000 sq ft · Over 1,000 sq ft · Not sure
- **   hint:** when "Under 300 sq ft" is picked: Typical backyard greens run $299–$899. Brian quotes yours after a look.
- **   hint:** when "300–600 sq ft" is picked: Typical backyard greens run $299–$899. Brian quotes yours after a look.
- **   hint:** when "600–1,000 sq ft" is picked: Typical backyard greens run $299–$899. Brian quotes yours after a look.
- **   hint:** when "Over 1,000 sq ft" is picked: Typical backyard greens run $299–$899. Brian quotes yours after a look.
- **   hint:** when "Not sure" is picked: No problem. Length × width is close enough.
- **Form question:** What is the green doing? — answers: Rolling slow · Bumpy or breaking oddly · Dirty, leaves or needles · Seams, cups or edges · Just due for service
- **   hint:** when "Seams, cups or edges" is picked: Brian checks seams, cups and edges on every green.
- **Form question:** Where is the green? — answers: Backyard · HOA or community · Golf course or business
- **   hint:** when "HOA or community" is picked: Community and business greens start with a site walk.
- **   hint:** when "Golf course or business" is picked: Community and business greens start with a site walk.
- **Button:** Next: where to send it
- **Form field:** name (required)
- **Form field:** phone (required)
- **Form field:** zip (required)
- **Button:** Get My Green Quote
- **Button:** Change my answers
- **Text:** Something went wrong. Please call or text 303-349-2368.
- **Text:** By submitting, you agree Brian may call or text you about your request. Privacy
- **H2:** You're in!
- **Text:** Brian will call or text you from 303-349-2368 within one business day.
- **Button:** Save the number
- **Button:** Text photos
- **Image:** /assets/img/putting-green-fire-pit-stone-wall.jpg (alt: Backyard putting green beside a stone wall and fire pit)

#### 3. Three things steal the roll
- **Eyebrow:** Why greens slow down
- **H2:** Three things steal the roll
- **H3:** Sand drifts
- **Text:** It washes off the high side and piles up on the low side, so the ball drifts.
- **H3:** Debris softens it
- **Text:** Leaves, pine needles and pollen soften the surface and slow every putt.
- **H3:** Sand packs down
- **Text:** Dirty sand compacts unevenly, so the roll turns inconsistent.

#### 4. Six steps back to a true roll
- **Eyebrow:** The restoration
- **H2:** Six steps back to a true roll
  - Step 1 — Blow and clear — Green, fringe and collar, debris-free.
  - Step 2 — Brush — Lift the fibers and loosen compacted sand.
  - Step 3 — Clean cups and fringe — Cups cleared, the fringe cleaned like a lawn.
  - Step 4 — Top-dress — Fresh green sand to an even depth, brushed in.
  - Step 5 — Roll — Compact and true it, in more than one direction.
  - Step 6 — Check the speed — Adjust sand and rolling until it runs right.

#### 5. What a green costs to restore
- **Image:** /assets/img/backyard-putting-green-landscaped-boulders.jpg (alt: Backyard synthetic putting green set among landscaped boulders)
- **Photo caption:** Checked every visit. Seams, cups, edges and drainage.
- **Eyebrow:** Honest pricing
- **H2:** What a green costs to restore
- **Text:** Greens are quoted after a look, because size, slope, cup count and sand condition all move the price. Typical backyard greens run $299–$899.
  - Debris cleared from green, fringe and collar
  - Brushed and loosened
  - Cups and fringe cleaned
  - Green-sand top-dress to depth
  - Rolled and speed-checked
  - Seam, edge and drainage check
- **Text:** A green that puddles after rain has a base problem sand can't fix. Brian will tell you, and our sister company builds greens.
- **Button:** Get my green quote

#### 6. Hi, I'm Brian.
- **Image:** /assets/img/putting-green-at-sunset-wide.jpg (alt: Backyard putting green at sunset)
- **Photo caption:** Blown clean. The finish on every job.
- **Eyebrow:** Who you'll talk to
- **H2:** Hi, I'm Brian.
- **Text:** I've spent 13 years building and caring for artificial turf and putting greens. I restore a green the way it was built: sand, brush and roller, until it runs right.
- **Text:** You get a clear price before any work starts, and I don't leave until it's blown clean.
- **Text:** Brian, owner of TIMELESS Turf Restoration

#### 7. Quick answers
- **Eyebrow:** Good to know
- **H2:** Quick answers
- **FAQ question:** How much does putting green restoration cost?
- **Text:** Greens are quoted after a look, because size, slope, cups and sand condition all move the price. Typical backyard greens run $299–$899.
- **FAQ question:** How fast can you make my green?
- **Text:** Most backyard nylon or polyethylene greens reach a firm, club-practice roll — the ceiling depends on the turf product. Tell us the speed you want.
- **FAQ question:** How often should a putting green be top-dressed?
- **Text:** Once a year for most home greens, brushed in between. Greens under trees or with heavy use may need it twice.
- **FAQ question:** Can you fix a green that puddles?
- **Text:** No — cleaning and top-dressing won't fix a settled or poorly built base. We can diagnose it and, through our sister company, rebuild the section.
- **FAQ question:** Do you work on community and golf greens?
- **Text:** Yes. HOA, community and golf-course greens start with a site walk, then a quote.
- **FAQ question:** Where do you work?
- **Text:** Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.

#### 8. Get your green rolling true
- **Eyebrow:** Takes 30 seconds
- **H2:** Get your green rolling true
- **Text:** Three taps and your number. Brian comes back with a quote.
- **Button:** Get my green quote
- **Button:** 303-349-2368

#### 9. Footer
- **Text:** © 2026 TIMELESS Turf Restoration · 303-349-2368 · timelessgrass@gmail.com · Visit our full site · Privacy

#### 10. Sticky mobile bar
- **Button:** Call
- **Button:** Get my green quote

### 3B. Follow-up page after the Instant Form: https://www.timelessturfrestoration.com/fb/putting-green/

Current copy, in page order:

- Browser title: Got it! Here's what happens next | TIMELESS Turf Restoration
- Meta description (link previews): Your request is in. Here's what happens next.

#### 1. Top bar
- **Image:** /assets/brand/logo.webp (alt: TIMELESS Turf Restoration)
- **Button:** Call or text 303-349-2368

#### 2. Got it! Here's what happens next.
- **Eyebrow:** Request received
- **H1:** Got it! Here's what happens next.
- **Text:** Brian, the owner, will call or text you from 303-349-2368 within one business day.
- **Button:** Save
- **Text:** Save the number so you know it's Brian when he calls.
- **Button:** Text Brian photos
- **Button:** Call now

#### 3. Get your quote faster
- **Eyebrow:** Optional · 1 minute
- **H2:** Get your quote faster
- **Text:** Text Brian a few photos. These help most:
- **H3:** The whole green
- **Text:** From behind the longest putt, so Brian sees the size and slope.
- **H3:** Cups, fringe and seams
- **Text:** Close-ups of the cups, the edges and any seam that has lifted.
- **H3:** The slow or bumpy spot
- **Text:** A low shot across the surface shows where sand has washed off or piled up.
- **Button:** Text photos to 303-349-2368

#### 4. From request to a true roll
- **Eyebrow:** What happens next
- **H2:** From request to a true roll
  - Within 1 business day — Brian reaches out — A quick call or text about your green.
  - Optional — You send photos — The whole green, the cups and the slow spot.
  - After a look — You get a quote — Typical backyard greens run $299–$899.
  - Step 4 — We restore it — Brushed, top-dressed, rolled and speed-checked.

#### 5. Six steps back to a true roll
- **Eyebrow:** The restoration
- **H2:** Six steps back to a true roll
  - Step 1 — Blow and clear — Green, fringe and collar, debris-free.
  - Step 2 — Brush — Lift the fibers and loosen compacted sand.
  - Step 3 — Clean cups and fringe — Cups cleared, the fringe cleaned like a lawn.
  - Step 4 — Top-dress — Fresh green sand to an even depth, brushed in.
  - Step 5 — Roll — Compact and true it, in more than one direction.
  - Step 6 — Check the speed — Adjust sand and rolling until it runs right.

#### 6. Hi, I'm Brian.
- **Image:** /assets/img/putting-green-at-sunset-wide.jpg (alt: Backyard putting green at sunset)
- **Photo caption:** Blown clean. The finish on every job.
- **Eyebrow:** Who you'll talk to
- **H2:** Hi, I'm Brian.
- **Text:** I've spent 13 years building and caring for artificial turf and putting greens. I restore a green the way it was built: sand, brush and roller, until it runs right.
- **Text:** You get a clear price before any work starts, and I don't leave until it's blown clean.
- **Text:** Brian, owner of TIMELESS Turf Restoration

#### 7. When should Brian call?
- **Eyebrow:** Optional
- **H2:** When should Brian call?
- **Text:** Pick a time and he'll aim for it.
- **Form question:** Best time to reach you? — answers: Morning · Afternoon · Evening · Text me instead
- **Form field:** name
- **Form field:** phone (required)
- **Button:** Send to Brian
- **Text:** Got it. Brian will aim for that time.
- **Text:** Something went wrong. Please call or text 303-349-2368.
- **Text:** We only use your number to match this with your request.

#### 8. Quick answers
- **Eyebrow:** Before Brian calls
- **H2:** Quick answers
- **FAQ question:** Is this going to be a pushy sales call?
- **Text:** No. Brian asks a few questions about your turf, gives you a price, and that's it.
- **FAQ question:** How much does putting green restoration cost?
- **Text:** Greens are quoted after a look, because size, slope, cups and sand condition all move the price. Typical backyard greens run $299–$899.
- **FAQ question:** How fast can you make my green?
- **Text:** Most backyard nylon or polyethylene greens reach a firm, club-practice roll — the ceiling depends on the turf product. Tell us the speed you want.
- **FAQ question:** How often should a putting green be top-dressed?
- **Text:** Once a year for most home greens, brushed in between. Greens under trees or with heavy use may need it twice.
- **FAQ question:** Can you fix a green that puddles?
- **Text:** No — cleaning and top-dressing won't fix a settled or poorly built base. We can diagnose it and, through our sister company, rebuild the section.
- **FAQ question:** Do you work on community and golf greens?
- **Text:** Yes. HOA, community and golf-course greens start with a site walk, then a quote.
- **FAQ question:** Where do you work?
- **Text:** Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.

#### 9. Call or text anytime.
- **Eyebrow:** Questions before Brian calls?
- **H2:** Call or text anytime.
- **Text:** Send photos, ask about pricing, or pick a better time to talk.
- **Button:** Call 303-349-2368
- **Button:** Send a text

#### 10. Footer
- **Text:** © 2026 TIMELESS Turf Restoration · 303-349-2368 · timelessgrass@gmail.com · Visit our full site · Privacy

#### 11. Sticky mobile bar
- **Button:** Call
- **Button:** Text us photos

### 3C. Matching ad and Instant Form copy (message match)

#### Ad

- **Primary text A:** Green rolling slow or bumpy? Brian has built and cared for putting greens for 13 years. He clears and brushes the green, cleans the cups and fringe, top-dresses it with fresh sand and rolls it true.  `198 chars`
- **Primary text B:** A synthetic green is only as good as its roll. Get yours brushed, top-dressed, rolled and speed-checked on the Grand Strand.  `124 chars`
- **Headline A:** Make Your Green Roll True Again  `31 chars`
- **Headline B:** Putting Green Restoration  `25 chars`
- **Description:** 13 years building and caring for greens  `39 chars`
- **Call to action:** Get quote

#### Instant Form

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

#### Website ad

- **Website URL:** https://www.timelessturfrestoration.com/lp/putting-green/
- **URL parameters:** as above
- **Landing page form:** asks the same 3 questions, then name, phone and ZIP, and posts to Make as form `lp-putting-green`.
