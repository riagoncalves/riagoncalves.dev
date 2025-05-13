'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactGA from 'react-ga4';
import { Suspense } from 'react';

const GA_ID = 'G-M59WH6EKQL';

function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ReactGA.initialize(GA_ID);
  }, [])

  useEffect(() => {
    const url = pathname + searchParams.toString();

    ReactGA.send({ hitType: 'pageview', page: url });
  }, [pathname, searchParams])

  return null;
}

export function AnalyticsProvider() {
  return (
    <Suspense>
      <Analytics />
    </Suspense>
  );
}
