import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="montana design boilerplate" />
        <meta property="og:title" content="Tyler Kim | The Best Web Developer" />
        <meta property="og:description" content="I make the best personal websites that can grow in to a business" />
        <meta property="og:image" content="https://tylerkim-design-portfolio.vercel.app/api/images?title=profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
