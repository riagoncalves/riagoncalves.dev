import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <div className="max-w-screen-2xl w-full mx-auto text-right">
            <Image src="/images/profile_pic.jpg"
                   width={150}
                   height={150}
                   alt="Profile Picture"
                   className="transition-transform ease-in-out duration-200 hover:scale-110 border border-solid border-black rounded-full" />
            <h1>Ricardo Gonçalves</h1>
            <h2>Web Developer based in Lisbon</h2>
          </div>
          <div className="absolute w-screen h-1/5-screen bottom-0 left-0 bg-gradient-to-b from-transparent to-main"></div>
        </section>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
