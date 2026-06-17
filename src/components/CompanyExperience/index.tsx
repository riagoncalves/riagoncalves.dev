import React from 'react';
import { Experience } from '@/types';
import { CompanyExperienceItem } from './CompanyExperienceItem';

interface Props {
  experiences: Experience[]
}

export const CompanyExperience: React.FC<Props> = ({ experiences }) => {
  return (
    <section id='experience' className="bg-secondary w-full px-4 py-20">
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className='text-gray-400'>Where I&apos;ve worked and what I&apos;ve built</p>
        </div>

        <ol>
          {experiences.map((exp, i) => (
            <CompanyExperienceItem
              key={i}
              experience={exp}
              isCurrent={i === 0}
              isLast={i === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
