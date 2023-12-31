import type { NextPage } from 'next'
import Image from 'next/image'

import Projects from '../data/projects.json'
import Skills from '../data/skills.json'
import Contacts from '../data/contacts.json'

import Project from '../interfaces/Project'
import Skill from '../interfaces/Skill'
import Contact from '../interfaces/Contact'

import AppHead from '../components/AppHead'
import ContactsWidget from '../components/ContactsWidget'
import ProjectListItem from '../components/ProjectListItem'
import SkillListItem from '../components/SkillListItem'
import Footer from '../components/Footer'

import scrollTo from '../utils/scrollTo'

interface HomePageProps {
  projects: Project[]
  skills: Skill[]
  contacts: Contact[]
}

export async function getStaticProps (): Promise<{ props: HomePageProps }> {
  return {
    props: {
      projects: Projects,
      skills: Skills,
      contacts: Contacts
    }
  }
}

const Home: NextPage<HomePageProps> = ({ projects, skills, contacts }) => {
  return (
    <div>
      <AppHead />

      <header className='py-6 top-0 w-100'>
        <nav className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0'>
          <ul className='flex items-center'>
            <li className='flex-1'>
              <a href='#'>
                <div className='relative w-10 h-10 transition-scale'>
                  <Image layout='fill' objectFit='contain' src='/images/logo-white.svg' alt='riagoncalves' />
                </div>
              </a>
            </li>
            <li className='pl-8'>
              <button onClick={scrollTo('projects')} className='font-main font-bold text-white text-lmd'>
                Projects
              </button>
            </li>
            <li className='pl-8'>
              <button onClick={scrollTo('skills')} className='font-main font-bold text-white text-lmd'>
                Skills
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <ContactsWidget contacts={contacts} />

        <section id='intro' className='relative h-screen bg-no-repeat bg-center bg-cover flex items-center justify-end pt-0'>
          <div className='max-w-screen-xl w-full mx-auto px-8 2xl:px-0'>
            <div className='inline-block typewriter'>
              <h1 className='py-4'>Ricardo Gonçalves</h1>
            </div>
            <p className='italic'>
              Passionate Software Engineer
            </p>
          </div>
        </section>

        <section id='projects' className='pb-20'>
          <div className='max-w-screen-2xl w-full mx-auto text-center'>
            <h2>Projects</h2>
            <ul className='flex justify-center flex-wrap items-start pt-12'>
              {projects.map((project, index) => (
                <ProjectListItem key={index} project={project} />
              ))}
            </ul>
          </div>
        </section>

        <section id='skills' className='pb-0'>
          <div className='max-w-screen-2xl w-full mx-auto text-center mb-32'>
            <h2>Skills</h2>
            <ul className='max-w-3xl pt-12 m-auto flex justify-center items-center flex-wrap'>
              {skills.map((skill, index) => (
                <SkillListItem key={index} skill={skill} />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer contacts={contacts} />
    </div>
  )
}

export default Home
