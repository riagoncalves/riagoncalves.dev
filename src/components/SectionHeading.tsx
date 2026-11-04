interface Props {
  title: string
  subtitle?: string
  index?: number
  as?: 'h1' | 'h2'
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, index, as: Heading = 'h2' }) => (
  <div className='text-center mb-16'>
    {index !== undefined && (
      <span className='block font-mono text-sm text-neon-pink tracking-[0.3em] mb-3'>
        {'// '}{String(index).padStart(2, '0')}
      </span>
    )}

    <Heading data-text={title} className='glitch glitch-hover text-3xl sm:text-4xl font-bold neon-text-cyan mb-4'>
      {title}
    </Heading>

    <div className='flex items-center justify-center gap-3 mb-4' aria-hidden='true'>
      <span className='h-px w-16 bg-linear-to-r from-transparent to-neon-cyan/70' />
      <span className='w-1.5 h-1.5 rotate-45 bg-neon-yellow' />
      <span className='h-px w-16 bg-linear-to-l from-transparent to-neon-cyan/70' />
    </div>

    {subtitle && (
      <p className='font-mono text-sm sm:text-base text-gray-400 tracking-wide'>{subtitle}</p>
    )}
  </div>
);
