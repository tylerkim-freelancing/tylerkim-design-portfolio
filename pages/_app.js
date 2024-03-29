import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/logo_circle.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 
