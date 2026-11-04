'use client';

import Script from 'next/script';

export const NetlifyIdentityRedirect = () => {
  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.netlifyIdentity?.on('init', (user: unknown) => {
          if (!user) {
            window.netlifyIdentity?.on('login', () => {
              // /admin/ is the static Decap CMS page, not a Next.js route, so it needs a full page load.
              // eslint-disable-next-line @next/next/no-location-assign-relative-destination
              document.location.href = '/admin/';
            });
          }
        });
      }}
    />
  );
};

declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, callback: (payload?: unknown) => void) => void;
    };
  }
}
