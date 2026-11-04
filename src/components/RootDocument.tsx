import { AnalyticsProvider } from '@/providers/AnalyticsProvider';
import { NetlifyIdentityRedirect } from '@/components/NetlifyIdentityRedirect';
import { Locale } from '@/types';
import { LOCALE_TAGS, fontVariables } from '@/utils';

interface Props {
  locale: Locale
  children: React.ReactNode
}

// Shared <html>/<body> for each language's root layout, so every page gets the right `lang`.
export const RootDocument: React.FC<Props> = ({ locale, children }) => (
  <html lang={LOCALE_TAGS[locale]} suppressHydrationWarning={true}>
    <body
      className={`${fontVariables} font-sans w-full p-0 m-0 bg-main antialiased`}
    >
      <div className='scanlines' aria-hidden='true' />
      <AnalyticsProvider />
      <NetlifyIdentityRedirect />
      {children}
    </body>
  </html>
);
