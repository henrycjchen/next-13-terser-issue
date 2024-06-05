import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import A from './class-a'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

App.getInitialProps = async () => ({})

new A()