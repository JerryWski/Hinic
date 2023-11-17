export const languages = {
  pl: 'PL',
  en: 'EN',
  fr: 'FR',
};
export const defaultLang = 'pl';

export const routes = {
  en: {
    about: 'about',
    products: 'products',
    order: 'order',
    contact: 'contact',
  },
  fr: {
    about: 'propos',
    products: 'produces',
    order: 'orderen',
    contact: 'contakte',
  }
};

export const showDefaultLang = false;

export const ui = {
  pl: {
    'nav.about': 'O mnie',
    'nav.products': 'Produkty',
    'nav.orders': 'Zamówienia',
    'nav.contact': 'Kontakt',
    'hero.header': 'Profesjonalne rozwiązania dla nikotyny',
  },
  en: {
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.orders': 'Orders',
    'nav.contact': 'Contact',
    'hero.header': 'English prof',
  },
  fr: {
    'nav.about': 'A propos',
    'nav.products': 'produces',
    'nav.orders': 'orderen',
    'nav.contact': 'contakte',
    'hero.header': 'French prof',
  },
} as const;
