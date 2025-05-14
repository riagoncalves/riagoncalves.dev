import React from 'react'
import { Experience } from '@/types'

interface Props {
  experience: Experience
}

export const CompanyExperienceItem: React.FC<Props> = ({ experience }) => {
  return (
    <li className="ml-4 group">
      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1.5"></div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all group-hover:border-blue-500 group-hover:shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h3 className="text-xl font-semibold text-white">
            {experience.role} <span className="text-blue-400">@ {experience.company}</span>
          </h3>
          <span className="text-sm text-gray-400">{experience.period}</span>
        </div>

        {experience.location && (
          <p className="text-sm text-gray-400 italic mb-2">{experience.location}</p>
        )}

        <p className="text-gray-300 mb-4">{experience.description}</p>

        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-sm bg-white/10 text-white px-3 py-1 rounded-full border border-white/10 hover:bg-blue-600/30 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
