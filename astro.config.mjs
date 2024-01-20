import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from "astro-i18next";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  // output: 'hybrid',
  // adapter: netlify(),
  site:  'https://hinic.eu',
  integrations: [react(),astroI18next(), sitemap()],
  
});
