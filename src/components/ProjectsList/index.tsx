import { Locale, Project } from '@/types';
import { getDictionary } from '@/utils';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectListItem } from './ProjectListItem';

interface Props {
  projects: Project[]
  locale: Locale
}

export const ProjectsList: React.FC<Props> = ({ projects, locale }) => {
  const t = getDictionary(locale);

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-screen-xl w-full mx-auto px-4 sm:px-8'>
        <SectionHeading index={1} title={t.projects.title} subtitle={t.projects.subtitle} />
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <ProjectListItem key={project.key} project={project} index={index} locale={locale} />
          ))}
        </ul>
      </div>
    </section>
  );
};
