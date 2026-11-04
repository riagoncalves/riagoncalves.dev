import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RootDocument } from '@/components/RootDocument';
import { site } from '@/data';
import { DEFAULT_LOCALE, LOCALES, LOCALE_TAGS, getDictionary, localizePath } from '@/utils';

export const metadata: Metadata = {
  title: `404 | ${site.name}`,
  robots: { index: false, follow: true },
};

// We can't tell which language the visitor wanted, so the page is shown in both.
export default function GlobalNotFound() {
  return (
    <RootDocument locale={DEFAULT_LOCALE}>
      <main className='min-h-screen flex flex-col items-center justify-center gap-12 px-6 text-center'>
        <h1 data-text='404' className='glitch text-7xl sm:text-9xl neon-text-pink'>404</h1>

        <div className='flex flex-col sm:flex-row gap-10 sm:gap-16'>
          {LOCALES.map((locale) => {
            const t = getDictionary(locale);

            return (
              <section key={locale} lang={LOCALE_TAGS[locale]} className='flex flex-col items-center gap-4'>
                <h2 className='text-xl sm:text-2xl neon-text-cyan'>{t.notFound.title}</h2>
                <p className='font-mono text-sm sm:text-base text-gray-400'>{t.notFound.description}</p>
                <Link href={localizePath('/', locale)} className='btn-neon-outline mt-2'>
                  {t.notFound.backHome}
                </Link>
              </section>
            );
          })}
        </div>
      </main>
    </RootDocument>
  );
}
