import en from '@/data/translations/en.json';

export type Locale = 'en' | 'pt';

export type Localized<T = string> = Record<Locale, T>;

export type Dictionary = typeof en;
