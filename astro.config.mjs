import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [react()],
  experimental: {
    i18n: {
      defaultLocale: "pl",
      locales: ["pl", "en", "fr"],
      routingStrategy: "prefix-other-locales"
    }
  }
});
