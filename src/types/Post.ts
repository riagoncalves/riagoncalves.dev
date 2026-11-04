import { Locale } from './Locale';

export interface Post {
  slug: string;
  lang: Locale;
  // Slug of the same post in the other language, if one exists.
  translation?: string;
  title: string;
  date: string;
  description: string;
  draft: boolean;
  tags: string[];
  cover?: string;
}

export interface PostWithContent extends Post {
  contentHtml: string;
}
