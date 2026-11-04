import { site } from '@/data';

export const absoluteUrl = (path: string): string => new URL(path, site.url).toString();
