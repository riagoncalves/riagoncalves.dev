import Image from 'next/image';
import { entriesOf, getDictionary } from '@/utils';
import { Locale, SkillsData } from '@/types';
import { SectionHeading } from '@/components/SectionHeading';
import { CATEGORY_STYLES } from './categoryStyles';

type HudStyle = React.CSSProperties & { '--hud': string };

interface Props {
  skills: SkillsData
  locale: Locale
}

export const SkillsList: React.FC<Props> = ({ skills, locale }) => {
  const t = getDictionary(locale);

  return (
    <section id='skills' className='py-20'>
      <div className='max-w-4xl w-full mx-auto px-4'>
        <SectionHeading index={3} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className='flex flex-col gap-12'>
          {entriesOf(skills).map(([category, skillGroup]) => {
            const styles = CATEGORY_STYLES[category];
            const hudStyle: HudStyle = { '--hud': styles.accent };

            return (
              <div key={category}>
                <div className='flex items-center gap-4 mb-8'>
                  <span className={`text-sm font-mono uppercase tracking-[0.25em] shrink-0 ${styles.text}`}>
                    {'> '}{t.skills.categories[category]}
                  </span>
                  <div className={`flex-1 h-px ${styles.line}`} />
                </div>

                <ul className='flex flex-wrap gap-3'>
                  {skillGroup.map((skill) => (
                    <li
                      key={skill.key}
                      style={hudStyle}
                      className={`hud-frame group flex flex-col items-center gap-2.5 p-4 w-24 bg-secondary/80 border border-white/10
                        ${styles.border} ${styles.bg} ${styles.glow}
                        hover:-translate-y-1 transition-all duration-200 cursor-default`}
                    >
                      <Image
                        src={`/images/skills/${skill.key}.svg`}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className='opacity-80 group-hover:opacity-100 transition-opacity duration-200'
                      />
                      <span className='font-mono text-xs text-gray-400 group-hover:text-white transition-colors duration-200 text-center leading-tight'>
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
