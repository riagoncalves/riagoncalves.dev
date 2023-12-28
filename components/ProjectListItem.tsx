import Project from '../interfaces/Project'

interface ProjectListItemProps {
  project: Project
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }: ProjectListItemProps) => {
  return (
    <li key={project.key} className='px-5 max-w-full md:max-w-1/2 lg:max-w-1/3'>
      <div className='relative w-80 m-4 min-h-[180px] transition-scale'>
        <img src={`/images/${project.key}.jpg`} alt={project.key} />
      </div>
      <p>{project.name}</p>
      <div className='flex justify-center items-center pt-2.5'>
        {project.website !== null && (
          <a href={project.website} target='_blank' rel='noreferrer' className='transition-scale'>
            <object
              data='/images/website.svg'
              type='image/svg+xml'
              className='w-full px-2.5 pointer-events-none max-w-[40px]'
            >
              Website
            </object>
          </a>
        )}
        {project.github !== null && (
          <a href={project.github} target='_blank' rel='noreferrer' className='transition-scale'>
            <object
              data='/images/github.svg'
              type='image/svg+xml'
              className='w-full px-2.5 pointer-events-none max-w-[40px]'
            >
              Github
            </object>
          </a>
        )}
      </div>
    </li>
  )
}

export default ProjectListItem
