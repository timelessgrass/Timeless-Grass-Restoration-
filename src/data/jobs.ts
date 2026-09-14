/**
 * Before/after job photos. Files live in public/assets/img/jobs/. A photo only renders once its
 * file exists (ProofGallery checks at build time), so an entry can be added before the file lands.
 * Captions describe the job, never a town unless Brian confirms it.
 */
export type Job = { file: string; title: string; caption: string; alt: string; service?: string };

export const JOBS: Job[] = [];
