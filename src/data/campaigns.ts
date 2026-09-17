/**
 * Facebook lead campaign (September 2026). Three ad angles, and each one has:
 *  - an Instant Form: the copy to paste into Meta Ads Manager is in marketing/facebook-lead-ads.md,
 *    generated from this file by `node scripts/campaign-kit.mjs`
 *  - a landing page with a two-step form, /lp/<slug>/, for ads that send people to the website
 *  - a follow-up page, /fb/<slug>/, linked from the Instant Form's completion screen
 *
 * The landing-page form asks the replacement Instant Form's questions with the same answers, so a lead reaches
 * Brian in the same shape wherever it came from. Change a question here and both stay in step (then regenerate
 * the kit; a published Instant Form can't be edited, so a changed form is a new form in Ads Manager).
 *
 * Claims: nothing here states anything research/QUESTIONS-FOR-BRIAN.md still has open (reply time, product
 * safety, cancellation terms, what ELITE's 10% covers, Pet Turf ELITE extras, trip charges).
 */
import { brand, area, pricing as P, money, SITE_URL } from './site';
import { SERVICES } from './services';

export type Choice = {
  label: string;
  /** shown under the question on the landing page when picked (may contain <b>) */ hint?: string;
  /** legacy published Instant Form wording; automation aliases it to label, but V2 always uses label */ form?: string;
};
export type Question = { name: string; label: string; choices: Choice[] };
export type Faq = { q: string; a: string };
export type Tip = { icon: string; title: string; text: string };
export type Angle = {
  slug: 'clean' | 'membership' | 'putting-green';
  name: string;
  questions: Question[];
  /** Ad copy that matches the form and page, for Ads Manager. */
  ad: { primary: string[]; headlines: string[]; description: string };
  form: { name: string; intro: { headline: string; bullets: string[] }; questionsIntro: string; ending: { headline: string; description: string; button: string } };
  lp: {
    title: string; description: string; kicker: string; h1: [string, string]; lede: string;
    ticks: { icon: string; label: string }[];
    image: { src: string; srcset?: string; width: number; height: number; alt: string; caption?: string };
    formTitle: string;
  };
  fb: { title: string; h1: [string, string]; tips: Tip[]; sms: string; photoCta: string };
  faq: Faq[];
};

const R = P.rows;
const M = P.memberships;
const years = brand.ownerYears;
const owner = brand.owner;
const range = (key: 'essential' | 'premium', a: number, b = a) => (a === b ? money(R[a][key]!) : `${money(R[a][key]!)}–${money(R[b][key]!)}`);
const sizeHint = (a: number, b = a) => `Ballpark: ${P.essential.name} <b>${range('essential', a, b)}</b> · ${P.premium.name} <b>${range('premium', a, b)}</b>`;
/** Typical backyard green, per the putting green cost guide: the Premium Restoration bands. */
export const GREEN_RANGE = `${money(R[0].premium!)}–${money(R[5].premium!)}`;
const jobImg = (file: string) => ({ src: `/assets/img/jobs/${file}-640.webp`, srcset: `/assets/img/jobs/${file}-640.webp 640w, /assets/img/jobs/${file}.webp 1080w`, width: 1080, height: 1080 });

/** V2 uses the non-overlapping labels. `form` preserves the 2026-09-14 forms' overlapping answer values so the
 * Make router can continue to normalize old and new leads. */
const SIZE_CHOICES: Choice[] = [
  { label: 'Up to 500 sq ft' },
  { label: '501–1,000 sq ft', form: '500–1,000 sq ft' },
  { label: '1,001–2,000 sq ft', form: '1,000–2,000 sq ft' },
  { label: '2,001–5,000 sq ft', form: '2,000–5,000 sq ft' },
  { label: 'Over 5,000 sq ft' },
  { label: 'Not sure' },
];
const NOT_SURE = `No problem. A 20 × 25 ft yard is 500 sq ft, and ${owner} can measure.`;

const WHERE: Faq = { q: 'Where do you work?', a: `${area.line}. That includes Myrtle Beach, North Myrtle Beach, Carolina Forest and Little River.` };
/** Follow-up pages only: the worry right after handing over a phone number. */
export const PUSHY: Faq = { q: 'Is this going to be a pushy sales call?', a: `No. ${owner} asks a few questions about your turf, gives you a price, and that's it.` };

const greenService = SERVICES.find((s) => s.slug === 'putting-green-restoration')!;

export const ANGLES: Angle[] = [
  {
    slug: 'clean',
    name: 'Turf cleaning quote',
    questions: [
      { name: 'issue', label: 'What bothers you most?', choices: ['Pet odor', 'Dirty, dull or matted', 'Weeds, leaves or debris', 'Just due for a clean'].map((label) => ({ label })) },
      { name: 'size', label: 'About how big is the turf?', choices: SIZE_CHOICES.map((c, i) => ({ ...c, hint: [sizeHint(0), sizeHint(1), sizeHint(2, 3), sizeHint(4, 5), `Big yard. ${owner} prices it after a look.`, NOT_SURE][i] })) },
    ],
    ad: {
      primary: [
        `Dog smell, leaves, matted paths? ${owner} deep cleans artificial turf, treats pet odor and brushes it back up. You get your price by the square foot before any work starts. Yards up to 500 sq ft from ${money(R[0].essential!)}.`,
        `Turf looking tired? Get it blown clean. Priced by the square foot, from ${money(R[0].essential!)} on ${area.name}.`,
      ],
      headlines: [`Turf Cleaning From ${money(R[0].essential!)}`, 'Get Your Turf Cleaning Price'],
      description: 'Priced upfront by the square foot',
    },
    form: {
      name: 'TTR · Turf cleaning quote · V2',
      intro: { headline: 'Get your free turf cleaning quote', bullets: ['Pet odor, matted fibers, leaves and buildup', 'Deep cleaning, odor treatment and power brushing', `Prices start at ${money(R[0].essential!)} for turf up to 500 sq ft`] },
      questionsIntro: `Two quick taps help ${owner} understand the job before he calls or texts.`,
      ending: { headline: `${owner} has your turf request.`, description: `He'll call or text from ${brand.phone} to discuss the right clean and your price. Tap below to save his number and see which photos help.`, button: 'See next steps' },
    },
    lp: {
      title: `Turf Cleaning From ${money(R[0].essential!)} | ${brand.name}`,
      description: `Artificial turf deep cleaned, pet odor treated and brushed back up on ${area.name}. Priced by the square foot before any work starts.`,
      kicker: `${area.short} turf cleaning`,
      h1: ['Get your turf', 'clean again'],
      lede: 'Deep cleaning through the fibers and infill, pet-odor treatment when needed, and power brushing to lift matted turf. Pick two answers for a quote.',
      ticks: [{ icon: 'tag', label: `Up to 500 sq ft from ${money(R[0].essential!)}` }, { icon: 'ruler', label: 'By the square foot, never hourly' }, { icon: 'award', label: `${years} years in turf` }],
      image: { ...jobImg('side-yard-turf-power-brushed-before-after'), alt: 'Side-yard artificial turf half cleaned, with a power brush resting on the finished section', caption: 'Mid-clean. Brushed past the line; the front is how we found it.' },
      formTitle: 'Get your price',
    },
    fb: {
      title: `Turf-cleaning request received | ${brand.name}`,
      h1: ['Your turf-cleaning request', ' is in.'],
      tips: [
        { icon: 'camera', title: 'One wide shot', text: `The whole yard from a corner, so ${owner} can size it up.` },
        { icon: 'paw', title: 'The problem spots', text: 'Where the dogs go, where it smells, where it looks flat.' },
        { icon: 'ruler', title: 'Rough size, if you know it', text: 'Length × width is plenty. A 20 × 25 ft yard is 500 sq ft.' },
      ],
      sms: `Hi ${owner} — I just requested a turf-cleaning quote. Here are the whole yard and the problem spots. Rough size:`,
      photoCta: 'Text 3 photos for a faster price',
    },
    faq: [
      { q: 'How much will it cost?', a: `It depends on size and condition. For yards up to 500 sq ft, an ${P.essential.name} is ${money(R[0].essential!)} and a ${P.premium.name} is ${money(R[0].premium!)}; the table on this page has every size. You get your exact price before any work starts.` },
      { q: `${P.essential.name} or ${P.premium.name}?`, a: `No pets and light dirt: ${P.essential.name}. Dogs, odor, algae, or turf that has never been professionally cleaned: ${P.premium.name}. Not sure? ${owner} will recommend one.` },
      { q: 'Can you get the dog smell out?', a: `The smell lives in the infill, not the blades, so spraying the surface doesn't last. A ${P.premium.name} includes pet-odor and antimicrobial treatment. A yard that has gone a long time may need the heavy pet-odor add-on (${P.addons[0].price}), quoted before any work.` },
      WHERE,
    ],
  },
  {
    slug: 'membership',
    name: 'Turf membership',
    questions: [
      { name: 'dogs', label: 'Do dogs use it?', choices: [
        { label: 'No dogs', hint: `<b>${M[0].name}</b> (${money(M[0].monthly)}/mo) covers light upkeep, four times a year.` },
        { label: '1 dog', hint: `<b>${M[1].name}</b> (${money(M[1].monthly)}/mo) is a ${P.premium.name} every quarter, with pet-odor treatment.` },
        { label: '2 or more dogs', hint: `<b>${M[2].name}</b> (${money(M[2].monthly)}/mo) is built for multi-dog and daily-potty yards.` },
      ] },
      { name: 'size', label: 'About how big is the turf?', choices: SIZE_CHOICES.map((c) => ({ ...c, hint: c.label === 'Not sure' ? NOT_SURE : undefined })) },
    ],
    ad: {
      primary: [
        `Clean turf all year without remembering to book it. A membership brings four visits a year and priority scheduling. Plans from ${money(M[0].monthly)} a month on ${area.name}.`,
        `Dogs on the turf every day? ${M[1].name} is a ${P.premium.name} every quarter, with pet-odor and antimicrobial treatment. ${money(M[1].monthly)} a month.`,
      ],
      headlines: [`Turf Memberships From ${money(M[0].monthly)}/mo`, 'Clean Turf, Four Times a Year'],
      description: 'Priority scheduling for members',
    },
    form: {
      name: 'TTR · Turf membership · V2',
      intro: { headline: 'Find the right turf care plan', bullets: ['Four scheduled visits a year', 'Cleaning and pet-odor options for your yard', `Plans start at ${money(M[0].monthly)}/month`] },
      questionsIntro: `Two quick taps help ${owner} recommend a plan. You choose after he explains the options.`,
      ending: { headline: `${owner} has your plan request.`, description: `He'll call or text from ${brand.phone} to recommend a plan for your yard and dogs. Tap below to compare the plans and save his number.`, button: 'Compare the plans' },
    },
    lp: {
      title: `Turf Memberships From ${money(M[0].monthly)}/mo | ${brand.name}`,
      description: `Four turf visits a year with priority scheduling, from ${money(M[0].monthly)} a month on ${area.name}. Compare the plans and get matched to one.`,
      kicker: 'Turf memberships',
      h1: ['Keep your turf clean', 'without rebooking'],
      lede: `Four visits a year go on ${owner}'s schedule, and members get priority scheduling. Answer two questions and he'll recommend the right plan.`,
      ticks: [{ icon: 'calendar', label: 'Four visits a year' }, { icon: 'clock', label: 'Priority scheduling' }, { icon: 'tag', label: `From ${money(M[0].monthly)} a month` }],
      image: { ...jobImg('dog-yard-turf-cleaned-before-after'), alt: 'Before and after: artificial turf dog yard with pet waste, then cleaned and brushed', caption: 'Dog yard. Waste and debris cleared, fibers brushed back up.' },
      formTitle: 'Find your plan',
    },
    fb: {
      title: `Membership request received | ${brand.name}`,
      h1: ['Your membership request', ' is in.'],
      tips: [
        { icon: 'camera', title: 'One wide shot', text: `The whole yard, so ${owner} can size up the visits.` },
        { icon: 'paw', title: 'Where the dogs go', text: 'The corners and paths that get the most use.' },
        { icon: 'calendar', title: 'Dates that matter', text: 'Guests coming, a party, a season you want it at its best.' },
      ],
      sms: `Hi ${owner} — I just asked about a turf membership. Here are the whole yard and the areas the dogs use most.`,
      photoCta: `Text ${owner} yard photos`,
    },
    faq: [
      { q: 'What is the difference between the plans?', a: `${M[0].name} (${money(M[0].monthly)}/mo) is light upkeep: ${M[0].includes.slice(0, 3).join(', ').toLowerCase()}, four times a year. ${M[1].name} (${money(M[1].monthly)}/mo) is a ${P.premium.name} every quarter. ${M[2].name} (${money(M[2].monthly)}/mo) is built for multi-dog and daily-potty yards; ${owner} goes over what it adds when he calls.` },
      { q: 'Is a membership cheaper than booking cleans?', a: `On yards over 1,000 sq ft, yes: ${M[1].name} is ${money(M[1].monthly * 12)} a year, less than four ${P.premium.name}s (${money(R[2].premium! * 4)} at 1,001–1,500 sq ft). On smaller yards, four one-time visits cost less (${money(R[0].premium! * 4)} up to 500 sq ft), and a membership buys priority scheduling and never having to remember to book.` },
      { q: 'How does billing work?', a: `The monthly price is the four visits a year spread over twelve months. ${owner} walks you through the details before you sign up.` },
      WHERE,
    ],
  },
  {
    slug: 'putting-green',
    name: 'Putting green restoration',
    questions: [
      { name: 'green_issue', label: 'What is the green doing?', choices: [
        { label: 'Rolling slow' }, { label: 'Bumpy or breaking oddly' }, { label: 'Dirty, leaves or needles' },
        { label: 'Seams, cups or edges', hint: `${owner} checks seams, cups and edges on every green.` }, { label: 'Just due for service' },
      ] },
      { name: 'green_where', label: 'Where is the green?', choices: [
        { label: 'Backyard' },
        { label: 'HOA or community', hint: 'Community and business greens start with a site walk.' },
        { label: 'Golf course or business', hint: 'Community and business greens start with a site walk.' },
      ] },
    ],
    ad: {
      primary: [
        `Green rolling slow or bumpy? ${owner} has built and cared for putting greens for ${years} years. He clears and brushes the green, cleans the cups and fringe, top-dresses it with fresh sand and rolls it true.`,
        `A synthetic green is only as good as its roll. Get yours brushed, top-dressed, rolled and speed-checked on ${area.name}.`,
      ],
      headlines: ['Make Your Green Roll True Again', 'Putting Green Restoration'],
      description: `${years} years building and caring for greens`,
    },
    form: {
      name: 'TTR · Putting green restoration · V2',
      intro: { headline: 'Get your putting green restoration quote', bullets: ['For slow, bumpy or uneven synthetic greens', 'Brushed, top-dressed, rolled and speed-checked', `${years} years building and caring for greens`] },
      questionsIntro: `Two quick taps help ${owner} understand the green before he calls or texts.`,
      ending: { headline: `${owner} has your green request.`, description: `He'll call or text from ${brand.phone} to discuss what the green needs and quote the restoration. Tap below to see which photos help.`, button: 'See photo guide' },
    },
    lp: {
      title: `Putting Green Restoration | ${brand.name}`,
      description: `Slow or bumpy synthetic green? Cleared, brushed, top-dressed, rolled and speed-checked on ${area.name}. Typical backyard greens ${GREEN_RANGE}.`,
      kicker: 'Putting green restoration',
      h1: ['Make your green', 'roll true again'],
      lede: `${owner} has built and cared for synthetic greens for ${years} years. He clears, brushes, top-dresses and rolls your green, then checks the speed.`,
      ticks: [{ icon: 'flag', label: `Typical greens ${GREEN_RANGE}` }, { icon: 'wrench', label: 'Seams, cups and edges checked' }, { icon: 'award', label: `${years} years building greens` }],
      image: { src: '/assets/img/putting-green-fire-pit-stone-wall.jpg', width: 1400, height: 1050, alt: 'Backyard putting green beside a stone wall and fire pit' },
      formTitle: 'Get your green quote',
    },
    fb: {
      title: `Putting-green request received | ${brand.name}`,
      h1: ['Your putting-green request', ' is in.'],
      tips: [
        { icon: 'camera', title: 'The whole green', text: `From behind the longest putt, so ${owner} sees the size and slope.` },
        { icon: 'flag', title: 'Cups, fringe and seams', text: 'Close-ups of the cups, the edges and any seam that has lifted.' },
        { icon: 'sand', title: 'The slow or bumpy spot', text: 'A low shot across the surface shows where sand has washed off or piled up.' },
      ],
      sms: `Hi ${owner} — I just requested putting-green restoration. Here are the whole green, the cups and seams, and the slow or bumpy spot.`,
      photoCta: 'Text 3 photos for a faster quote',
    },
    faq: [
      { q: 'How much does putting green restoration cost?', a: `Greens are quoted after a look, because size, slope, cups and sand condition all move the price. Typical backyard greens run ${GREEN_RANGE}.` },
      ...greenService.faq.slice(0, 3),
      { q: 'Do you work on community and golf greens?', a: 'Yes. HOA, community and golf-course greens start with a site walk, then a quote.' },
      WHERE,
    ],
  },
];

type Step = { icon: string; title: string; text: string; label?: string };

/** Landing pages: how it works (the putting green page shows GREEN_STEPS instead). */
export const HOW: Record<'clean' | 'membership', Step[]> = {
  clean: [
    { icon: 'quote', title: 'Tell us about your turf', text: 'Two taps and your contact info. Photos help.' },
    { icon: 'tag', title: 'Get your price', text: 'By the square foot, before any work starts.' },
    { icon: 'sparkle', title: 'We clean it', text: 'Deep cleaned, groomed and blown clean.' },
  ],
  membership: [
    { icon: 'chat', title: `${owner} matches a plan`, text: 'By yard size, dogs and how you use it.' },
    { icon: 'calendar', title: 'Four visits a year', text: 'Each one follows the plan you choose.' },
    { icon: 'clock', title: 'Members book first', text: 'Priority scheduling on every visit.' },
  ],
};

/** Follow-up pages: what happens after the Instant Form. */
export const NEXT: Record<Angle['slug'], Step[]> = {
  clean: [
    { icon: 'camera', label: 'Fastest next step', title: 'Text a few photos', text: 'The whole yard and problem spots help get the price right.' },
    { icon: 'phone', label: 'After review', title: `${owner} reaches out`, text: `A call or text from ${brand.phone}.` },
    { icon: 'tag', label: 'Before any work', title: 'You get an upfront price', text: 'By the square foot, never by the hour.' },
    { icon: 'sparkle', label: 'Most yards: one visit', title: 'We clean it', text: 'Deep cleaned, groomed and blown clean.' },
  ],
  membership: [
    { icon: 'camera', label: 'Fastest next step', title: 'Text yard photos', text: 'The whole yard and the areas the dogs use most.' },
    { icon: 'phone', label: 'After review', title: `${owner} reaches out`, text: 'A call or text about your yard and dogs.' },
    { icon: 'chat', label: 'On the call', title: 'You pick a plan', text: `${owner} recommends one. You decide.` },
    { icon: 'calendar', label: 'Four a year', title: 'Visits on the calendar', text: 'Each one follows your plan.' },
  ],
  'putting-green': [
    { icon: 'camera', label: 'Fastest next step', title: 'Text three photos', text: 'The whole green, the cups and the slow spot.' },
    { icon: 'phone', label: 'After review', title: `${owner} reaches out`, text: 'A call or text about your green.' },
    { icon: 'tag', label: 'After a look', title: 'You get a quote', text: `Typical backyard greens run ${GREEN_RANGE}.` },
    { icon: 'flag', title: 'We restore it', text: 'Brushed, top-dressed, rolled and speed-checked.' },
  ],
};

/** Why greens slow down, from the putting green restoration service page. */
export const GREEN_WHY: Tip[] = [
  { icon: 'sand', title: 'Sand drifts', text: 'It washes off the high side and piles up on the low side, so the ball drifts.' },
  { icon: 'leaf', title: 'Debris softens it', text: 'Leaves, pine needles and pollen soften the surface and slow every putt.' },
  { icon: 'layers', title: 'Sand packs down', text: 'Dirty sand compacts unevenly, so the roll turns inconsistent.' },
];

/** The restoration, step by step, from the putting green restoration service page. */
export const GREEN_STEPS: Step[] = [
  { icon: 'broom', title: 'Blow and clear', text: 'Green, fringe and collar, debris-free.' },
  { icon: 'grass', title: 'Brush', text: 'Lift the fibers and loosen compacted sand.' },
  { icon: 'flag', title: 'Clean cups and fringe', text: 'Cups cleared, the fringe cleaned like a lawn.' },
  { icon: 'sand', title: 'Top-dress', text: 'Fresh green sand to an even depth, brushed in.' },
  { icon: 'layers', title: 'Roll', text: 'Compact and true it, in more than one direction.' },
  { icon: 'clock', title: 'Check the speed', text: 'Adjust sand and rolling until it runs right.' },
];

/** Closing band and submit button on the landing pages. */
export const FINAL: Record<Angle['slug'], { title: string; text: string; cta: string; submit: string }> = {
  clean: { title: 'Ready for clean turf?', text: `Two taps and your contact info. ${owner} follows up about the right clean and your price.`, cta: 'Request my quote', submit: 'Request My Quote' },
  membership: { title: 'Put your turf on a schedule', text: `Two taps and your contact info. ${owner} recommends a plan. You decide.`, cta: 'Find my plan', submit: 'Find My Plan' },
  'putting-green': { title: 'Get your green rolling true', text: `Two taps and your contact info. ${owner} follows up with the next step.`, cta: 'Request my green quote', submit: 'Request My Green Quote' },
};

export const findAngle = (slug: string) => ANGLES.find((a) => a.slug === slug);
/** Where an Instant Form's completion-screen button sends people. */
export const followUpUrl = (a: Angle) => `${SITE_URL}/fb/${a.slug}/`;
export const landingUrl = (a: Angle) => `${SITE_URL}/lp/${a.slug}/`;
