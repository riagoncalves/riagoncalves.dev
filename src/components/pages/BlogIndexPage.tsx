import type { Metadata } from 'next';
import { Header, BlogPostList, Footer, ScrollToTop, SectionHeading } from '@/components';
import { JsonLd } from '@/components/JsonLd';
import { Locale } from '@/types';
import { getDictionary } from '@/utils';
import { buildMetadata } from '@/utils/metadata';
import { getAllPosts } from '@/utils/posts';
import { blogStructuredData } from '@/utils/structuredData';

interface Props {
  locale: Locale
}

export const getBlogIndexMetadata = (locale: Locale): Metadata => {
  const t = getDictionary(locale);

  return buildMetadata({
    locale,
    path: '/blog',
    title: t.blog.title,
    description: t.meta.blogDescription,
  });
};

export const BlogIndexPage: React.FC<Props> = ({ locale }) => {
  const t = getDictionary(locale);
  const posts = getAllPosts(locale);

  return (
    <div>
      <JsonLd data={blogStructuredData(locale, posts)} />
      <Header locale={locale} />

      <main>
        <section className='py-20'>
          <div className='max-w-screen-lg w-full mx-auto px-4 sm:px-8'>
            <SectionHeading as='h1' title={t.blog.title} subtitle={t.blog.subtitle} />

            <BlogPostList posts={posts} locale={locale} />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop locale={locale} />
    </div>
  );
};
