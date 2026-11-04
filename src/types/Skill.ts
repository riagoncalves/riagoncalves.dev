export interface Skill {
  key: string
  name: string
  level: number
}

export interface SkillsData {
  frameworks: Skill[]
  languages: Skill[]
  databases: Skill[]
  ai: Skill[]
  tools: Skill[]
}

export type SkillCategory = keyof SkillsData;
