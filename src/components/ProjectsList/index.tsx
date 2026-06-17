import { Project } from '@/types';
import { ProjectListItem } from './ProjectListItem';

interface Props {
  projects: Project[]
}

export const ProjectsList: React.FC<Props> = ({ projects }: Props) => {
  return (
    <section id='projects' className='py-20'>
      <div className='max-w-screen-xl w-full mx-auto px-4 sm:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Projects</h2>
          <p className='text-gray-400'>Things I&apos;ve built and launched</p>
        </div>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <ProjectListItem key={project.key} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
