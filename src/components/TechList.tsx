interface Props {
  technologies: string[]
  className?: string
}

export const TechList: React.FC<Props> = ({ technologies, className = '' }) => {
  if (!technologies.length) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <li
          key={tech}
          className='text-xs px-3 py-1 bg-white/10 text-white/70 rounded-full border border-white/10 hover:bg-blue-600/30 transition'
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};
