import Project from '@/interfaces/Project'
import ProjectListItem from './ProjectListItem'

interface ProjecstListmProps {
  projects: Project[]
}

const ProjectsList: React.FC<ProjecstListmProps> = ({ projects }: ProjecstListmProps) => {
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

export default ProjectsList
