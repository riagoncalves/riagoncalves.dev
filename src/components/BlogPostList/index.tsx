import { Post } from '@/types';
import { DocumentIcon } from '@/components/icons';
import { BlogPostListItem } from './BlogPostListItem';

interface Props {
  posts: Post[]
}

export const BlogPostList: React.FC<Props> = ({ posts }: Props) => {
  if (posts.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center gap-4 text-center py-20 px-6 border border-dashed border-white/15 rounded-xl bg-white/5'>
        <div className='text-white/30'>
          <DocumentIcon />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-white mb-2'>No posts yet</h3>
          <p className='text-gray-400'>New articles are on the way — check back soon.</p>
        </div>
      </div>
    );
  }

  return (
    <ul className='flex flex-col gap-6'>
      {posts.map((post) => (
        <BlogPostListItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
