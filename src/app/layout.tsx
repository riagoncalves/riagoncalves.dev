import "./globals.css";
import type { Metadata } from 'next'
import { AnalyticsProvider } from "@/providers/AnalyticsProvider";
import { montserrat } from "@/utils";

export const metadata: Metadata = {
  title: {
    default: 'Ricardo Gonçalves | Software Engineer',
    template: '%s | Ricardo Gonçalves | Software Engineer'
  },
  description: 'Passionate Software Engineer',
  keywords: [
    'HTML',
    'CSS',
    'Ruby on Rails',
    'React',
    'JavaScript',
    'TypeScript',
    'PostgreSQL',
    'web development',
    'software engineering'
  ],
  authors: [{ name: 'Ricardo Gonçalves', url: 'https://riagoncalves.dev' }],
  openGraph: {
    title: 'Ricardo Gonçalves | Software Engineer',
    description: 'Passionate Software Engineer',
    url: 'https://riagoncalves.dev',
    siteName: 'Ricardo Gonçalves | Software Engineer',
    images: [
      {
        url: '/images/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Ricardo Gonçalves'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo Gonçalves | Software Engineer',
    description: 'Passionate Software Engineer',
    images: ['/images/thumbnail.jpg']
  },
  icons: {
    icon: '/images/favicon.ico'
  },
  metadataBase: new URL('https://riagoncalves.dev')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.className} w-full p-0 m-0 bg-main antialiased`}
      >
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
