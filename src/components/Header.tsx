'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { scrollTo } from '@/utils';

interface NavItem {
  label: string
  href?: string
  external?: boolean
  onClick?: () => void
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems: NavItem[] = isHome
    ? [
        { label: 'Projects', onClick: scrollTo('projects') },
        { label: 'Experience', onClick: scrollTo('experience') },
        { label: 'Skills', onClick: scrollTo('skills') },
        { label: 'Blog', href: '/blog' },
        { label: 'Curriculum', href: 'cv.pdf', external: true },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Curriculum', href: 'cv.pdf', external: true },
      ];

  const isActive = (item: NavItem) => !!item.href && !item.external && item.href !== '/' && pathname.startsWith(item.href);

  const renderNavItem = (item: NavItem, className: string, onNavigate?: () => void) => {
    const activeClassName = isActive(item) ? 'text-white' : 'text-gray-300 hover:text-white';

    if (item.external) {
      return (
        <a href={item.href} className={`${className} ${activeClassName}`} onClick={onNavigate}>
          {item.label}
        </a>
      );
    }

    if (item.href) {
      return (
        <Link href={item.href} className={`${className} ${activeClassName}`} onClick={onNavigate}>
          {item.label}
        </Link>
      );
    }

    return (
      <button
        onClick={() => {
          item.onClick?.();
          onNavigate?.();
        }}
        className={`${className} text-white hover:text-gray-300`}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header
      className={
        isHome
          ? 'absolute py-6 top-0 w-100 z-50'
          : 'sticky top-0 py-6 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10'
      }
    >
      <div className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0 flex items-center justify-between'>
        {isHome ? (
          <button onClick={scrollTo('intro')} className='relative w-10 h-10 transition-scale z-50'>
            <Image width={40} height={40} src='/images/logo-white.svg' alt='riagoncalves' />
          </button>
        ) : (
          <Link href='/' className='relative w-10 h-10 transition-scale z-50'>
            <Image width={40} height={40} src='/images/logo-white.svg' alt='riagoncalves' />
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className='hidden sm:block'>
          <ul className='flex items-center'>
            {navItems.map((item) => (
              <li key={item.label} className='pl-8'>
                {renderNavItem(item, 'font-bold text-lmd transition-colors')}
              </li>
            ))}
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
              {navItems.map((item) => (
                <li key={item.label}>
                  {renderNavItem(item, 'font-bold text-3xl transition-colors', closeMenu)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
