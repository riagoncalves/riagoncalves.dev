'use client';

import { scrollTo } from '@/utils';
import { AuroraBackground } from './components/AuroraBackground';

export const Hero = () => {
  return (
    <section id='intro' className='relative min-h-screen bg-black flex items-center overflow-hidden'>
      <div className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0 py-32'>

        <p className='fade-in animation-delay-200 font-mono text-sm text-blue-400/70 tracking-widest uppercase mb-5'>
          Hi, I&apos;m
        </p>

        <div className='inline-block'>
          <h1 className='curtain py-2'>
            <span />
            Ricardo Gonçalves
          </h1>
        </div>

        <div className='fade-in animation-delay-500 flex items-center gap-3 mt-3 mb-8'>
          <span className='text-xl sm:text-2xl text-gray-300 font-medium'>Software Engineer</span>
          <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0' />
          <span className='text-xl sm:text-2xl text-blue-400'>Reachdesk</span>
        </div>

        <p className='fade-in animation-delay-700 text-gray-400 text-lg leading-relaxed max-w-xl mb-10'>
          I build performant, scalable web applications with Ruby on Rails and React.
          10+ years turning complex problems into clean, maintainable solutions.
        </p>

        <div className='fade-in animation-delay-1000 flex flex-wrap gap-4'>
          <button
            onClick={scrollTo('projects')}
            className='px-6 py-3 bg-white text-black font-bold hover:bg-blue-400 hover:text-white transition-all duration-200'
          >
            View my work
          </button>
          <button
            onClick={scrollTo('contact')}
            className='px-6 py-3 border border-white/30 text-white font-bold hover:border-blue-400 hover:text-blue-400 transition-all duration-200'
          >
            Get in touch
          </button>
        </div>
      </div>

      <AuroraBackground />
    </section>
  );
};
