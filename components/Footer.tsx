import Image from 'next/image'
import Contact from '../interfaces/Contact'
import scrollTo from '../utils/scrollTo'

interface FooterProps {
  contacts: Contact[]
}

const Footer: React.FC<FooterProps> = ({ contacts }: FooterProps) => {
  const currentYear: string = new Date().getFullYear().toString()

  return (
    <footer className='flex flex-col justify-center items-center px-4 pt-8 pb-20'>
      <div>
        <button onClick={scrollTo('intro')}>
          <div className='relative w-14 h-14 transition-scale'>
            <Image layout='fill' objectFit='contain' src='/images/logo-white.svg' alt='riagoncalves' />
          </div>
        </button>
      </div>

      <ul className='flex py-8'>
        {contacts.map((contact) => (
          contact.active && contact.key !== 'email' &&
            <li key={contact.key} className='px-8'>
              <a href={contact.link} target='_blank' rel='noreferrer'>
                {contact.name}
              </a>
            </li>
        ))}
      </ul>

      <small>© {currentYear} Ricardo Gonçalves</small>
    </footer>
  )
}

export default Footer
