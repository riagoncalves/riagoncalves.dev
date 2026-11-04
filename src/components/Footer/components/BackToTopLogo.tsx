'use client';

import { Logo } from '@/components/Logo';
import { scrollToTop } from '@/utils';

// Scrolls to the top instead of to #intro, which only exists on the home page.
export const BackToTopLogo = () => (
  <button onClick={scrollToTop} className='transition-transform transform hover:scale-110'>
    <div className='relative w-16 h-16'>
      <Logo size={64} />
    </div>
  </button>
);
