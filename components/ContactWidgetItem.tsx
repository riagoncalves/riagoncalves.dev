import Image from 'next/image'

import Contact from '../interfaces/Contact'

interface ContactListItemProps {
  contact: Contact
}

const ContactListItem: React.FC<ContactListItemProps> = ({ contact }: ContactListItemProps) => {
  return (
    <li className='w-8 transition-scale m-2'>
      <a href={contact.link} target='_blank' rel='noreferrer' className='flex'>
        <div className='relative w-8 h-8'>
          <Image
            layout='fill'
            objectFit='contain'
            src={`/images/${contact.key}.svg`}
            alt={contact.name}
          />
        </div>
      </a>
    </li>
  )
}

export default ContactListItem
