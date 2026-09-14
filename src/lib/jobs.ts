/** Build-time helper: the before/after job photos whose files actually exist. */
import fs from 'node:fs';
import path from 'node:path';
import { JOBS, type Job } from '../data/jobs';

export const availableJobs = (service?: string): Job[] =>
  JOBS.filter((j) => fs.existsSync(path.join(process.cwd(), 'public/assets/img/jobs', j.file)) && (!service || !j.service || j.service === service));
