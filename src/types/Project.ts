import { Localized } from './Locale';

export interface Project {
  key: string
  name: string
  description: Localized
  technologies: string[]
  website: string | null
  github: string | null
}
