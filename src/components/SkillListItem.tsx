import { Skill } from '@/types'

interface Props {
  skill: Skill
}

export const SkillListItem: React.FC<Props> = ({ skill }: Props) => {
  return (
    <li key={skill.key} className='p-4 w-1/4 max-w-28 transition-scale flex flex-col justify-center items-center'>
      <object data={`/images/skills/${skill.key}.svg`} type='image/svg+xml' className='w-full h-full'>
        {skill.name}
      </object>
      <small className='py-4'>
        {skill.name}
      </small>
    </li>
  )
}
