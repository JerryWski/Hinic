import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from "astro-i18next";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [react(),astroI18next()],
  
});
