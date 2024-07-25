import Skill from '../interfaces/Skill'

interface SkillListItemProps {
  skill: Skill
}

const SkillListItem: React.FC<SkillListItemProps> = ({ skill }: SkillListItemProps) => {
  return (
    <li key={skill.key} className='w-20 p-4 transition-scale'>
      <object data={`/images/${skill.key}.svg`} type='image/svg+xml' className='w-full h-full'>
        {skill.name}
      </object>
    </li>
  )
}

export default SkillListItem
