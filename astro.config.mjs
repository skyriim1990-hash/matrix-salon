// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your real domain once you have one (helps SEO + sitemaps).
// On Vercel you'll get a free URL like https://your-site.vercel.app to start.
export default defineConfig({
  site: 'https://your-site.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
