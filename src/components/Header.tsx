import Image from 'next/image';
import { useState } from 'react';
import { scrollTo } from '@/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollTo(section)();
  };

  return (
    <header className='absolute py-6 top-0 w-100 z-50'>
      <div className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0 flex items-center justify-between'>
        <div className='relative w-10 h-10 transition-scale z-50'>
          <Image width={40} height={40} src='/images/logo-white.svg' alt='riagoncalves' />
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden sm:block'>
          <ul className='flex items-center'>
            <li className='pl-8'>
              <button onClick={scrollTo('projects')} className='font-bold text-white text-lmd hover:text-gray-300 transition-colors'>
                Projects
              </button>
            </li>
            <li className='pl-8'>
              <button onClick={scrollTo('experience')} className='font-bold text-white text-lmd hover:text-gray-300 transition-colors'>
                Experience
              </button>
            </li>
            <li className='pl-8'>
              <button onClick={scrollTo('skills')} className='font-bold text-white text-lmd hover:text-gray-300 transition-colors'>
                Skills
              </button>
            </li>
            <li className='pl-8'>
              <a href='cv.pdf' className='font-bold text-white text-lmd hover:text-gray-300 transition-colors'>
                Curriculum
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className='sm:hidden z-50 text-white p-2 focus:outline-none'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className='flex flex-col items-center justify-center h-full'>
            <ul className='flex flex-col items-center space-y-8 text-center'>
              <li>
                <button
                  onClick={handleLinkClick('projects')}
                  className='font-bold text-white text-3xl hover:text-gray-300 transition-colors'
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={handleLinkClick('experience')}
                  className='font-bold text-white text-3xl hover:text-gray-300 transition-colors'
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={handleLinkClick('skills')}
                  className='font-bold text-white text-3xl hover:text-gray-300 transition-colors'
                >
                  Skills
                </button>
              </li>
              <li>
                <a
                  href='cv.pdf'
                  className='font-bold text-white text-3xl hover:text-gray-300 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Curriculum
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
