import React from 'react';
import { Experience } from '@/types';
import { TechList } from '@/components/TechList';

interface Props {
  experience: Experience
  isCurrent: boolean
  isLast: boolean
}

export const CompanyExperienceItem: React.FC<Props> = ({ experience, isCurrent, isLast }) => {
  return (
    <li className='flex gap-6'>
      <div className='flex flex-col items-center shrink-0'>
        <div className='relative mt-1 shrink-0'>
          {isCurrent && (
            <span className='absolute -inset-1.5 rounded-full bg-blue-400/30 animate-ping' />
          )}
          <div className={`w-3 h-3 rounded-full border-2 border-blue-400 relative z-10 ${isCurrent ? 'bg-blue-400' : 'bg-secondary'}`} />
        </div>
        {!isLast && <div className='w-px flex-1 bg-white/10 mt-2' />}
      </div>

      <div className='flex-1 pb-12'>
        <span className='text-xs font-mono text-blue-400/70 tracking-widest'>{experience.period}</span>

        <h3 className='text-xl font-semibold text-white mt-1'>
          {experience.role}{' '}
          {experience.website
            ? <a href={experience.website} target='_blank' rel='noreferrer' className='!text-blue-400 hover:underline'>@ {experience.company}</a>
            : <span className='text-blue-400'>@ {experience.company}</span>
          }
        </h3>

        {experience.location && (
          <p className='text-sm text-gray-500 mt-1'>{experience.location}</p>
        )}

        {experience.description && (
          <p className='text-gray-300 leading-relaxed mt-4'>{experience.description}</p>
        )}

        {experience.technologies && (
          <TechList technologies={experience.technologies} className='mt-5' />
        )}
      </div>
    </li>
  );
};
