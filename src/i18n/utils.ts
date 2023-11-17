import { base, configHelper } from '../config';
import { ui, defaultLang, showDefaultLang, routes, languages  } from './ui';

export function getLangFromUrl(url: URL) {
  const pathname = url?.pathname;
  const [, lang] = pathname ? pathname.split('/') : [];
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    const translatedPathReplaced = translatedPath.replaceAll(".", "/");

    return !showDefaultLang && l === defaultLang
      ? translatedPathReplaced
      : `/${l}${translatedPathReplaced}`;
  };
}
 export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url)?.pathname;

  const path = pathname
    ?.split("/")
    .filter(Boolean)
    .filter((part) => !Object.keys(languages).includes(part))
    .join(".");

  if (!path) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    const pathTyped = path as keyof typeof route;
    return pathTyped in route ? pathTyped : undefined
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string,
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}