import { AppProps } from 'next/app'
import { AppProvider } from '../contexts/App.context'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Audrey Febriany</title>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
