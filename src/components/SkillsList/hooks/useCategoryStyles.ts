import { CategoryStyle } from '../types/CategoryStyle';

export const useCategoryStyles = (): Record<string, CategoryStyle> => ({
  frameworks: {
    text: 'text-blue-400/70',
    line: 'bg-blue-400/20',
    border: 'hover:border-blue-400/50',
    bg: 'hover:bg-blue-400/5',
    glow: 'hover:shadow-[0_8px_24px_rgba(96,165,250,0.2)]',
  },
  languages: {
    text: 'text-violet-400/70',
    line: 'bg-violet-400/20',
    border: 'hover:border-violet-400/50',
    bg: 'hover:bg-violet-400/5',
    glow: 'hover:shadow-[0_8px_24px_rgba(167,139,250,0.2)]',
  },
  databases: {
    text: 'text-emerald-400/70',
    line: 'bg-emerald-400/20',
    border: 'hover:border-emerald-400/50',
    bg: 'hover:bg-emerald-400/5',
    glow: 'hover:shadow-[0_8px_24px_rgba(52,211,153,0.2)]',
  },
  tools: {
    text: 'text-amber-400/70',
    line: 'bg-amber-400/20',
    border: 'hover:border-amber-400/50',
    bg: 'hover:bg-amber-400/5',
    glow: 'hover:shadow-[0_8px_24px_rgba(251,191,36,0.2)]',
  },
});
