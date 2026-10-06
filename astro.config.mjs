// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// `site` is the live URL — used for canonical links, sitemap and Open Graph.
// Update it if you move to a custom domain.
export default defineConfig({
  site: 'https://matrix-salon.com',
  // Bilingual: Bulgarian is the default (served at /), English at /en/.
  i18n: {
    locales: ['bg', 'en'],
    defaultLocale: 'bg',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'bg',
        locales: { bg: 'bg-BG', en: 'en-GB' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
