import React from 'react';
import { Experience, Locale } from '@/types';
import { localize } from '@/utils';
import { ChipList } from '@/components/ChipList';

interface Props {
  experience: Experience
  isCurrent: boolean
  isLast: boolean
  locale: Locale
}

export const CompanyExperienceItem: React.FC<Props> = ({ experience, isCurrent, isLast, locale }) => {
  return (
    <li className='flex gap-6'>
      <div className='flex flex-col items-center shrink-0'>
        <div className='relative mt-1.5 shrink-0'>
          {isCurrent && (
            <span className='absolute -inset-1.5 rotate-45 bg-neon-pink/40 animate-ping' />
          )}
          <div className={`w-3 h-3 rotate-45 border-2 relative z-10 ${isCurrent ? 'border-neon-pink bg-neon-pink shadow-[0_0_12px_rgba(255,42,109,0.8)]' : 'border-neon-cyan/70 bg-secondary'}`} />
        </div>
        {!isLast && <div className='w-px flex-1 bg-linear-to-b from-neon-cyan/50 to-neon-cyan/5 mt-2' />}
      </div>

      <div className='flex-1 pb-12'>
        <span className='font-mono text-sm text-neon-yellow tracking-widest'>{localize(experience.period, locale)}</span>

        <h3 className='text-lg sm:text-xl text-white mt-1'>
          {localize(experience.role, locale)}{' '}
          {experience.website
            ? <a href={experience.website} target='_blank' rel='noreferrer' className='text-neon-cyan! hover:neon-text-cyan transition'>@ {experience.company}</a>
            : <span className='text-neon-cyan'>@ {experience.company}</span>
          }
        </h3>

        {experience.location && (
          <p className='font-mono text-sm text-gray-500 mt-1'>{localize(experience.location, locale)}</p>
        )}

        {experience.description && (
          <p className='text-gray-300 leading-relaxed mt-4'>{localize(experience.description, locale)}</p>
        )}

        {experience.technologies && (
          <ChipList items={experience.technologies} className='mt-5' />
        )}
      </div>
    </li>
  );
};
