import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga4';

function App ({ Component, pageProps }: AppProps): JSX.Element {
  ReactGA.initialize('G-M59WH6EKQL');

  return <Component {...pageProps} />
}
export default App
