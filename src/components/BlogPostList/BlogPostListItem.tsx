import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types';
import { formatDate } from '@/utils';

interface Props {
  post: Post
}

export const BlogPostListItem: React.FC<Props> = ({ post }: Props) => {
  return (
    <li className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/60 hover:bg-white/[0.07] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300'>
      <Link href={`/blog/${post.slug}`} className='flex flex-col gap-3 p-6'>
        {post.cover && (
          <div className='relative aspect-video -mt-6 -mx-6 mb-2 w-[calc(100%+3rem)]'>
            <Image src={post.cover} alt='' fill className='object-cover' />
          </div>
        )}

        <span className='font-mono text-xs font-semibold tracking-widest text-blue-400/70'>
          {formatDate(post.date)}
        </span>

        <h3 className='text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-200'>
          {post.title}
        </h3>

        <p className='text-sm text-gray-400 leading-relaxed'>
          {post.description}
        </p>

        {post.tags.length > 0 && (
          <ul className='flex flex-wrap gap-2 pt-1'>
            {post.tags.map((tag) => (
              <li key={tag} className='text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1'>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <span className='flex items-center gap-1.5 text-sm font-semibold text-blue-400 pt-2'>
          Read post
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
          </svg>
        </span>
      </Link>
    </li>
  );
};
