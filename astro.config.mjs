import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://keyvaann.github.io',
  base: '/rope',
  integrations: [sitemap()],
  output: 'static',
});
