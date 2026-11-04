import type { Metadata } from 'next';
import { HomePage } from '@/components/pages';
import { buildMetadata } from '@/utils/metadata';

export const metadata: Metadata = buildMetadata({ locale: 'pt', path: '/' });

export default function Home() {
  return <HomePage locale='pt' />;
}
