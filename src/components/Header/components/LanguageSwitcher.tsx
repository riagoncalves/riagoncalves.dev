import Link from 'next/link';
import { Locale } from '@/types';
import { LOCALES, LOCALE_TAGS, getDictionary } from '@/utils';

interface Props {
  locale: Locale
  alternateHref: string
  onNavigate?: () => void
  className?: string
}

export const LanguageSwitcher: React.FC<Props> = ({ locale, alternateHref, onNavigate, className = '' }) => {
  const t = getDictionary(locale);

  return (
    <div role='group' aria-label={t.nav.changeLanguage} className={`flex items-center font-mono text-sm uppercase tracking-[0.2em] ${className}`}>
      {LOCALES.map((option, i) => {
        const isCurrent = option === locale;

        return (
          <span key={option} className='flex items-center'>
            {i > 0 && <span className='px-2 text-neon-pink/70' aria-hidden='true'>/</span>}
            {isCurrent ? (
              <span aria-current='true' className='text-neon-yellow'>{option}</span>
            ) : (
              <Link
                href={alternateHref}
                hrefLang={LOCALE_TAGS[option]}
                lang={LOCALE_TAGS[option]}
                title={getDictionary(option).common.languageName}
                onClick={onNavigate}
                className='text-gray-400 hover:text-neon-cyan hover:neon-text-cyan transition-colors'
              >
                {option}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};
