'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Locale } from '@/types';
import { getDictionary, localizePath, otherLocale, scrollTo, switchLocalePath } from '@/utils';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from './components/LanguageSwitcher';

interface NavItem {
  label: string
  href?: string
  external?: boolean
  onClick?: () => void
}

interface Props {
  locale: Locale
  // Where the language switcher points. Defaults to the same page in the other language.
  alternateHref?: string
}

export const Header: React.FC<Props> = ({ locale, alternateHref }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = getDictionary(locale);
  const homeHref = localizePath('/', locale);
  const blogHref = localizePath('/blog', locale);
  const isHome = pathname === homeHref;
  const languageHref = alternateHref ?? switchLocalePath(pathname, otherLocale(locale));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems: NavItem[] = isHome
    ? [
        { label: t.nav.projects, onClick: scrollTo('projects') },
        { label: t.nav.experience, onClick: scrollTo('experience') },
        { label: t.nav.skills, onClick: scrollTo('skills') },
        { label: t.nav.blog, href: blogHref },
        { label: t.nav.curriculum, href: '/cv.pdf', external: true },
      ]
    : [
        { label: t.nav.home, href: homeHref },
        { label: t.nav.blog, href: blogHref },
        { label: t.nav.curriculum, href: '/cv.pdf', external: true },
      ];

  const isActive = (item: NavItem) => !!item.href && !item.external && item.href !== homeHref && pathname.startsWith(item.href);

  const renderNavItem = (item: NavItem, className: string, onNavigate?: () => void) => {
    const activeClassName = isActive(item) ? 'text-neon-cyan neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan hover:neon-text-cyan';

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
        className={`${className} text-gray-300 hover:text-neon-cyan`}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header
      className={
        isHome
          ? 'absolute py-6 top-0 inset-x-0 z-50'
          : 'sticky top-0 py-6 w-full z-50 bg-main/80 backdrop-blur-md border-b border-neon-cyan/20'
      }
    >
      <div className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0 flex items-center justify-between'>
        {isHome ? (
          <button onClick={scrollTo('intro')} className='relative w-10 h-10 transition-scale z-50'>
            <Logo />
          </button>
        ) : (
          <Link href={homeHref} className='relative w-10 h-10 transition-scale z-50'>
            <Logo />
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className='hidden sm:flex items-center'>
          <ul className='flex items-center'>
            {navItems.map((item) => (
              <li key={item.label} className='pl-8'>
                {renderNavItem(item, 'font-mono text-sm uppercase tracking-[0.2em] transition-colors')}
              </li>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} alternateHref={languageHref} className='ml-8 pl-8 border-l border-neon-cyan/20' />
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className='sm:hidden z-50 text-neon-cyan p-2 focus:outline-none'
          onClick={toggleMenu}
          aria-label={t.nav.toggleMenu}
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
        <div className={`fixed inset-0 bg-main/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className='flex flex-col items-center justify-center h-full'>
            <ul className='flex flex-col items-center space-y-8 text-center'>
              {navItems.map((item) => (
                <li key={item.label}>
                  {renderNavItem(item, 'font-display font-bold text-2xl uppercase tracking-widest transition-colors', closeMenu)}
                </li>
              ))}
            </ul>
            <LanguageSwitcher locale={locale} alternateHref={languageHref} onNavigate={closeMenu} className='mt-12 text-lg' />
          </nav>
        </div>
      </div>
    </header>
  );
};
