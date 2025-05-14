import Image from 'next/image'
import { scrollTo } from '@/utils'

export const Header = () => {
  return (
    <header className='absolute py-6 top-0 w-100 z-10'>
      <nav className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0'>
        <ul className='flex items-center'>
          <li className='flex-1'>
            <div className='relative w-10 h-10 transition-scale'>
              <Image width={40} height={40} src='/images/logo-white.svg' alt='riagoncalves' />
            </div>
          </li>
          <li className='pl-4 sm:pl-8'>
            <button onClick={scrollTo('projects')} className='font-bold text-white text-lmd'>
              Projects
            </button>
          </li>
          <li className='pl-4 sm:pl-8'>
            <button onClick={scrollTo('experience')} className='font-bold text-white text-lmd'>
              Experience
            </button>
          </li>
          <li className='pl-4 sm:pl-8'>
            <button onClick={scrollTo('skills')} className='font-bold text-white text-lmd'>
              Skills
            </button>
          </li>

          <li className='pl-4 sm:pl-8'>
            <a href='cv.pdf' className='font-bold text-white text-lmd'>
              Curriculum
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
