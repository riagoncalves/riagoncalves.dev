import { titleize } from '@/utils'
import { Skill, SkillsData } from '@/types'
import { SkillListItem } from './SkillListItem'

interface Props {
  skills: SkillsData
}

export const SkillsList: React.FC<Props> = ({ skills }: Props) => {
  return (
    <section id='skills' className='pb-0'>
      <div className='max-w-screen-2xl w-full mx-auto text-center mb-32'>
        <h2>Skills</h2>
        <ul className='max-w-3xl pt-24 m-auto grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {Object.keys(skills).map((keyName: string, index: number) => {
            const title = titleize(keyName)
            const skillGroup = skills[keyName as keyof SkillsData]

            return (
              <li key={index}>
                <h3>{title}</h3>
                <ul className='max-w-3xl pt-4 m-auto flex justify-center items-start flex-wrap'>
                  {
                    skillGroup.map((skill: Skill, idx: number) => (
                      <SkillListItem key={idx} skill={skill} />
                    ))
                  }
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
