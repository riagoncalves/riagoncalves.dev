import { Locale, Localized } from '@/types';

const DATE_LOCALES: Localized = {
  en: 'en-US',
  pt: 'pt-PT',
};

export const formatDate = (value: string, locale: Locale): string => {
  if (!value) return '';

  return new Date(value).toLocaleDateString(DATE_LOCALES[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
