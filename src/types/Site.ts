import { Localized } from './Locale';

export interface Site {
  url: string
  name: string
  twitterHandle: string
  // Open Graph / social preview image, per language.
  image: Localized
  cv: string
  keywords: string[]
}
