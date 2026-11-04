import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer, ScrollToTop, ChipList } from '@/components';
import { ArrowIcon } from '@/components/icons';
import { JsonLd } from '@/components/JsonLd';
import { Locale } from '@/types';
import { LOCALE_TAGS, formatDate, getDictionary, localizePath, otherLocale, postPath, postPaths } from '@/utils';
import { buildMetadata } from '@/utils/metadata';
import { getAllPosts, getPostBySlug, getTranslation } from '@/utils/posts';
import { blogPostStructuredData } from '@/utils/structuredData';

interface Props {
  slug: string
  locale: Locale
}

export const getBlogPostStaticParams = (locale: Locale) => {
  const posts = getAllPosts(locale);

  // `output: 'export'` requires at least one static path per dynamic route.
  // Fall back to a placeholder slug (which 404s via getPostBySlug below) so the
  // site still builds while there are no posts in this language yet.
  if (posts.length === 0) return [{ slug: '_placeholder' }];

  return posts.map((post) => ({ slug: post.slug }));
};

export const getBlogPostMetadata = async (slug: string, locale: Locale): Promise<Metadata> => {
  const post = await getPostBySlug(slug, locale);
  if (!post) return {};

  return buildMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    alternatePaths: postPaths(post, getTranslation(post)),
    type: 'article',
    publishedTime: post.date,
    tags: post.tags,
    image: post.cover,
  });
};

export const BlogPostPage = async ({ slug, locale }: Props) => {
  const post = await getPostBySlug(slug, locale);

  if (!post) notFound();

  const t = getDictionary(locale);
  const translation = getTranslation(post);
  // Without a translation, the language switcher goes to the other language's blog index.
  const alternateHref = translation ? postPath(translation) : localizePath('/blog', otherLocale(locale));

  return (
    <div>
      <JsonLd data={blogPostStructuredData(post, translation)} />
      <Header locale={locale} alternateHref={alternateHref} />

      <main>
        <article className='py-20'>
          <div className='max-w-screen-md w-full mx-auto px-4 sm:px-8'>
            <Link href={localizePath('/blog', locale)} className='inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-widest text-neon-cyan hover:neon-text-cyan transition mb-10'>
              <ArrowIcon direction='left' />
              {t.blog.backToBlog}
            </Link>

            <div className='text-center mb-12'>
              <span className='font-mono text-sm tracking-widest text-neon-yellow'>
                {formatDate(post.date, locale)}
              </span>
              <h1 className='text-3xl sm:text-4xl font-bold mt-4 mb-4 neon-text-cyan'>{post.title}</h1>
              <ChipList items={post.tags} tone='pink' className='justify-center' />
              {translation && (
                <p className='font-mono text-sm text-gray-400 mt-6'>
                  {t.blog.alsoAvailableIn}{' '}
                  <Link
                    href={alternateHref}
                    hrefLang={LOCALE_TAGS[translation.lang]}
                    className='text-neon-cyan! hover:neon-text-cyan transition'
                  >
                    {getDictionary(translation.lang).common.languageName}
                  </Link>
                </p>
              )}
            </div>

            {post.cover && (
              <div className='hud-frame relative w-full aspect-video mb-12 border border-neon-cyan/20'>
                <Image src={post.cover} alt='' fill className='object-cover' />
              </div>
            )}

            <div
              className='prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wider prose-a:text-neon-cyan prose-strong:text-white prose-code:font-mono prose-code:text-neon-yellow prose-blockquote:border-neon-pink prose-hr:border-neon-cyan/20'
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>
      </main>

      <Footer />
      <ScrollToTop locale={locale} />
    </div>
  );
};
