'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Contact } from '@/types'
import { scrollTo } from '@/utils'

interface Props {
  contacts: Contact[]
}

export const Footer: React.FC<Props> = ({ contacts }: Props) => {
  const [currentYear, setCurrentYear] = useState<string>('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, [])

  return (
    <footer className='bg-secondary text-gray-300 py-12'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center px-4'>
        <button onClick={scrollTo('intro')} className='transition-transform transform hover:scale-110'>
          <div className='relative w-16 h-16'>
            <Image width={64} height={64} src='/images/logo-white.svg' alt='riagoncalves' />
          </div>
        </button>

        <ul className='flex flex-wrap justify-center py-6 space-x-6'>
          {contacts.map((contact) => (
            contact.active && contact.key !== 'email' &&
            <li key={contact.key} className='text-lg'>
              <a
                href={contact.link}
                target='_blank'
                rel='noreferrer'
                className='transition-colors hover:text-white'
              >
                {contact.name}
              </a>
            </li>
          ))}
        </ul>

        <small className='text-sm text-gray-400 mt-4'>
          © {currentYear} Ricardo Gonçalves
        </small>
      </div>
    </footer>
  )
}
