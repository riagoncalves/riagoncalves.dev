import Contact from '../interfaces/Contact'
import ContactWidgetItem from './ContactWidgetItem'

interface ContactsWidgetProps {
  contacts: Contact[]
}

const ContactsWidget: React.FC<ContactsWidgetProps> = ({ contacts }: ContactsWidgetProps) => {
  return (
    <div className='bg-main fixed z-10 p-2 top-1/2 right-0 -translate-y-1/2 rounded-l-lg border border-white'>
      <ul className='flex flex-col'>
        {contacts.map((contact) => (
          contact.active && <ContactWidgetItem key={contact.key} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

export default ContactsWidget
