import { scrollTo } from '@/utils';

export const Hero = () => {
  return (
    <section id='intro' className='relative min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center !mt-0 bg-space overflow-hidden'>
      <div className='max-w-screen-xl w-full text-center mx-auto px-8 2xl:px-0'>
        <div className='inline-block'>
            <h1 className='curtain py-4'>
            <span />
            Ricardo Gonçalves
            </h1>
        </div>
        <div className='flex justify-center items-center'>
            <p className='mt-4 curtain curtain--delayed italic'>
            <span />
            Engineering Software Beyond the Stars
            </p>
        </div>
        <div>
          <button onClick={scrollTo('projects')} className='fade-in mt-8 px-4 py-2 bg-white text-black font-bold hover:bg-black hover:text-white transition'>
            View my work
          </button>
        </div>
      </div>
      <span className='space' />
    </section>
  );
};
