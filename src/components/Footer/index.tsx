import { site } from '@/data';
import { BackToTopLogo } from './components/BackToTopLogo';
import { profileLinks } from '@/utils/contacts';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-main text-gray-300 py-12'>
      <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-neon-pink/70 to-transparent' aria-hidden='true' />
      <div className='max-w-screen-lg mx-auto flex flex-col items-center px-4'>
        <BackToTopLogo />

        <ul className='flex flex-wrap justify-center py-6 gap-x-8 gap-y-3'>
          {profileLinks.map((contact) => (
            <li key={contact.key} className='font-mono text-sm uppercase tracking-[0.2em]'>
              <a
                href={contact.link}
                target='_blank'
                rel='noreferrer'
                className='text-gray-300 transition-colors hover:text-neon-pink hover:neon-text-pink'
              >
                {contact.name}
              </a>
            </li>
          ))}
        </ul>

        <small className='font-mono text-xs text-gray-500 tracking-widest uppercase mt-4'>
          © {currentYear} {site.name}
        </small>
      </div>
    </footer>
  );
};
