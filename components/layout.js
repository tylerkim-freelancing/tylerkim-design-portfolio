import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children, title = 'Collection', description = 'Six distinct portfolio designs. A front-end project by Hyunbin Kim exploring responsive layouts, customizable themes, and content-driven experiences.' }) {
  const pageTitle = `${title} — Portfolio Templates`
  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://tylerkim-design-portfolio.vercel.app/images/templates/desktop/cashmere.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <a className="skip-link" href="#main">Skip to content</a>
    <Nav />
    <main id="main">{children}</main>
    <Footer />
  </>
}
