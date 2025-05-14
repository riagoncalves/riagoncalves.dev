import { titleize } from '@/utils'
import { Skill, SkillsData } from '@/types'
import { SkillListItem } from './SkillListItem'

interface Props {
  skills: SkillsData
}

export const SkillsList: React.FC<Props> = ({ skills }: Props) => {
  return (
    <section id='skills' className='py-24'>
      <div className='max-w-screen-xl w-full mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-24'>Skills</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
          {Object.entries(skills).map(([key, skillGroup], index) => (
            <li key={index}>
              <h3 className='text-xl font-semibold mb-6'>{titleize(key)}</h3>
              <ul className='flex flex-wrap justify-center gap-6'>
                {skillGroup.map((skill: Skill) => (
                  <SkillListItem key={skill.key} skill={skill} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
