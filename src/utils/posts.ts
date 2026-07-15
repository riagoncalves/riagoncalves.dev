import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { Post, PostWithContent } from '@/types';

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

export function getAllPosts(): Post[] {
  return readPostSlugs()
    .map((fileName) => {
      const { data } = readPostFile(fileName);
      const slug = fileName.replace(/\.md$/, '');

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        draft: data.draft ?? false,
        tags: data.tags ?? [],
        cover: data.cover ?? undefined,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostWithContent | undefined> {
  const fileName = `${slug}.md`;
  if (!readPostSlugs().includes(fileName)) return undefined;

  const { data, content } = readPostFile(fileName);
  if (data.draft) return undefined;

  const processedContent = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    draft: data.draft ?? false,
    tags: data.tags ?? [],
    cover: data.cover ?? undefined,
    contentHtml: processedContent.toString(),
  };
}
