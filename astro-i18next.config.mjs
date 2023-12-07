/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "pl",
    locales: ["pl", "en", "fr"],
    routes: {
      en: {
        o_nas: "about",
        produkty: "products",
        kontakt: "contact"
      },
      fr: {
        o_nas: "about",
        produkty: "products",
        kontakt: "contact"
      }
    }
  };