import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/data/site.ts';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  server: { port: Number(process.env.PORT) || 4321 },
});
