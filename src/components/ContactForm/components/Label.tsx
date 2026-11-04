interface Props {
  htmlFor: string
  children: React.ReactNode
}

export const Label: React.FC<Props> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className='text-sm font-mono text-neon-pink uppercase tracking-[0.25em]'>
    {children}
  </label>
);
