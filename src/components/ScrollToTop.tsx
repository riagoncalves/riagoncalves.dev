'use client';

import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Locale } from '@/types';
import { getDictionary, scrollToTop } from '@/utils';

interface Props {
  locale: Locale
}

export const ScrollToTop: React.FC<Props> = ({ locale }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Fab
        onClick={scrollToTop}
        size='medium'
        aria-label={getDictionary(locale).common.scrollToTop}
        sx={{
          backgroundColor: 'rgba(7,5,13,0.85)',
          border: '1px solid rgba(0,240,255,0.5)',
          borderRadius: 0,
          color: 'var(--color-neon-cyan)',
          boxShadow: '0 0 12px rgba(0,240,255,0.2)',
          '&:hover': {
            backgroundColor: 'var(--color-neon-cyan)',
            borderColor: 'var(--color-neon-cyan)',
            color: '#000',
            boxShadow: '0 0 24px rgba(0,240,255,0.6)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
};
