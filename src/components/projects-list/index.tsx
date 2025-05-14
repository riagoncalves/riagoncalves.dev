import { Project } from '@/types'
import { ProjectListItem } from './ProjectListItem'

interface Props {
  projects: Project[]
}

export const ProjectsList: React.FC<Props> = ({ projects }: Props) => {
  return (
    <section id='projects' className='pb-20 flex justify-center items-center'>
      <div className='max-w-screen-2xl w-full mx-auto text-center'>
        <h2>Latest Projects</h2>
        <ul className='flex flex-col justify-center flex-wrap items-center pt-24 px-4'>
          {projects.map((project, index) => (
            <ProjectListItem key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  )
}
