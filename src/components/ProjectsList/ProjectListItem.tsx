import { Locale, Project } from '@/types';
import { getDictionary, localize } from '@/utils';
import { GitHubIcon, ExternalLinkIcon } from '@/components/icons';
import { ChipList } from '@/components/ChipList';

interface Props {
  project: Project
  index: number
  locale: Locale
}

export const ProjectListItem: React.FC<Props> = ({ project, index, locale }) => {
  const t = getDictionary(locale);

  return (
    <li className='hud-frame group bg-secondary/80 backdrop-blur-sm border border-neon-cyan/15 p-6 flex flex-col gap-4 hover:border-neon-cyan/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all duration-300'>
      <div className='flex items-start justify-between'>
        <span className='font-mono text-sm tracking-widest text-neon-pink'>
          {'[ '}{String(index + 1).padStart(2, '0')}{' ]'}
        </span>
        <div className='flex gap-3'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              aria-label={t.projects.viewRepository}
              className='text-white/40 hover:text-neon-cyan transition-colors duration-200'
            >
              <GitHubIcon />
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target='_blank'
              rel='noreferrer'
              aria-label={t.projects.visitWebsite}
              className='text-white/40 hover:text-neon-cyan transition-colors duration-200'
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className='text-lg text-white group-hover:text-neon-cyan group-hover:neon-text-cyan transition-colors duration-200'>
        {project.name}
      </h3>

      <p className='text-base text-gray-400 leading-relaxed flex-1'>
        {localize(project.description, locale)}
      </p>

      <ChipList items={project.technologies} className='pt-2' />
    </li>
  );
};
