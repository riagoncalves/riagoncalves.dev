import Image from 'next/image';
import Link from 'next/link';
import { Locale, Post } from '@/types';
import { formatDate, getDictionary, postPath } from '@/utils';
import { ChipList } from '@/components/ChipList';
import { ArrowIcon } from '@/components/icons';

interface Props {
  post: Post
  locale: Locale
}

export const BlogPostListItem: React.FC<Props> = ({ post, locale }) => {
  const t = getDictionary(locale);

  return (
    <li className='hud-frame group bg-secondary/80 backdrop-blur-sm border border-neon-cyan/15 hover:border-neon-cyan/50 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all duration-300'>
      <Link href={postPath(post)} className='flex flex-col gap-3 p-6'>
        {post.cover && (
          <div className='relative aspect-video -mt-6 -mx-6 mb-2 w-[calc(100%+3rem)] overflow-hidden'>
            <Image src={post.cover} alt='' fill className='object-cover' />
          </div>
        )}

        <span className='font-mono text-sm tracking-widest text-neon-yellow'>
          {formatDate(post.date, locale)}
        </span>

        <h3 className='text-lg text-white group-hover:text-neon-cyan group-hover:neon-text-cyan transition-colors duration-200'>
          {post.title}
        </h3>

        <p className='text-base text-gray-400 leading-relaxed'>
          {post.description}
        </p>

        <ChipList items={post.tags} tone='pink' className='pt-1' />

        <span className='flex items-center gap-1.5 font-mono text-sm uppercase tracking-widest text-neon-cyan pt-2'>
          {t.blog.readPost}
          <ArrowIcon direction='right' className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
        </span>
      </Link>
    </li>
  );
};
