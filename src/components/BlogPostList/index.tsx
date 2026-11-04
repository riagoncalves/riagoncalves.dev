import { Locale, Post } from '@/types';
import { getDictionary } from '@/utils';
import { DocumentIcon } from '@/components/icons';
import { BlogPostListItem } from './BlogPostListItem';

interface Props {
  posts: Post[]
  locale: Locale
}

export const BlogPostList: React.FC<Props> = ({ posts, locale }) => {
  const t = getDictionary(locale);

  if (posts.length === 0) {
    return (
      <div className='hud-frame flex flex-col items-center justify-center gap-4 text-center py-20 px-6 border border-dashed border-neon-cyan/25 bg-secondary/60'>
        <div className='text-neon-cyan/50'>
          <DocumentIcon />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-white mb-2'>{t.blog.emptyTitle}</h3>
          <p className='font-mono text-gray-400'>{t.blog.emptyDescription}</p>
        </div>
      </div>
    );
  }

  return (
    <ul className='flex flex-col gap-6'>
      {posts.map((post) => (
        <BlogPostListItem key={post.slug} post={post} locale={locale} />
      ))}
    </ul>
  );
};
