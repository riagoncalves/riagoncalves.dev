import type { Metadata } from 'next';
import { Locale } from '@/types';
import { site } from '@/data';
import {
  DEFAULT_LOCALE, LOCALES, LOCALE_TAGS, LocalePaths, OG_LOCALES,
  getDictionary, localize, localizePath, otherLocale, pagePaths,
} from './i18n';
import { absoluteUrl } from './url';

// hreflang map (BCP 47 tag → absolute URL), with the default language as x-default.
export const hreflangAlternates = (paths: LocalePaths): Record<string, string> => {
  const alternates: Record<string, string> = {};

  for (const locale of LOCALES) {
    const path = paths[locale];
    if (path) alternates[LOCALE_TAGS[locale]] = absoluteUrl(path);
  }

  const defaultPath = paths[DEFAULT_LOCALE];
  if (defaultPath) alternates['x-default'] = absoluteUrl(defaultPath);

  return alternates;
};

interface Options {
  locale: Locale
  // Path without the locale prefix, e.g. "/blog".
  path: string
  title?: string
  description?: string
  // For pages that don't exist at the same path in every language (blog posts).
  alternatePaths?: LocalePaths
  type?: 'website' | 'article'
  publishedTime?: string
  tags?: string[]
  image?: string
}

export const buildMetadata = ({
  locale,
  path,
  title,
  description,
  alternatePaths = pagePaths(path),
  type = 'website',
  publishedTime,
  tags,
  image,
}: Options): Metadata => {
  const t = getDictionary(locale);
  const fullTitle = title ? `${title} | ${site.name}` : t.meta.title;
  const pageDescription = description ?? t.meta.description;
  const alternate = otherLocale(locale);
  // Post covers can be any size; only the default thumbnail has known dimensions.
  const ogImage = image
    ? { url: image }
    : { url: localize(site.image, locale), width: 1200, height: 630, alt: t.meta.ogImageAlt };

  return {
    title: { absolute: fullTitle },
    description: pageDescription,
    alternates: {
      canonical: localizePath(path, locale),
      languages: hreflangAlternates(alternatePaths),
      types: { 'application/rss+xml': localizePath('/blog/rss.xml', locale) },
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: localizePath(path, locale),
      siteName: site.name,
      type,
      publishedTime,
      tags,
      authors: type === 'article' ? [site.url] : undefined,
      locale: OG_LOCALES[locale],
      alternateLocale: alternatePaths[alternate] ? [OG_LOCALES[alternate]] : undefined,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      creator: site.twitterHandle,
      images: [ogImage.url],
    },
  };
};

// Site-wide defaults for a language's root layout. Pages override title/description/alternates.
export const buildRootMetadata = (locale: Locale): Metadata => ({
  ...buildMetadata({ locale, path: '/' }),
  title: {
    default: getDictionary(locale).meta.title,
    template: `%s | ${site.name}`,
  },
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  metadataBase: new URL(site.url),
});
