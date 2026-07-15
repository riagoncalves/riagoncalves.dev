export interface Post {
  slug: string;
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
