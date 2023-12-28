import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Projects from '../data/projects.json'
import Skills from '../data/skills.json'
import Contacts from '../data/contacts.json'

import Project from '../interfaces/Project'
import Skill from '../interfaces/Skill'
import Contact from '../interfaces/Contact'

import ProjectListItem from '../components/ProjectListItem'
import SkillListItem from '../components/SkillListItem'
import ContactListItem from '../components/ContactListItem'

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
      <Head>
        <title>Ricardo Gonçalves - Web Developer | Lisbon</title>
        <meta name='description' content='Passionate Web Developer based in Lisbon.' />
        <meta name='keywords' content='HTML, CSS, Ruby on Rails, React, JavaScript, TypeScript, PostgreSQL, web development, software engineering' />
        <meta name='author' content='Ricardo Gonçalves' />

        <meta property='og:title' content='Ricardo Gonçalves - Web Developer | Lisbon' />
        <meta property='og:description' content='Passionate Web Developer based in Lisbon.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://riagoncalves.dev' />
        <meta property='og:site_name' content='Ricardo Gonçalves - Web Developer' />
        <meta property='og:image' content='/images/thumbnail.jpg' />

        <meta name='twitter:title' content='Ricardo Gonçalves - Web Developer | Lisbon' />
        <meta name='twitter:description' content='Passionate Web Developer based in Lisbon.' />
        <meta name='twitter:image' content='/images/thumbnail.jpg' />

        <link rel='icon' href='/images/favicon.ico' />
        <link rel='canonical' href='https://riagoncalves.dev' />
      </Head>

      <header className='py-6 fixed top-0 w-100'>
        <nav className='max-w-screen-2xl w-full mx-auto px-8 2xl:px-0'>
          <ul className='flex items-center'>
            <li className='flex-1'>
              <a href='#'>
                <div className='relative w-10 h-10 transition-scale'>
                  <Image layout='fill' objectFit='contain' src='/images/logo-white.svg' alt='riagoncalves' />
                </div>
              </a>
            </li>
            <li className='pl-8'>
              <a href='' className='font-main font-bold text-white text-lmd'>
                Projects
              </a>
            </li>
            <li className='pl-8'>
              <a href='' className='font-main font-bold text-white text-lmd'>
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className='relative h-screen bg-no-repeat bg-center bg-cover flex items-center justify-end'>
          <div className='max-w-screen-2xl w-full mx-auto px-8 2xl:px-0'>
            <div className='inline-block typewriter'>
              <h1 className='py-4'>Ricardo Gonçalves</h1>
            </div>
            <p className='italic'>
              <a href='https://www.google.com/maps/place/Portugal/@37.2219056,-18.8269796,5z/data=!3m1!4b1!4m5!3m4!1s0xb32242dbf4226d5:0x2ab84b091c4ef041!8m2!3d39.399872!4d-8.224454' target='_blank' rel='noreferrer' className='hover:italic'>
                Web Developer based in Portugal
              </a>
            </p>
          </div>
        </section>

        <section className='pb-20'>
          <div className='max-w-screen-2xl w-full mx-auto text-center'>
            <h2>Projects</h2>
            <ul className='flex justify-center flex-wrap items-start pt-12'>
              {projects.map((project, index) => (
                <ProjectListItem key={index} project={project} />
              ))}
            </ul>
          </div>
        </section>

        <section className='pb-0'>
          <div className='max-w-screen-2xl w-full mx-auto text-center after:mt-32 after:h-[3px] after:block after:bg-divider'>
            <h2>Skills</h2>
            <ul className='max-w-3xl pt-12 m-auto flex justify-center items-center flex-wrap'>
              {skills.map((skill, index) => (
                <SkillListItem key={index} skill={skill} />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className='p-12'>
        <div className='flex max-w-screen-2xl w-full mx-auto'>
          <p>Contacts</p>
          <ul className='flex flex-1 justify-end'>
            {contacts.map((contact, index) => (
              contact.active && (
                <ContactListItem key={index} contact={contact} />
              )
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home
