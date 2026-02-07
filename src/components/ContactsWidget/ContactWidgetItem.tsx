import Image from 'next/image';
import { Contact } from '@/types';

interface Props {
  contact: Contact
}

export const ContactWidgetItem: React.FC<Props> = ({ contact }: Props) => {
  if (!contact.active) {
    return null;
  }

  return (
    <li className='w-8 transition-scale m-2'>
      <a href={contact.link} target='_blank' rel='noreferrer' className='flex'>
        <div className='relative w-8 h-8'>
          <Image
            width={32}
            height={32}
            src={`/images/${contact.key}.svg`}
            alt={contact.name}
          />
        </div>
      </a>
    </li>
  );
};
