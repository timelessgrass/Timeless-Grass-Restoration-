/**
 * Facebook lead campaign (September 2026). Three ad angles, and each one has:
 *  - an Instant Form: the copy to paste into Meta Ads Manager is in marketing/facebook-lead-ads.md,
 *    generated from this file by `node scripts/campaign-kit.mjs`
 *  - a landing page with a two-step form, /lp/<slug>/, for ads that send people to the website
 *  - a follow-up page, /fb/<slug>/, linked from the Instant Form's completion screen
 *
 * The landing-page form asks the Instant Form's questions with the same answers (except the size wording, see
 * SIZE_CHOICES), so a lead reaches Brian in the same shape wherever it came from. Change a question here and both stay in step (then regenerate
 * the kit; a published Instant Form can't be edited, so a changed form is a new form in Ads Manager).
 *
 * Claims: nothing here states anything research/QUESTIONS-FOR-BRIAN.md still has open (cancellation terms,
 * what ELITE's 10% covers, Pet Turf ELITE extras, trip charges). The two open items the pages do repeat
 * from the live site are the reply time (#15, REPLY_TIME below) and the pet-safe answer (#17); neither
 * appears in the Instant Form copy, because a published form can't be corrected.
 */
import { brand, area, pricing as P, money, SITE_URL } from './site';
import { SERVICES } from './services';

/** QUESTIONS-FOR-BRIAN #15: confirm before ads run. Used on the web pages only, never in the Instant Forms. */
export const REPLY_TIME = 'within one business day';
/** The same promise as a short step label. */
const REPLY_LABEL = 'Within 1 business day';

export type Choice = {
  label: string;
  /** shown under the question on the landing page when picked (may contain <b>) */ hint?: string;
  /** the published Instant Form's wording, when the landing page words this answer differently */ form?: string;
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
  fb: { title: string; h1: [string, string]; tips: Tip[]; sms: string };
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

/** The landing pages word the sizes like the price table, so no two answers share a number. The Instant Forms were
 *  published on 2026-09-14 with the older wording (500 appears in two answers); `form` keeps that wording so the
 *  kit still matches Ads Manager, and the Make router maps both. */
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
const SAFE: Faq = { q: 'Is it safe for kids and dogs?', a: 'Yes. We use turf-safe, pet-safe products, and your turf is ready to use once it is dry.' };
/** Follow-up pages only: the worry right after handing over a phone number. */
export const PUSHY: Faq = { q: 'Is this going to be a pushy sales call?', a: `No. ${owner} asks a few questions about your turf, gives you a price, and that's it.` };

const greenService = SERVICES.find((s) => s.slug === 'putting-green-restoration')!;

export const ANGLES: Angle[] = [
  {
    slug: 'clean',
    name: 'Turf cleaning quote',
    questions: [
      { name: 'size', label: 'About how big is the turf?', choices: SIZE_CHOICES.map((c, i) => ({ ...c, hint: [sizeHint(0), sizeHint(1), sizeHint(2, 3), sizeHint(4, 5), `Big yard. ${owner} prices it after a look.`, NOT_SURE][i] })) },
      { name: 'dogs', label: 'Do dogs use it?', choices: [
        { label: 'No dogs', hint: `No pets and light dirt? The <b>${P.essential.name}</b> is usually enough.` },
        { label: '1 dog', hint: `Dog yards get the <b>${P.premium.name}</b>, with pet-odor and antimicrobial treatment.` },
        { label: '2 or more dogs', hint: `Dog yards get the <b>${P.premium.name}</b>, with pet-odor and antimicrobial treatment.` },
      ] },
      { name: 'issue', label: 'What bothers you most?', choices: ['Pet odor', 'Dirty, dull or matted', 'Weeds, leaves or debris', 'Just due for a clean'].map((label) => ({ label })) },
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
      name: 'TTR · Turf cleaning quote',
      intro: { headline: 'Get your turf cleaning price', bullets: ['Priced by the square foot, never by the hour', `Yards up to 500 sq ft from ${money(R[0].essential!)}`, `${owner}, the owner, calls or texts you back`] },
      questionsIntro: `Three quick taps so ${owner} can price your yard before he calls. A 20 × 25 ft yard is 500 sq ft.`,
      ending: { headline: `Got it. ${owner} will reach out.`, description: `He'll call or text from ${brand.phone}. Save the number, and send photos to get your price faster.`, button: 'See next steps' },
    },
    lp: {
      title: `Turf Cleaning From ${money(R[0].essential!)} | ${brand.name}`,
      description: `Artificial turf deep cleaned, pet odor treated and brushed back up on ${area.name}. Priced by the square foot before any work starts.`,
      kicker: `${area.short} turf cleaning`,
      h1: ['Get your turf', 'blown clean again'],
      lede: 'Deep cleaned through the fibers and infill, pet odor treated, brushed back up. You get your price before any work starts.',
      ticks: [{ icon: 'tag', label: `Up to 500 sq ft from ${money(R[0].essential!)}` }, { icon: 'ruler', label: 'By the square foot, never hourly' }, { icon: 'award', label: `${years} years in turf` }],
      image: { ...jobImg('side-yard-turf-power-brushed-before-after'), alt: 'Side-yard artificial turf half cleaned, with a power brush resting on the finished section', caption: 'Mid-clean. Brushed past the line; the front is how we found it.' },
      formTitle: 'Get your price',
    },
    fb: {
      title: `You're in! Here's what happens next | ${brand.name}`,
      h1: ["You're in", "! Here's what happens next."],
      tips: [
        { icon: 'camera', title: 'One wide shot', text: `The whole yard from a corner, so ${owner} can size it up.` },
        { icon: 'paw', title: 'The problem spots', text: 'Where the dogs go, where it smells, where it looks flat.' },
        { icon: 'ruler', title: 'Rough size, if you know it', text: 'Length × width is plenty. A 20 × 25 ft yard is 500 sq ft.' },
      ],
      sms: `Hi ${owner}! I just asked about turf cleaning. Here are a few photos of my turf:`,
    },
    faq: [
      { q: 'How much will it cost?', a: `It depends on size and condition. For yards up to 500 sq ft, an ${P.essential.name} is ${money(R[0].essential!)} and a ${P.premium.name} is ${money(R[0].premium!)}; the table on this page has every size. You get your exact price before any work starts.` },
      { q: `${P.essential.name} or ${P.premium.name}?`, a: `No pets and light dirt: ${P.essential.name}. Dogs, odor, algae, or turf that has never been professionally cleaned: ${P.premium.name}. Not sure? ${owner} will recommend one.` },
      { q: 'Can you get the dog smell out?', a: `The smell lives in the infill, not the blades, so spraying the surface doesn't last. A ${P.premium.name} includes pet-odor and antimicrobial treatment. A yard that has gone a long time may need the heavy pet-odor add-on (${P.addons[0].price}), quoted before any work.` },
      SAFE,
      WHERE,
    ],
  },
  {
    slug: 'membership',
    name: 'Turf membership',
    questions: [
      { name: 'size', label: 'About how big is the turf?', choices: SIZE_CHOICES.map((c) => ({ ...c, hint: c.label === 'Not sure' ? NOT_SURE : undefined })) },
      { name: 'dogs', label: 'Do dogs use it?', choices: [
        { label: 'No dogs', hint: `<b>${M[0].name}</b> (${money(M[0].monthly)}/mo) covers light upkeep, four times a year.` },
        { label: '1 dog', hint: `<b>${M[1].name}</b> (${money(M[1].monthly)}/mo) is a ${P.premium.name} every quarter, with pet-odor treatment.` },
        { label: '2 or more dogs', hint: `<b>${M[2].name}</b> (${money(M[2].monthly)}/mo) is built for multi-dog and daily-potty yards.` },
      ] },
      { name: 'plan_pick', label: 'Which plan sounds right?', choices: [...M.map((m) => ({ label: `${m.name} · ${money(m.monthly)}/mo` })), { label: 'Not sure yet', hint: `${owner} will recommend one when he calls.` }] },
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
      name: 'TTR · Turf membership',
      intro: { headline: `Clean turf all year, from ${money(M[0].monthly)}/mo`, bullets: ['Four visits a year', 'Priority scheduling for members', `${owner} matches the plan to your yard`] },
      questionsIntro: `Three quick taps so ${owner} can match you with a plan when he calls.`,
      ending: { headline: `You're on ${owner}'s list.`, description: `He'll call or text from ${brand.phone} to match you with a plan. Save the number so you know it's him.`, button: 'Compare the plans' },
    },
    lp: {
      title: `Turf Memberships From ${money(M[0].monthly)}/mo | ${brand.name}`,
      description: `Four turf visits a year with priority scheduling, from ${money(M[0].monthly)} a month on ${area.name}. Compare the plans and get matched to one.`,
      kicker: 'Turf memberships',
      h1: ['Clean turf all year,', 'handled for you'],
      lede: `A membership puts four visits a year on ${owner}'s schedule, and members get priority scheduling. Plans from ${money(M[0].monthly)} a month.`,
      ticks: [{ icon: 'calendar', label: 'Four visits a year' }, { icon: 'clock', label: 'Priority scheduling' }, { icon: 'tag', label: `From ${money(M[0].monthly)} a month` }],
      image: { ...jobImg('dog-yard-turf-cleaned-before-after'), alt: 'Before and after: artificial turf dog yard with pet waste, then cleaned and brushed', caption: 'Dog yard. Waste and debris cleared, fibers brushed back up.' },
      formTitle: 'Find your plan',
    },
    fb: {
      title: `You're on the list! Here's how it works | ${brand.name}`,
      h1: ["You're on the list", "! Here's how it works."],
      tips: [
        { icon: 'camera', title: 'One wide shot', text: `The whole yard, so ${owner} can size up the visits.` },
        { icon: 'paw', title: 'Where the dogs go', text: 'The corners and paths that get the most use.' },
        { icon: 'calendar', title: 'Dates that matter', text: 'Guests coming, a party, a season you want it at its best.' },
      ],
      sms: `Hi ${owner}! I just asked about a turf membership. Here are a few photos of my yard:`,
    },
    faq: [
      { q: 'What is the difference between the plans?', a: `${M[0].name} (${money(M[0].monthly)}/mo) is light upkeep: ${M[0].includes.slice(0, 3).join(', ').toLowerCase()}, four times a year. ${M[1].name} (${money(M[1].monthly)}/mo) is a ${P.premium.name} every quarter. ${M[2].name} (${money(M[2].monthly)}/mo) is built for multi-dog and daily-potty yards; ${owner} goes over what it adds when he calls.` },
      { q: 'Is a membership cheaper than booking cleans?', a: `On yards over 1,000 sq ft, yes: ${M[1].name} is ${money(M[1].monthly * 12)} a year, less than four ${P.premium.name}s (${money(R[2].premium! * 4)} at 1,001–1,500 sq ft). On smaller yards, four one-time visits cost less (${money(R[0].premium! * 4)} up to 500 sq ft), and a membership buys priority scheduling and never having to remember to book.` },
      { q: 'How does billing work?', a: `The monthly price is the four visits a year spread over twelve months. ${owner} walks you through the details before you sign up.` },
      SAFE,
      WHERE,
    ],
  },
  {
    slug: 'putting-green',
    name: 'Putting green restoration',
    questions: [
      { name: 'green_size', label: 'How big is the green?', choices: ['Under 300 sq ft', '300–600 sq ft', '600–1,000 sq ft', 'Over 1,000 sq ft', 'Not sure'].map((label) => ({ label, hint: label === 'Not sure' ? 'No problem. Length × width is close enough.' : `Typical backyard greens run <b>${GREEN_RANGE}</b>. ${owner} quotes yours after a look.` })) },
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
      name: 'TTR · Putting green restoration',
      intro: { headline: 'Get your putting green quote', bullets: ['Brushed, top-dressed, rolled and speed-checked', `${years} years building and caring for greens`, `Typical backyard greens: ${GREEN_RANGE}`] },
      questionsIntro: `Three quick taps so ${owner} knows what your green needs before he calls.`,
      ending: { headline: `Got it. ${owner} will reach out.`, description: `He'll call or text from ${brand.phone}. Photos of the green help him quote it.`, button: 'Send photos of the green' },
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
      title: `Got it! Here's what happens next | ${brand.name}`,
      h1: ['Got it', "! Here's what happens next."],
      tips: [
        { icon: 'camera', title: 'The whole green', text: `From behind the longest putt, so ${owner} sees the size and slope.` },
        { icon: 'flag', title: 'Cups, fringe and seams', text: 'Close-ups of the cups, the edges and any seam that has lifted.' },
        { icon: 'sand', title: 'The slow or bumpy spot', text: 'A low shot across the surface shows where sand has washed off or piled up.' },
      ],
      sms: `Hi ${owner}! I just asked about putting green restoration. Here are a few photos of my green:`,
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
    { icon: 'quote', title: 'Tell us about your turf', text: 'Three taps and a phone number. Photos help.' },
    { icon: 'tag', title: 'Get your price', text: 'By the square foot, before any work starts.' },
    { icon: 'sparkle', title: 'We clean it', text: 'Deep cleaned, groomed and blown clean.' },
  ],
  membership: [
    { icon: 'chat', title: `${owner} matches a plan`, text: 'By yard size, dogs and how you use it.' },
    { icon: 'calendar', title: 'Four visits a year', text: 'Each one follows the plan you pick.' },
    { icon: 'clock', title: 'Members book first', text: 'Priority scheduling on every visit.' },
  ],
};

/** Follow-up pages: what happens after the Instant Form. */
export const NEXT: Record<Angle['slug'], Step[]> = {
  clean: [
    { icon: 'phone', label: REPLY_LABEL, title: `${owner} reaches out`, text: `A quick call or text from ${brand.phone}.` },
    { icon: 'camera', label: 'Optional', title: 'You send a few photos', text: 'Two or three photos help get your price right the first time.' },
    { icon: 'tag', label: 'Before any work', title: 'You get an upfront price', text: 'By the square foot, never by the hour.' },
    { icon: 'sparkle', label: 'Most yards: one visit', title: 'We clean it', text: 'Deep cleaned, groomed and blown clean.' },
  ],
  membership: [
    { icon: 'phone', label: REPLY_LABEL, title: `${owner} reaches out`, text: 'A quick call or text about your yard and dogs.' },
    { icon: 'chat', label: 'On the call', title: 'You pick a plan', text: `${owner} recommends one. You decide.` },
    { icon: 'calendar', label: 'Four a year', title: 'Visits on the calendar', text: 'Each one follows your plan.' },
    { icon: 'clock', label: 'Every visit', title: 'Members book first', text: 'Priority scheduling for members.' },
  ],
  'putting-green': [
    { icon: 'phone', label: REPLY_LABEL, title: `${owner} reaches out`, text: 'A quick call or text about your green.' },
    { icon: 'camera', label: 'Optional', title: 'You send photos', text: 'The whole green, the cups and the slow spot.' },
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
  clean: { title: 'Ready for clean turf?', text: `Three taps and your number. ${owner} comes back with a price.`, cta: 'Get my price', submit: 'Get My Free Quote' },
  membership: { title: 'Put your turf on a schedule', text: `Three taps and your number. ${owner} matches you with a plan.`, cta: 'Find my plan', submit: 'Find My Plan' },
  'putting-green': { title: 'Get your green rolling true', text: `Three taps and your number. ${owner} comes back with a quote.`, cta: 'Get my green quote', submit: 'Get My Green Quote' },
};

export const findAngle = (slug: string) => ANGLES.find((a) => a.slug === slug);
/** Where an Instant Form's completion-screen button sends people. */
export const followUpUrl = (a: Angle) => `${SITE_URL}/fb/${a.slug}/`;
export const landingUrl = (a: Angle) => `${SITE_URL}/lp/${a.slug}/`;
