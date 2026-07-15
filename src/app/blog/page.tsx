import type { Metadata } from 'next';
import { Header, BlogPostList, Footer, ScrollToTop } from '@/components';
import { getAllPosts } from '@/utils/posts';
import ContactsData from '@/data/contacts.json';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical posts on software engineering, Ruby on Rails, React and everything in between.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <Header />

      <main>
        <section className='py-20'>
          <div className='max-w-screen-lg w-full mx-auto px-4 sm:px-8'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl font-bold mb-4'>Blog</h1>
              <p className='text-gray-400'>Thoughts, notes and write-ups on software engineering</p>
            </div>

            <BlogPostList posts={posts} />
          </div>
        </section>
      </main>

      <Footer contacts={ContactsData} />
      <ScrollToTop />
    </div>
  );
}
