import { Project } from '@/types';
import { GitHubIcon, ExternalLinkIcon } from '@/components/icons';
import { TechList } from '@/components/TechList';

interface Props {
  project: Project
  index: number
}

export const ProjectListItem: React.FC<Props> = ({ project, index }: Props) => {
  return (
    <li className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all duration-300'>
      <div className='flex items-start justify-between'>
        <span className='font-mono text-xs font-semibold tracking-widest text-blue-400/70'>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className='flex gap-3'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              aria-label='View repository'
              className='text-white/40 hover:text-white transition-colors duration-200'
            >
              <GitHubIcon />
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target='_blank'
              rel='noreferrer'
              aria-label='Visit website'
              className='text-white/40 hover:text-white transition-colors duration-200'
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className='text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-200'>
        {project.name}
      </h3>

      <p className='text-sm text-gray-400 leading-relaxed flex-1'>
        {project.description}
      </p>

      <TechList technologies={project.technologies} className='pt-2' />
    </li>
  );
};
