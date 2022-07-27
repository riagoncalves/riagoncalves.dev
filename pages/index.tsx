import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'



const Home: NextPage = () => {
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
            <Image src="/images/profile_pic.jpg"
                   width={150}
                   height={150}
                   alt="Profile Picture"
                   className="transition-scale border border-solid border-black rounded-full" />
            <h1>Ricardo Gonçalves</h1>
            <h2>Web Developer based in Lisbon</h2>
          </div>
          <div className="absolute w-screen h-1/5-screen bottom-0 left-0 bg-gradient-to-b from-transparent to-main"></div>
        </section>

        <section className="s-2 pb-20">
          <div className="max-w-screen-2xl w-full mx-auto text-center">
            <h1>Projects</h1>
            <ul className="flex justify-center flex-wrap items-start pt-12">
              <li className='px-5 max-w-full md:max-w-1/2 lg:max-w-1/3'>
                <div className='relative w-80 m-4 min-h-[180px] transition-scale'>
                  <Image layout='fill' objectFit="contain" src="/images/bot.jpg" alt="Bot" />
                </div>
                <p>Discord Bot</p>
                <div className="flex justify-center items-center pt-2.5">
                  <a href="http://shinobubot.com/" target="_blank" rel="noreferrer" className='transition-scale'>
                    <object data="/images/website.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                      Website
                    </object>
                  </a>
                  <a href="https://github.com/riagoncalves/shinobu" target="_blank" rel="noreferrer" className='transition-scale'>
                    <object data="/images/github.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                      Github
                    </object>
                  </a>
                </div>
              </li>
              <li className='px-5 max-w-full md:max-w-1/2 lg:max-w-1/3'>
                <div className='relative w-80 m-4 min-h-[180px] transition-scale'>
                  <Image layout='fill' objectFit="contain" src="/images/sarcastify.jpg" alt="Sarcastify" />
                </div>
                <p>Sarcastify Website</p>
                <div className="flex justify-center items-center pt-2.5">
                  <a href="https://sarcastify.riagoncalves.dev/" target="_blank" rel="noreferrer" className='transition-scale'>
                    <object data="/images/website.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                      Website
                    </object>
                  </a>
                  <a href="https://github.com/riagoncalves/sarcastify" target="_blank" rel="noreferrer" className='transition-scale'>
                    <object data="/images/github.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                      Github
                    </object>
                  </a>
                </div>
              </li>
              <li className='px-5 max-w-full md:max-w-1/2 lg:max-w-1/3'>
                <div className='relative w-80 m-4 min-h-[180px] transition-scale'>
                  <Image  layout='fill' objectFit="contain" src="/images/transfer.jpg" alt="Transfer" />
                </div>
                <p>Website Transfer Theme</p>
                <div className="flex justify-center items-center pt-2.5">
                  <a href="https://transfer-template.netlify.app/" target="_blank" rel="noreferrer" className='transition-scale'>
                    <object data="/images/website.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                      Website
                    </object>
                  </a>
                  <a href="https://github.com/riagoncalves/transfer-website-theme" target="_blank" rel="noreferrer" className='transition-scale'>
                    <object data="/images/github.svg" type="image/svg+xml" className='w-full px-2.5 pointer-events-none max-w-[40px]'>
                      Github
                    </object>
                  </a>
                </div>
              </li>
            </ul>

          </div>
      </section>
      </main>
    </div>
  )
}

export default Home
