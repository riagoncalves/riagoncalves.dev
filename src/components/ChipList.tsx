type Tone = 'cyan' | 'pink';

interface Props {
  items: string[]
  tone?: Tone
  className?: string
}

const TONE_CLASSES: Record<Tone, string> = {
  cyan: 'text-neon-cyan/80 bg-neon-cyan/5 border-neon-cyan/25 hover:bg-neon-cyan/15 hover:border-neon-cyan/60',
  pink: 'text-neon-pink/90 bg-neon-pink/5 border-neon-pink/30 hover:bg-neon-pink/15 hover:border-neon-pink/60',
};

// Small mono "chips", used for technologies (cyan) and blog tags (pink).
export const ChipList: React.FC<Props> = ({ items, tone = 'cyan', className = '' }) => {
  if (!items.length) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 border transition ${TONE_CLASSES[tone]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
