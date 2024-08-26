import type { NextPage } from 'next'

import Projects from '@data/projects.json'
import Skills from '@data/skills.json'
import Contacts from '@data/contacts.json'

import Project from '@interfaces/Project'
import Skill from '@interfaces/Skill'
import Contact from '@interfaces/Contact'

import AppHead from '@components/AppHead'
import ContactsWidget from '@components/ContactsWidget'
import SkillListItem from '@components/SkillListItem'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ProjectsList from '@/components/ProjectsList'

import scrollTo from '@utils/scrollTo'

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
      <Header />

      <main>
        <ContactsWidget contacts={contacts} />

        <section id='intro' className='relative min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center py-0 bg-space overflow-hidden'>
          <div className='max-w-screen-xl w-full text-center mx-auto px-8 2xl:px-0'>
            <div className='inline-block'>
              <h1 className='curtain py-4'>
                <span />
                Ricardo Gonçalves
              </h1>
            </div>
            <div className='flex justify-center items-center'>
              <p className='mt-4 curtain curtain--delayed italic'>
                <span />
                Nebula Navigator, Engineering Software Beyond the Stars
              </p>
            </div>
            <div>
              <button onClick={scrollTo('projects')} className='fade-in mt-8 px-4 py-2 bg-white text-black font-main font-bold hover:bg-black hover:text-white transition'>
                View my work
              </button>
            </div>
          </div>
          <span className='space' />
        </section>

        <ProjectsList projects={projects} />

        <section id='skills' className='pb-0'>
          <div className='max-w-screen-2xl w-full mx-auto text-center mb-32'>
            <h2>Skills</h2>
            <ul className='max-w-3xl pt-24 m-auto flex justify-center items-center flex-wrap'>
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
