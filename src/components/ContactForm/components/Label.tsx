interface Props {
  htmlFor: string
  children: React.ReactNode
}

export const Label: React.FC<Props> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className='text-xs font-mono text-blue-400/70 uppercase tracking-widest'>
    {children}
  </label>
);
