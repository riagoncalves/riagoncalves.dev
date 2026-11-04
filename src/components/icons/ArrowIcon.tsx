interface Props {
  direction: 'left' | 'right'
  className?: string
}

const PATHS: Record<Props['direction'], string> = {
  left: 'M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18',
  right: 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3',
};

export const ArrowIcon: React.FC<Props> = ({ direction, className = 'w-4 h-4' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className={className} aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d={PATHS[direction]} />
  </svg>
);
