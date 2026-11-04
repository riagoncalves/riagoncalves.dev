import { Localized } from './Locale';

export interface Experience {
  company: string
  role: Localized
  period: Localized
  location?: Localized
  description?: Localized
  technologies?: string[]
  website?: string | null
}
