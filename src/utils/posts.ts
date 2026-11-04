import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { Locale, Post, PostWithContent } from '@/types';
import { DEFAULT_LOCALE, LOCALES } from './i18n';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/posts');

function readPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];
  return fs.readdirSync(POSTS_DIRECTORY).filter((file) => file.endsWith('.md'));
}

function readPostFile(fileName: string) {
  const fullPath = path.join(POSTS_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

// Frontmatter is user-written YAML, so every field is validated rather than cast.
const isString = (value: unknown): value is string => typeof value === 'string';
const isLocale = (value: unknown): value is Locale => LOCALES.some((locale) => locale === value);
const optionalString = (value: unknown): string | undefined => (isString(value) && value ? value : undefined);

// YAML parses unquoted dates (as written by the CMS) into Date objects. Anything that
// isn't a valid date becomes '' so a typo can't break the sitemap or RSS feed.
const toDateString = (value: unknown): string => {
  const date = value instanceof Date ? value : isString(value) ? new Date(value) : undefined;

  return date && !Number.isNaN(date.getTime()) ? date.toISOString().slice(0, 10) : '';
};

function toPost(slug: string, data: Record<string, unknown>): Post {
  return {
    slug,
    lang: isLocale(data.lang) ? data.lang : DEFAULT_LOCALE,
    translation: optionalString(data.translation),
    title: optionalString(data.title) ?? slug,
    date: toDateString(data.date),
    description: optionalString(data.description) ?? '',
    draft: data.draft === true,
    tags: Array.isArray(data.tags) ? data.tags.filter(isString) : [],
    cover: optionalString(data.cover),
  };
}

function readAllPosts(): Post[] {
  return readPostSlugs()
    .map((fileName) => toPost(fileName.replace(/\.md$/, ''), readPostFile(fileName).data))
    .filter((post) => !post.draft);
}

export function getAllPosts(locale: Locale): Post[] {
  return readAllPosts()
    .filter((post) => post.lang === locale)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// The link only needs to be set on one side: a post is a translation of another
// if either one points at the other and they're written in different languages.
export function getTranslation(post: Post): Post | undefined {
  return readAllPosts().find((other) =>
    other.lang !== post.lang && (other.slug === post.translation || other.translation === post.slug)
  );
}

// Raw markdown body, for plain-text outputs like llms-full.txt.
export function getPostMarkdown(post: Post): string {
  return readPostFile(`${post.slug}.md`).content.trim();
}

export async function getPostBySlug(slug: string, locale: Locale): Promise<PostWithContent | undefined> {
  const fileName = `${slug}.md`;
  if (!readPostSlugs().includes(fileName)) return undefined;

  const { data, content } = readPostFile(fileName);
  const post = toPost(slug, data);
  if (post.draft || post.lang !== locale) return undefined;

  const processedContent = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    ...post,
    contentHtml: processedContent.toString(),
  };
}
