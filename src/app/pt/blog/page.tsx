import type { Metadata } from 'next';
import { BlogIndexPage, getBlogIndexMetadata } from '@/components/pages';

export const metadata: Metadata = getBlogIndexMetadata('pt');

export default function Blog() {
  return <BlogIndexPage locale='pt' />;
}
