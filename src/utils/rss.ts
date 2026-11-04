import { Locale } from '@/types';
import { site } from '@/data';
import { LOCALE_TAGS, getDictionary, localizePath, postPath } from './i18n';
import { getAllPosts } from './posts';
import { absoluteUrl } from './url';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const buildRssFeed = (locale: Locale): string => {
  const t = getDictionary(locale);

  const items = getAllPosts(locale).map((post) => {
    const url = absoluteUrl(postPath(post));

    return [
      '    <item>',
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      ...(post.date ? [`      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`] : []),
      `      <description>${escapeXml(post.description)}</description>`,
      ...post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`),
      '    </item>',
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escapeXml(`${t.blog.title} | ${site.name}`)}</title>`,
    `    <link>${absoluteUrl(localizePath('/blog', locale))}</link>`,
    `    <description>${escapeXml(t.meta.blogDescription)}</description>`,
    `    <language>${LOCALE_TAGS[locale]}</language>`,
    `    <atom:link href="${absoluteUrl(localizePath('/blog/rss.xml', locale))}" rel="self" type="application/rss+xml" />`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
};
