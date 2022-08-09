import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'
import Slideshow from '../components/slideshow'
import Link from 'next/link'
import { readFile } from '../modules/fileServices'
import Img from '../components/img'

export default function Home({ templates }) {
  return (
    <>
      <Layout title='Home'>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.title}>My name is <span className='highlight'>Tyler Kim</span>, a web developer who creates the best <span className='highlight'>personal websites</span>.</h1>
            <Slideshow templates={templates}/>
          </div>

          <div className={styles.efficiency}>
            <h1 className={styles.title}>I build <span className='highlight'>templates</span> that you can use <span className='highlight'>on the go</span> with so many benefits.</h1>
        </div>

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
                  <div>
                    <Img src={t.src_desktop}/>
                  </div>
                  <div className={styles.windows_bottom}>
                    </div>
                </div>
               )
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const templates = JSON.parse(await readFile('/data/template_slideshow.json'))

  return {
    props: {
      templates
    }
  }
}