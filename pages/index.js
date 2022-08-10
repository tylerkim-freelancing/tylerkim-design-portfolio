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
            <h1 className={styles.title}><span className='highlight'>The best</span> web developer who creates the best <span className='highlight'>portfolio websites</span>.</h1>
            <p>
              I am very passionate of designing the most efficient portfolio website for my clients, that they can start sharing their works
              without hassle and too much money, and they can also turn it into a business in the future by adding more features.
            </p>
            <Slideshow templates={templates}/>
          </div>

          <div className={styles.intro_template}>
            <h1 className={styles.title}>I build <span className='highlight'>templates</span> that you can use <span className='highlight'>on the go</span> with so many <span className='highlight'>goodies</span> right out of the box.</h1>
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
                    <div className={styles.img_container}>
                      <Img src={isDesktop ? t.src_desktop : t.src_mobile}/>
                    </div>
                    <div className={styles.windows_bottom}>
                      <div></div>
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
            <Link href="/templates"><a>view templates &rarr;</a></Link>
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