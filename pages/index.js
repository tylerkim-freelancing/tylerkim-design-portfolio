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
              <span className='highlight'>The best</span> portfoilo website solution for you
            </h1>
            <p>
              I am the best freelance developer/designer who specializes in a portfolio website that will make you look <strong>professional</strong> and <strong>creative. </strong>
              I can build your premium website <strong>cheaper</strong>, <strong>better</strong>, and <strong>faster</strong> than any other freelancer.
            </p> 
            <Slideshow templates={templates}/>
          </div>

          <div className={styles.intro_template}>
            <h1 className={styles.title}>The <span className='highlight'>template-based</span> web development that checks <span className='highlight'>all</span> the boxes</h1>
            <p>
            I have prepared various templates which will become a boilerplate for your website to make it <strong>cheaper</strong>, <strong>better</strong>, and <strong>faster</strong>. 
            I have packed them with all the <strong>essential</strong> sections and features for a portfolio website, so you can use them right out of the box or <strong>customize</strong> them to fit your purpose perfectly.
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
          <div className={styles.upgradable}> 
              <h1 className={styles.title}>Ready for your <span className='highlight'>expansion</span></h1>
              <p>
              I know your idea and passion will keep growing. You've got yourself a portfolio website to start presenting your works, 
              and sometimes later, now you want to take it to the next level. It could be writing journals for subscription or selling 
              your goods/products from your website. I have prepared additional features that can easily integrate into your website to 
              support the expansion without breaking the design consistency. In addition, I will constantly update more powerful features in the future.
              </p>
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