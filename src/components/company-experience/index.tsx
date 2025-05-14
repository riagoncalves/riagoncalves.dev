import React from 'react'
import { Experience } from '@/types'
import { CompanyExperienceItem } from './CompanyExperienceItem'

interface Props {
  experiences: Experience[]
}

export const CompanyExperience: React.FC<Props> = ({ experiences }) => {
  return (
    <section id='experience' className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white mb-24 text-center">Experience</h2>
      <ol className="relative border-l border-white/20 space-y-12">
        {experiences.map((exp, index) => (
          <CompanyExperienceItem key={index} experience={exp} />
        ))}
      </ol>
    </section>
  )
}
