import Head from 'next/head'
import { useEffect } from 'react'

interface AppHeadProps {
  pageTitle?: string
}
const AppHead: React.FC<AppHeadProps> = ({ pageTitle }: AppHeadProps) => {
  const title = pageTitle !== undefined ? `${pageTitle} | ` : ''
  const fullTitle = `${title}Ricardo Gonçalves | Software Engineer`

  useEffect(() => {
    if (pageTitle !== undefined) {
      document.title = fullTitle
    }
  }, [pageTitle, fullTitle])

  const metadata = {
    description: 'Passionate Software Engineer',
    keywords: 'HTML, CSS, Ruby on Rails, React, JavaScript, TypeScript, PostgreSQL, web development, software engineering',
    author: 'Ricardo Gonçalves',
    canonicalUrl: 'https://riagoncalves.dev',
    image: '/images/thumbnail.jpg'
  }

  const ogProperties = {
    title: fullTitle,
    description: metadata.description,
    type: 'website',
    url: 'https://riagoncalves.dev',
    siteName: 'Ricardo Gonçalves | Software Engineer',
    image: metadata.image
  }

  const twitterProperties = {
    title: fullTitle,
    description: metadata.description,
    image: metadata.image
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name='description' content={metadata.description} />
      <meta name='keywords' content={metadata.keywords} />
      <meta name='author' content={metadata.author} />

      <meta property='og:title' content={ogProperties.title} />
      <meta property='og:description' content={ogProperties.description} />
      <meta property='og:type' content={ogProperties.type} />
      <meta property='og:url' content={ogProperties.url} />
      <meta property='og:site_name' content={ogProperties.siteName} />
      <meta property='og:image' content={ogProperties.image} />

      <meta name='twitter:title' content={twitterProperties.title} />
      <meta name='twitter:description' content={twitterProperties.description} />
      <meta name='twitter:image' content={twitterProperties.image} />

      <link rel='icon' href='/images/favicon.ico' />
      <link rel='canonical' href={metadata.canonicalUrl} />
    </Head>
  )
}

export default AppHead
