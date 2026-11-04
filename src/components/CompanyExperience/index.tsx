import React from 'react';
import { Experience, Locale } from '@/types';
import { getDictionary } from '@/utils';
import { SectionHeading } from '@/components/SectionHeading';
import { CompanyExperienceItem } from './CompanyExperienceItem';

interface Props {
  experiences: Experience[]
  locale: Locale
}

export const CompanyExperience: React.FC<Props> = ({ experiences, locale }) => {
  const t = getDictionary(locale);

  return (
    <section id='experience' className='bg-secondary w-full px-4 py-20'>
      <div className='max-w-4xl mx-auto'>
        <SectionHeading index={2} title={t.experience.title} subtitle={t.experience.subtitle} />

        <ol>
          {experiences.map((exp, i) => (
            <CompanyExperienceItem
              key={`${exp.company}-${exp.period.en}`}
              experience={exp}
              locale={locale}
              isCurrent={i === 0}
              isLast={i === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
