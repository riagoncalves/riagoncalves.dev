import type { Metadata } from 'next';
import { BlogPostPage, getBlogPostMetadata, getBlogPostStaticParams } from '@/components/pages';

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBlogPostStaticParams('pt');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getBlogPostMetadata(slug, 'pt');
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} locale='pt' />;
}
