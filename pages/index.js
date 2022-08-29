import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'
import Slideshow from '../components/slideshow'
import { readFile } from '../modules/fileServices'
import { useEffect, useState } from 'react'
import Img from '../components/img'
import Link from 'next/link'

export default function Home({ templates, keywords }) {
  const [isDesktop, setIsDesktop] = useState(true)
    
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
      <Layout title='Home'>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.title}>
              <span className='highlight'>The best</span> portfoilo website solution for you.
            </h1>
            <Slideshow templates={templates}/>
            <p>
              I am the best freelance developer/designer who can create a portfolio website for a <strong>cheaper</strong> price than your average grocery bill, 
              and deliver it to you <strong>faster</strong> than Amazon prime. Check out my templates which make that possible.
            </p>
            <div className={styles.button_container}>
              <Link href='/about'><button>Learn about templates</button></Link>
              <Link href='/templates'><button>Explore templates</button></Link>
            </div>
          </div>

          <div className={styles.intro_template}>
            <h1 className={styles.title}><span className='highlight'>Customizable</span> templates that you can use <span className='highlight'>on the go</span> that checks all the boxes.</h1>
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
            <br/>
            <br/>
            <Link href="/templates"><a>Learn More &rarr;</a></Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const templates = JSON.parse(await readFile('/data/template_slideshow.json'))
  const keywords = JSON.parse(await readFile('/data/keywords.json'))

  return {
    props: {
      templates,
      keywords
    }
  }
}