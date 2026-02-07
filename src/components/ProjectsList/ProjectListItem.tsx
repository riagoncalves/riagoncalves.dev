import { Project } from '@/types';

interface Props {
  project: Project
}

export const ProjectListItem: React.FC<Props> = ({ project }: Props) => {
  return (
    <li
      key={project.key}
      className='project-card'
      style={
        {
          backgroundImage: `url(/images/projects/${project.key}.jpg)`
        }
      }
    >
      <div className='z-10 relative text-left sm:pr-24 pb-8'>
        <h3>{project.name}</h3>
        <div className='pt-8'>
          <p>{project.description}</p>
          <small><strong>Technologies:</strong> {project.technologies.join(', ')}</small>
        </div>
        <div className='pt-4'>
          {project.website !== null && project.website !== '' && (
            <a
              href={project.website}
              target='_blank'
              rel='noreferrer'
              className='inline-block mt-4 px-4 py-2 mr-4 bg-main text-white rounded-lg hover:scale-105 transition'
            >
              Visit Website
            </a>
          )}
          {project.github !== null && project.github !== '' && (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='inline-block mt-4 px-4 py-2 bg-main text-white rounded-lg hover:scale-105 transition'
            >
              View Repository
            </a>
          )}
        </div>
      </div>
      <span className='project-card__overlay' />
    </li>
  );
};
