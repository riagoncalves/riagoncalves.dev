import Image from 'next/image'

interface Contact {
  key: string
  link: string
}

interface ContactListItemProps {
  contact: Contact
}

const ContactListItem: React.FC<ContactListItemProps> = ({ contact }: ContactListItemProps) => {
  return (
    <li className='ml-5 w-8 transition-scale'>
      <a href={contact.link} target='_blank' rel='noreferrer' className='flex'>
        <div className='relative w-8 h-8'>
          <Image
            layout='fill'
            objectFit='contain'
            src={`/images/${contact.key}.svg`}
            alt={contact.key}
          />
        </div>
      </a>
    </li>
  )
}

export default ContactListItem
