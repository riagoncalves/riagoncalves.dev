import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer, ScrollToTop } from '@/components';
import { getAllPosts, getPostBySlug } from '@/utils/posts';
import { formatDate } from '@/utils';
import ContactsData from '@/data/contacts.json';

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  // `output: 'export'` requires at least one static path per dynamic route.
  // Fall back to a placeholder slug (which 404s via getPostBySlug below) so the
  // site still builds while there are no posts yet.
  if (posts.length === 0) return [{ slug: '_placeholder' }];

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div>
      <Header />

      <main>
        <article className='py-20'>
          <div className='max-w-screen-md w-full mx-auto px-4 sm:px-8'>
            <Link href='/blog' className='inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-10'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
              </svg>
              Back to blog
            </Link>

            <div className='text-center mb-12'>
              <span className='font-mono text-xs font-semibold tracking-widest text-blue-400/70'>
                {formatDate(post.date)}
              </span>
              <h1 className='text-4xl font-bold mt-4 mb-4'>{post.title}</h1>
              {post.tags.length > 0 && (
                <ul className='flex flex-wrap justify-center gap-2'>
                  {post.tags.map((tag) => (
                    <li key={tag} className='text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1'>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {post.cover && (
              <div className='relative w-full aspect-video rounded-xl overflow-hidden mb-12 border border-white/10'>
                <Image src={post.cover} alt='' fill className='object-cover' />
              </div>
            )}

            <div
              className='prose prose-invert prose-blue max-w-none'
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>
      </main>

      <Footer contacts={ContactsData} />
      <ScrollToTop />
    </div>
  );
}
