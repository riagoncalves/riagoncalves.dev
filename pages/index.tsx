import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Projects from '../data/projects.json'
import Skills from '../data/skills.json'
import Contacts from '../data/contacts.json'

interface HomePageProps {
  projects: {
    key: string,
    name: string,
    website?: string,
    github?: string,
  }[],
  skills: {
    key: string,
    name: string,
  }[],
  contacts: {
    key: string,
    link: string,
  }[],
}

export async function getStaticProps() {
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
        <title>Ricardo Gonçalves - Web Developer</title>
        <meta name="description" content="Web Developer based in Lisbon" />
        <meta name="keywords" content="HTML,CSS,Rails,JavaScript" />
        <meta name="author" content="Ricardo Gonçalves" />
        <meta property="og:title" content="Ricardo Gonçalves - Web Developer" />
        <meta property="og:description" content="Web Developer based in Lisbon" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Ricardo Gonçalves - Web Developer" />
        <meta property="og:image" content="/images/thumbnail.jpg" />

        <meta name="twitter:title" content="Ricardo Gonçalves" />
        <meta name="twitter:description" content="Web Developer based in Lisbon" />
        <meta name="twitter:image" content="/images/thumbnail.jpg" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <section className="relative h-screen bg-no-repeat bg-center bg-cover flex items-center justify-end bg-hero-pattern">
          <div className="max-w-screen-2xl w-full mx-auto text-right px-8 2xl:px-0">
            <div className='transition-scale w-36 h-36 relative ml-auto mr-0'>
              <Image src="/images/profile_pic.jpg"
                    layout='fill'
                    objectFit='contain'
                    alt="Profile Picture"
                    className="border border-solid border-black rounded-full" />
            </div>
            <h1>Ricardo Gonçalves</h1>
            <h2>Web Developer based in Lisbon</h2>
          </div>
          <div className="absolute w-screen h-1/5-screen bottom-0 left-0 bg-gradient-to-b from-transparent to-main"></div>
        </section>

        <section className="pb-20">
          <div className="max-w-screen-2xl w-full mx-auto text-center">
            <h1>Projects</h1>
            <ul className="flex justify-center flex-wrap items-start pt-12">
              {projects.map((project, index) => (
                <li key={index} className='px-5 max-w-full md:max-w-1/2 lg:max-w-1/3'>
                  <div className='relative w-80 m-4 min-h-[180px] transition-scale'>
                    <Image layout='fill' objectFit="contain" src={`/images/${project.key}.jpg`} alt={project.key} />
                  </div>
                  <p>{project.name}</p>
                  <div className="flex justify-center items-center pt-2.5">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noreferrer" className='transition-scale'>
                        <object data="/images/website.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                          Website
                        </object>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className='transition-scale'>
                      <object data="/images/github.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                        Github
                      </object>
                    </a>
                    )}  
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-0">
          <div className="max-w-screen-2xl w-full mx-auto text-center after:mt-32 after:h-[3px] after:block after:bg-divider">
            <h1>Skills</h1>
            <ul className="max-w-3xl pt-12 m-auto flex justify-center items-center flex-wrap">
              {skills.map((skill, index) => (
                <li key={index}>
                  <object data={`/images/${skill.key}.svg`} type="image/svg+xml" className='w-20 p-4 transition-scale'>
                    { skill.name }
                  </object>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="p-12">
        <div className="flex max-w-screen-2xl w-full mx-auto">
          <p>Contacts</p>
          <ul className="flex flex-1 justify-end">
            {contacts.map((contact, index) => (
              <li key={index} className="ml-5 w-8 transition-scale">
                <a href={contact.link} target="_blank" rel="noreferrer" className="flex">
                  <div className='relative w-8 h-8'>
                    <Image  layout='fill' objectFit="contain" src={`/images/${contact.key}.svg`} alt={contact.key} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home
