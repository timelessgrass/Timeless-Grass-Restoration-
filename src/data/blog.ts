/**
 * The weekly blog, part of the TIMELESS care plan.
 *
 * HOW PUBLISHING WORKS. Every post is written ahead and carries a `publish`
 * date. A post exists on the site, in the sitemap, the search index and
 * llms.txt only from the first build on or after that date, counted in
 * Myrtle Beach time. So a reviewed batch can be merged in one go and still
 * appear one post a week. The weekly build is triggered by
 * .github/workflows/weekly-publish.yml, which only asks Netlify for a build
 * in a week that has a post due, so a quiet week costs no build credit.
 *
 * A post is an Article like every other tier, held to the same writer brief
 * (research/WRITER-BRIEF.md) and the same audit gate. What makes it a blog
 * post rather than another guide is that it is tied to a moment: the week's
 * weather, the season on the Grand Strand, or a real job.
 */
import type { Article } from './types';
import { BLOG_1 } from './blog-1';

export type Post = Article & {
  /** YYYY-MM-DD. Goes live at the first build on or after this date, Myrtle Beach time. */
  publish: string;
  /** One line on why this week: the season, the weather, the job. Shown nowhere, kept for the plan. */
  why?: string;
};

/** Today's date in Myrtle Beach, as YYYY-MM-DD. Netlify builds in UTC; a Monday-morning build in UTC can still be Sunday on the coast. */
export function todayOnTheCoast(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

const ALL_POSTS: Post[] = [...BLOG_1];

{
  const seen = new Set<string>();
  for (const p of ALL_POSTS) {
    if (seen.has(p.slug)) throw new Error(`duplicate blog slug: ${p.slug}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.publish)) throw new Error(`blog post ${p.slug} has no valid publish date`);
    seen.add(p.slug);
  }
}

/**
 * BLOG_TODAY overrides the date for a preview build, e.g. BLOG_TODAY=2026-12-31
 * npm run build shows the whole queue. Never set it on Netlify.
 */
const today = process.env.BLOG_TODAY || todayOnTheCoast();

/** Live posts, newest first. Everything on the site reads this, never ALL_POSTS. */
export const POSTS: Post[] = ALL_POSTS
  .filter((p) => p.publish <= today)
  .sort((a, b) => b.publish.localeCompare(a.publish) || a.slug.localeCompare(b.slug));

/** The written queue, for scripts and the weekly trigger. */
export const QUEUED: Post[] = ALL_POSTS.filter((p) => p.publish > today).sort((a, b) => a.publish.localeCompare(b.publish));
