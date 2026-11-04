import '../globals.css';
import type { Metadata } from 'next';
import { RootDocument } from '@/components/RootDocument';
import { buildRootMetadata } from '@/utils/metadata';

export const metadata: Metadata = buildRootMetadata('pt');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale='pt'>{children}</RootDocument>;
}
