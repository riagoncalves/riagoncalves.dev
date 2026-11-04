'use client';

import { Locale } from '@/types';
import { getDictionary, scrollTo } from '@/utils';
import { CyberGrid } from './components/CyberGrid';

interface Props {
  locale: Locale
  name: string
  // Current employer, shown next to the role.
  company: string
}

export const Hero: React.FC<Props> = ({ locale, name, company }) => {
  const t = getDictionary(locale);

  return (
    <section id='intro' className='relative min-h-screen bg-main flex items-center overflow-hidden'>
      <CyberGrid />

      <div className='relative z-10 max-w-screen-xl w-full mx-auto px-8 2xl:px-0 py-32'>
        <p className='fade-in animation-delay-200 cursor-blink font-mono text-sm sm:text-base text-neon-cyan tracking-[0.3em] uppercase mb-5'>
          {'> '}{t.hero.greeting}
        </p>

        <h1 data-text={name} className='glitch flicker-in py-2 neon-text-pink'>
          {name}
        </h1>

        <div className='fade-in animation-delay-500 flex flex-wrap items-center gap-3 mt-4 mb-8 font-display uppercase tracking-widest'>
          <span className='text-base sm:text-xl text-gray-200 font-medium'>{t.hero.role}</span>
          <span className='font-mono text-neon-pink'>{'//'}</span>
          <span className='text-base sm:text-xl text-neon-yellow'>{company}</span>
        </div>

        <p className='fade-in animation-delay-700 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-10 border-l-2 border-neon-cyan/60 pl-5'>
          {t.hero.intro}
        </p>

        <div className='fade-in animation-delay-1000 flex flex-wrap gap-4'>
          <button onClick={scrollTo('projects')} className='btn-neon'>
            {t.hero.primaryCta}
          </button>
          <button onClick={scrollTo('contact')} className='btn-neon-outline'>
            {t.hero.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
};
