import Image from 'next/image';
import { titleize } from '@/utils';
import { Skill, SkillsData } from '@/types';
import { useCategoryStyles } from './hooks/useCategoryStyles';

interface Props {
  skills: SkillsData
}

export const SkillsList: React.FC<Props> = ({ skills }: Props) => {
  const categoryStyles = useCategoryStyles();

  return (
    <section id='skills' className='py-20'>
      <div className='max-w-4xl w-full mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Skills</h2>
          <p className='text-gray-400'>Technologies and tools I work with</p>
        </div>

        <div className='flex flex-col gap-12'>
          {Object.entries(skills).map(([key, skillGroup]) => {
            const styles = categoryStyles[key] ?? categoryStyles.frameworks;

            return (
              <div key={key}>
                <div className='flex items-center gap-4 mb-8'>
                  <span className={`text-xs font-mono uppercase tracking-widest shrink-0 ${styles.text}`}>
                    {titleize(key)}
                  </span>
                  <div className={`flex-1 h-px ${styles.line}`} />
                </div>

                <ul className='flex flex-wrap gap-3'>
                  {skillGroup.map((skill: Skill, i: number) => (
                    <li
                      key={skill.key}
                      className={`group flex flex-col items-center gap-2.5 p-4 w-24 bg-white/5 border border-white/10 rounded-2xl
                        ${styles.border} ${styles.bg} ${styles.glow}
                        hover:-translate-y-2 ${i % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'}
                        transition-all duration-200 cursor-default`}
                    >
                      <Image
                        src={`/images/skills/${skill.key}.svg`}
                        alt={skill.name}
                        width={36}
                        height={36}
                      />
                      <span className='text-xs text-gray-400 group-hover:text-white transition-colors duration-200 text-center leading-tight'>
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
