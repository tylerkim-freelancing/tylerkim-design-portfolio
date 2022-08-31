import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'
import Slideshow from '../components/slideshow'
import { readFile } from '../modules/fileServices'
import { useEffect, useState } from 'react'
import Img from '../components/img'
import Link from 'next/link'
import Head from 'next/head'
import client from '../modules/contentfulClient'

export default function Home({ templates, keywords, metaData }) {
  const [isDesktop, setIsDesktop] = useState(true)
  const { ogTitle, ogDescription, ogImage } = metaData.fields
    
  useEffect(() => { 
      function screenSizeHandler() {
        if (window.innerWidth > 767) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
      }
      screenSizeHandler()
      window.addEventListener('resize', screenSizeHandler)

      return function cleanup() {
        window.removeEventListener('resize', screenSizeHandler)
      }
    })

  return (
    <>
      <Head>
        <meta name="description" content={ ogDescription } />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ ogTitle } />
        <meta property="og:description" content={ ogDescription } />
        <meta property="og:image" content={`https:${ogImage.fields.file.url}`} />
        <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:title" content={ ogTitle }/> 
        <meta name="twitter:description" content={ ogDescription } /> 
        <meta name="twitter:image" content={`https:${ogImage.fields.file.url}`} />
      </Head>
      <Layout title='Home'>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.title}>
              <span className='highlight'>The best</span> portfoilo website solution for you.
            </h1>
            <p>
              I am the best freelance developer/designer who can create a portfolio website that will make you look professional for a <strong>cheaper</strong> price than your average grocery bill, 
              and deliver it to you <strong>faster</strong> than Amazon prime.
            </p>
            <Slideshow templates={templates}/>
          </div>

          <div className={styles.intro_template}>
            <h1 className={styles.title}><span className='highlight'>Customizable</span> templates that you can use <span className='highlight'>on the go</span> that checks all the boxes.</h1>
            <p>
              I have thoughtfully designed my templates so they are <strong>ready</strong> to serve your contents with unique styles. I also packed them with 
              the latest <strong>essential features</strong> that all the modern websites are required to have.
            </p>
            <div className={styles.carousel_container}>
              <div className={styles.carousel}>
                {
                  templates.map((t, i) => 
                  <div key={i} className={styles.carousel_face}>
                    <div className={styles.windows_top}>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className={styles.carousel_img_container}>
                      <Img src={isDesktop ? t.src_desktop : t.src_mobile}/>
                    </div>
                    <div className={styles.windows_bottom}>
                    </div>
                  </div>
                )
                }
              </div>
            </div>
            <div className={styles.keywords_container}>
                {
                  keywords.map((keyword, i) =>
                  <div key={i} className={styles.keyword}> 
                  <h4 className={styles.subtitle}>
                    <span className='highlight'>&#10004;</span>&nbsp;{ keyword.name }
                  </h4>
                  <p>{ keyword.description }</p>
                  </div>)
                }
            </div>
            <div className={styles.button_container}>
              <Link href='/about'><button>Learn more &rarr;</button></Link>
              <Link href='/templates'><button>Explore templates &rarr;</button></Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const templates = JSON.parse(await readFile('/data/template_slideshow.json'))
  const keywords = JSON.parse(await readFile('/data/keywords.json'))
  const metaData = await client.getEntries({ content_type: 'metaTags', 'fields.page[match]': 'Home' })

  return {
    props: {
      templates,
      keywords,
      metaData: metaData.items[0]
    }
  }
}