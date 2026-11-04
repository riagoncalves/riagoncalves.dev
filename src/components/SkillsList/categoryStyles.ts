import { SkillCategory } from '@/types';
import { CategoryStyle } from './types/CategoryStyle';

// Typed by category, so adding a category to SkillsData without a style is a compile error.
export const CATEGORY_STYLES: Record<SkillCategory, CategoryStyle> = {
  frameworks: {
    accent: 'var(--color-neon-cyan)',
    text: 'text-neon-cyan',
    line: 'bg-neon-cyan/30',
    border: 'hover:border-neon-cyan/60',
    bg: 'hover:bg-neon-cyan/5',
    glow: 'hover:shadow-[0_0_24px_rgba(0,240,255,0.25)]',
  },
  languages: {
    accent: 'var(--color-neon-pink)',
    text: 'text-neon-pink',
    line: 'bg-neon-pink/30',
    border: 'hover:border-neon-pink/60',
    bg: 'hover:bg-neon-pink/5',
    glow: 'hover:shadow-[0_0_24px_rgba(255,42,109,0.25)]',
  },
  databases: {
    accent: 'var(--color-neon-green)',
    text: 'text-neon-green',
    line: 'bg-neon-green/30',
    border: 'hover:border-neon-green/60',
    bg: 'hover:bg-neon-green/5',
    glow: 'hover:shadow-[0_0_24px_rgba(5,255,161,0.25)]',
  },
  ai: {
    accent: 'var(--color-neon-purple)',
    text: 'text-neon-purple',
    line: 'bg-neon-purple/30',
    border: 'hover:border-neon-purple/60',
    bg: 'hover:bg-neon-purple/5',
    glow: 'hover:shadow-[0_0_24px_rgba(185,103,255,0.25)]',
  },
  tools: {
    accent: 'var(--color-neon-yellow)',
    text: 'text-neon-yellow',
    line: 'bg-neon-yellow/30',
    border: 'hover:border-neon-yellow/60',
    bg: 'hover:bg-neon-yellow/5',
    glow: 'hover:shadow-[0_0_24px_rgba(252,238,10,0.25)]',
  },
};
