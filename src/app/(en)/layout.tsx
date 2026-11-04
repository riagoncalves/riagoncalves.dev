import '../globals.css';
import type { Metadata } from 'next';
import { RootDocument } from '@/components/RootDocument';
import { buildRootMetadata } from '@/utils/metadata';

export const metadata: Metadata = buildRootMetadata('en');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale='en'>{children}</RootDocument>;
}
