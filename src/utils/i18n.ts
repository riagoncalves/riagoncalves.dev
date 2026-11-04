import en from '@/data/translations/en.json';
import pt from '@/data/translations/pt.json';
import { Dictionary, Locale, Localized, Post } from '@/types';

export const LOCALES: Locale[] = ['en', 'pt'];
export const DEFAULT_LOCALE: Locale = 'en';

const LOCALE_PREFIX = '/pt';

const dictionaries: Record<Locale, Dictionary> = { en, pt };

// BCP 47 tags, used for `lang` attributes and hreflang.
export const LOCALE_TAGS: Localized = {
  en: 'en',
  pt: 'pt-PT',
};

export const OG_LOCALES: Localized = {
  en: 'en_US',
  pt: 'pt_PT',
};

// A page's URL in each language that has it. A missing locale means there's no equivalent page.
export type LocalePaths = Partial<Record<Locale, string>>;

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export const localize = <T>(value: Localized<T>, locale: Locale): T => value[locale] ?? value[DEFAULT_LOCALE];

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'pt' : 'en');

const getLocaleFromPath = (pathname: string): Locale =>
  pathname === LOCALE_PREFIX || pathname.startsWith(`${LOCALE_PREFIX}/`) ? 'pt' : 'en';

const stripLocale = (pathname: string): string => {
  if (getLocaleFromPath(pathname) === DEFAULT_LOCALE) return pathname;

  return pathname.slice(LOCALE_PREFIX.length) || '/';
};

// Builds the URL for `path` (written without a locale prefix, e.g. "/blog") in the given locale.
export const localizePath = (path: string, locale: Locale): string => {
  if (locale === DEFAULT_LOCALE) return path;

  return path === '/' ? LOCALE_PREFIX : `${LOCALE_PREFIX}${path}`;
};

// Same page, other language. Pages without a 1:1 equivalent (blog posts) pass their own href instead.
export const switchLocalePath = (pathname: string, locale: Locale): string =>
  localizePath(stripLocale(pathname), locale);

// For pages that exist at the same path in every language.
export const pagePaths = (path: string): LocalePaths =>
  Object.fromEntries(LOCALES.map((locale) => [locale, localizePath(path, locale)]));

export const postPath = (post: Pick<Post, 'slug' | 'lang'>): string =>
  localizePath(`/blog/${post.slug}`, post.lang);

export const postPaths = (post: Post, translation?: Post): LocalePaths => ({
  [post.lang]: postPath(post),
  ...(translation && { [translation.lang]: postPath(translation) }),
});
