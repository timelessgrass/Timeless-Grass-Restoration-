# Questions for Brian

Last updated 2026-09-14 (campaign items added in section 6). For whoever is working on the TIMELESS Turf Restoration site.

The site states every item below as fact, but nothing on file backs it up: not the 2026-08-30 planning doc (prices and plan contents), not the 2026-09-04 call notes cited in `src/data/site.ts`, and not `research/WRITER-BRIEF.md`. While `PRELAUNCH = true` every page is noindex, so the copy can stay as it is for now. Each item needs an answer before launch.

How to use this list:

- Ask the questions and write the answer under each one, with the date.
- Then change the copy. Each item gives search phrases instead of line numbers, because line numbers drift. `grep -rn "<phrase>" src social` finds every place.
- Run `npm run build && python3 scripts/audit.py` after any change.
- Delete an item once the site matches the answer.

Already settled, no need to ask: prices and what each plan includes (planning doc), 13 years in turf (call), the service area from Shallotte to Burgess, and the blown-clean finish standard.

## 1. Before launch: name and contact details

1. **Business name.** Is "TIMELESS Turf Restoration" final? It is the working name from the 2026-09-04 call. Facebook required "Timeless Turf Restoration" for the Page name because it rejects all-caps words.
   - Change in: `brand.name` in `src/data/site.ts`.
   - Answer:
2. **Phone.** Will he get a separate local 843 number for this brand? The site uses 303-349-2368, the only number on file. The Google Business Profile and the site need to match exactly.
   - Change in: `brand.phone`, `phoneHref` and `smsHref` in `src/data/site.ts`, plus the Facebook kit.
   - Answer:
3. **Email.** The site lists timelessgrass@gmail.com, the Grass & Greens address. Keep it, or set up one for this brand?
   - Change in: `brand.email`.
   - Answer:
4. **Domain.** Settled 2026-09-14: timelessturfrestoration.com is live on Netlify (www redirects to it), and `SITE_URL` matches.
5. **Google Business Profile.** Who creates it, and which address verifies it? It should be a service-area business with the address hidden. What business hours should it list? The site lists no hours today.
   - Answer:
6. **Start year.** The About page says "Owner-operated since 2024". Is that right?
   - Change in: `brand.founded`.
   - Answer:
7. **Who does the work.** The homepage says "Every job is done by Brian", but other pages talk about "the crew": the gated-community pages, the estates page and the model homes page. Is it just Brian, or Brian plus helpers?
   - Search: `Every job is done by Brian`, `crew`.
   - Answer:

## 2. Memberships

8. **Cancellation.** The site says "cancel any time after the current quarter's visit" with "no long contract". Is that the policy? Is notice needed? What happens if someone cancels right after their first visit, having paid one month?
   - Search: `current quarter`, `no long contract`.
   - Appears on: /pricing/, the membership comparison FAQ, and the Facebook kit. For the kit, change the README caption and the post 6 image (`social/facebook/src/posts.html`, then re-render with `social/facebook/src/render.sh`).
   - Answer:
9. **What the ELITE 10% covers.** `site.ts` says "10% off repairs & add-ons", but the writer brief says "10% off add-ons". Do repairs count?
   - Search: `10% off`. The comparison page works an example on a $250 seam repair.
   - Answer:
10. **Pet Turf ELITE ($169/mo).** What does it add over TIMELESS ELITE? Every page says the extra steps are "being finalized".
    - Search: `being finalized`.
    - Change in: `memberships[2]` in `site.ts`.
    - Answer:
11. **Essential Care visits.** The plan lists blow-off and grooming, a light rinse and basic odor treatment. Several pages say power brushing is part of "every visit we run". Does an Essential Care visit include power brushing?
    - Search: `every visit we run`.
    - Answer:
12. **Billing.** How is the monthly charge taken (card on file, invoice)? Is the first month charged at sign-up? The site only says "billed monthly". This doesn't affect the copy, but it has to be settled before anyone signs up.
    - Answer:

## 3. Promises the site makes about every job

13. **Trip charge.** The site says "No trip charge inside our service area", including Burgess, Little River and the SC 9 corridor. Outside the Grand Strand it says "we quote travel honestly or refer you to someone closer". Is that true from Shallotte to Burgess, and inland to Conway, Loris and Longs?
    - Search: `trip charge`.
    - Answer:
14. **Time on site.** The cost guide explains the $199 minimum with "about two hours on site". Is that accurate?
    - Search: `two hours on site`.
    - Answer:
15. **How fast he replies.** All six ad pages (/lp/clean/, /lp/membership/, /lp/putting-green/ and the /fb/ follow-ups) say Brian will call or text "within one business day". Can he commit to that? The Instant Forms avoid the claim. Needed before ads run.
    - Change in: `REPLY_TIME` in `src/data/campaigns.ts`.
    - Answer:
16. **Free quotes and price changes.** Please confirm all three of these:
    - The header, the call-to-action band and the quote page promise a "Free, no-obligation quote". Is the on-site visit free if the customer says no?
    - The pricing page says the price "does not change unless the area does".
    - Add-ons are never sold on the phone, and any change is approved before the work.
    - Search: `no-obligation`, `does not change unless`, `sell add-ons on the phone`, `rather than adjusting the invoice`.
    - Answer:
17. **Products, dry time and safety.** The site says the products are "labeled for use on pet turf and are safe once the surface is dry". It also says turf is "dry enough to walk on the same day", and that a rental yard is "dry and usable within a few hours". Which enzyme, antimicrobial and algaecide products does he use, and what re-entry time do their labels give? These are safety claims, so they need to match the labels.
    - Search: `safe once the surface is dry`, `pet-safe`, `walk on the same day`, `usable within a few hours`. The ad pages answer "Is it safe for kids and dogs?" with yes (`SAFE` in `src/data/campaigns.ts`), so this is needed before ads run.
    - Answer:
18. **Photos and written records.** The planning doc includes before-and-after photos with every Premium Restoration. The site promises more than that:
    - a "written note of what was done" with every Premium Restoration (the pressure-washing warranty guide)
    - for dog daycares, dog parks, schools and daycares, and vet clinics, a dated written record after every visit of what was applied, when, and the dwell time
    - documentation of storm cleanup visits for a town's short-term rental registration program
    - green speed readings logged and left with golf pro shops
    - photos sent after each visit to home-watch and second-home clients

    Which of these does he do, or want to do? How are photos delivered: text or email?
    - Search: `written note`, `of what was applied`, `short-term rental registration`, `speed reading`, `dated photos`.
    - Answer:
19. **Storm checks.** Can he promise this capacity in a busy storm week?
    - The pages for resorts and condos, estates, second homes and home watch say properties on a standing schedule get a post-storm check automatically, without being asked.
    - The Ocean Isle Beach pages say he runs "scheduled sweeps after named storms".
    - The vacation rental page says "we can usually get to a portfolio within a few days".
    - Search: `without waiting`, `scheduled sweep`, `within a few days`, `every property on our schedule`.
    - Answer:
20. **Brunswick County scheduling.** The rental turnover checklist says "we batch Brunswick County visits, so book early". Is that true?
    - Search: `batch Brunswick`.
    - Answer:
21. **Insurance and licenses.** Every commercial page answers "Are you licensed and insured?" with "Ask us and we will send what you need for your file", which implies the paperwork exists. The site will not claim licensed or insured either way (the audit blocks it), but that FAQ answer has to be true.
    - Does he carry general liability insurance, and can he send a certificate?
    - Does the brand have the business licenses it needs in Horry County, Brunswick County and the towns?
    - Does applying antimicrobials and algaecides for hire need a pesticide applicator license in SC or NC, and does he have one?
    - Search: `licensed and insured`.
    - Answer:

## 4. Commercial and partner work

22. **Standing programs.** The commercial pages offer quoted standing programs for:
    - HOA common areas, as one annual budget figure
    - dog daycares, monthly or quarterly
    - property-manager portfolios, on "one schedule and one invoice"
    - schools, parks, campgrounds, attractions and model homes
    - golf practice greens, mini golf and simulator venues

    The pricing page adds: "We also quote HOA common areas, dog daycares and rental portfolios as a group." Does he want this work? Is there a group or volume rate? Does he take jobs over 5,000 sq ft, and are memberships over 5,000 sq ft quoted?
    - Search: `standing schedule`, `one invoice`, `as a group`, `annual figure`.
    - Answer:
23. **White-label for installers.** The installer partner page offers to run maintenance "white-label so your name stays on the relationship". Is he OK with that?
    - Search: `white-label`.
    - Answer:
24. **Free help for HOA boards.** The HOA spec guide says "We will also sit with a board and turn a landscaper's contract into this spec at no charge." Keep the offer?
    - Search: `at no charge`.
    - Answer:

## 5. What to ask him to send

25. **Before-and-after photos from his own restoration jobs**, with each customer's OK to use them: a pet corner, a matted path, an algae strip and a putting green top-dress. The site has no before-and-after pairs from restoration jobs yet. Real pairs replace the "our work" note on the homepage (see "Adding content" in the README).
    - Answer:

## 6. Facebook campaign (added 2026-09-14)

These are in the ad copy and the Instant Forms. A published Instant Form can't be edited, so ask before the forms go live.

26. **Putting green restoration price.** The ad, the Instant Form intro and the /lp/putting-green/ hints say a typical backyard green runs $299–$899. That range is the Premium Restoration turf bands (up to 500 sq ft through 3,001–5,000 sq ft), not a green price from the planning doc. Is it right, with fresh sand included?
    - Change in: `GREEN_RANGE` in `src/data/campaigns.ts`, then rerun `node scripts/campaign-kit.mjs`.
    - Answer:
27. **What a green restoration includes.** The ad and Instant Form say greens are cleared and brushed, cups and fringe cleaned, top-dressed with fresh sand, rolled and "speed-checked". Does every restoration include all five, including a speed check?
    - Search: `speed-checked`, `cleans the cups`.
    - Answer:
28. **Community and golf greens.** The putting green form offers "HOA or community" and "Golf course or business". Will he quote those?
    - Answer:
29. **Photos from Grass & Greens.** Every service card and hero photo on this site came from the Grass & Greens site (install photos). OK to use them for the cleaning brand until cleaning photos arrive?
    - Answer:
30. **Photo of Brian** for the About page (optional).
    - Answer:
