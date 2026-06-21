import "./globals.css";
import type { Metadata } from 'next';
import { AnalyticsProvider } from "@/providers/AnalyticsProvider";
import { montserrat } from "@/utils";

const description = 'Software Engineer with 10+ years building scalable web applications. Specialising in Ruby on Rails and React. Currently Back End Engineer at Reachdesk.';

export const metadata: Metadata = {
  title: {
    default: 'Ricardo Gonçalves | Software Engineer',
    template: '%s | Ricardo Gonçalves'
  },
  description,
  keywords: [
    'Ricardo Gonçalves',
    'Software Engineer',
    'Back End Engineer',
    'Ruby on Rails',
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'PostgreSQL',
    'Docker',
    'web development',
    'remote engineer',
  ],
  authors: [{ name: 'Ricardo Gonçalves', url: 'https://riagoncalves.dev' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Ricardo Gonçalves | Software Engineer',
    description,
    url: 'https://riagoncalves.dev',
    siteName: 'Ricardo Gonçalves',
    images: [
      {
        url: '/images/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Ricardo Gonçalves — Software Engineer'
      }
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo Gonçalves | Software Engineer',
    description,
    creator: '@at_riagoncalves',
    images: ['/images/thumbnail.jpg']
  },
  icons: {
    icon: '/images/favicon.ico'
  },
  metadataBase: new URL('https://riagoncalves.dev')
};

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
