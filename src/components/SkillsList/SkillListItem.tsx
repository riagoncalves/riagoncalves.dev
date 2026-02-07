import { Skill } from '@/types';

interface Props {
  skill: Skill
}

export const SkillListItem: React.FC<Props> = ({ skill }: Props) => {
  return (
    <li className='flex flex-col items-center w-20 sm:w-24 transition-transform hover:scale-105'>
      <div className='w-full aspect-square p-3 bg-secondary rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center'>
        <object
          data={`/images/skills/${skill.key}.svg`}
          type='image/svg+xml'
          className='w-full h-full'
          aria-label={skill.name}
        >
          {skill.name}
        </object>
      </div>
      <small className='mt-2 text-sm text-gray-200 text-center'>{skill.name}</small>
    </li>
  );
};
