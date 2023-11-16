import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'hybrid',
  adapter: netlify(),
  integrations: [react()],
  experimental: {
    i18n: {
      defaultLocale: "pl",
      locales: ["pl", "en"],
      routingStrategy: "prefix-other-locales"
    }
  }
});
