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
