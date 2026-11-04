import type { MetadataRoute } from 'next';
import { LOCALES, localizePath, pagePaths, postPath, postPaths } from '@/utils';
import { hreflangAlternates } from '@/utils/metadata';
import { getAllPosts, getTranslation } from '@/utils/posts';
import { absoluteUrl } from '@/utils/url';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = ['/', '/blog'].flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(localizePath(path, locale)),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
      alternates: { languages: hreflangAlternates(pagePaths(path)) },
    }))
  );

  const posts = LOCALES.flatMap(getAllPosts).map((post) => ({
    url: absoluteUrl(postPath(post)),
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
    alternates: { languages: hreflangAlternates(postPaths(post, getTranslation(post))) },
  }));

  return [...pages, ...posts];
}
