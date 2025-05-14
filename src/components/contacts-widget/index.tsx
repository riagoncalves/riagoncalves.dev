import { Contact } from '@/types'
import { ContactWidgetItem } from './ContactWidgetItem'

interface Props {
  contacts: Contact[]
}

export const ContactsWidget: React.FC<Props> = ({ contacts }: Props) => {
  return (
    <div className='bg-main hidden sm:inline-block fixed z-10 p-2 top-1/2 right-0 -translate-y-1/2 rounded-l-lg border border-white'>
      <ul className='flex flex-col'>
        {contacts.map((contact) => (
          <ContactWidgetItem key={contact.key} contact={contact} />
        ))}
      </ul>
    </div>
  )
}
