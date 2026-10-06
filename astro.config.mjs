import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sätts via env vid bygge:
//   SITE_URL=https://pooldoktorn.se BASE_PATH= npm run build      (egen domän, rot)
//   SITE_URL=https://oskarhellmer-dev.github.io BASE_PATH=/pooldoktorn npm run build  (Pages-preview)
const site = process.env.SITE_URL || 'https://pooldoktorn.se';
const base = process.env.BASE_PATH || undefined;

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
