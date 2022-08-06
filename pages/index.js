import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'
import Slideshow from '../components/slideshow'
import { readFile } from '../modules/fileServices'

export default function Home({ templates }) {
  return (
    <>
      <Layout title='Home'>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1>My name is <span className='highlight'>Tyler Kim</span>, a web developer who creates the best <span className='highlight'>personal websites</span>.</h1>
            <p>
              Hello to the people with ambition, I am a web developer who creates a personal website with high performance and attractive design,
              which can be well used to promote yourself/products. I know you must have spent so many hours to plan and plan to build your idea into 
              something that will impress the crowd, and you probably just can't wait to bring it out to the world. 
              Listen, I as well have spent days and nights to come up with the best way to effeciently connect you and your target, and here I am, 
              being so excited to introduce you my very solution to you.
            </p>
            <br/>
            <br/>
            <a className={styles.more_btn}>read more&rarr;</a>
          </div>

          <div className={styles.slideshow_container}>
            <Slideshow templates={templates}/>
            <h1>Thoughtfully <span className='highlight'>designed</span> and <span className='highlight'>layed out</span> templates to <span className='highlight'>fit</span> your purpose.</h1>
            <p>
              What you see above are my pre-built templates to serve your purposes, and they are ready to transform into your own personal websites
              with just a little tweak of the theme. All of the templates come with the essential components that you can easily manage the content through 
              the dedicated control panel, and can be also added with additional components upon request. In addition, when you like to expand your 
              works into bigger scale such as a blog, journal or e-commerce, the templates can be upgraded with extra features to keep up with your desire. 
            </p>
            <br/>
            <br/>
            <a className={styles.more_btn}>see templates&rarr;</a>
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