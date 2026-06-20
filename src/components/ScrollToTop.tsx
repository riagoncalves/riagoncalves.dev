'use client';

import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollToTop = () => {
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
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        size='medium'
        aria-label='Scroll to top'
        sx={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          color: 'white',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'rgba(59,130,246,0.25)',
            borderColor: 'rgba(96,165,250,0.5)',
            boxShadow: '0 0 20px rgba(59,130,246,0.2)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
};
