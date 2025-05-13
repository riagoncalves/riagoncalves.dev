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
    <footer className='flex flex-col justify-center items-center px-4 pt-8 pb-20'>
      <div>
        <button onClick={scrollTo('intro')}>
          <div className='relative w-14 h-14 transition-scale'>
            <Image width={56} height={56} src='/images/logo-white.svg' alt='riagoncalves' />
          </div>
        </button>
      </div>

      <ul className='flex py-8'>
        {contacts.map((contact) => (
          contact.active && contact.key !== 'email' &&
            <li key={contact.key} className='px-4 sm:px-8'>
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
