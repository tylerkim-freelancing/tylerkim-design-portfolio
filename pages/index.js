import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'
import Slideshow from '../components/slideshow'
import { readFile } from '../modules/fileServices'
import Img from '../components/img'

export default function Home({ templates, hashtags }) {
  return (
    <>
      <Layout title='Home'>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.title}>My name is <span className='highlight'>Tyler Kim</span>, a web developer who creates the best <span className='highlight'>personal websites</span>.</h1>
            <Slideshow templates={templates}/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis quis neque tincidunt fringilla at a erat. In eu massa commodo, aliquam nisl a, pretium ex. Ut dignissim lacus ut aliquet dictum. Suspendisse convallis nisi quis nisi tincidunt, sit amet pulvinar orci facilisis. Quisque in lacus orci. Suspendisse in neque consequat, congue libero eget, tempor nisi. In fringilla ut erat vitae efficitur. Duis at leo sed nibh maximus pharetra. Ut eleifend iaculis magna, in tempus metus rhoncus eget. Vivamus urna elit, blandit sed vestibulum semper, placerat quis tortor. Nunc blandit neque sed nisl varius, a placerat lectus ultrices. Morbi vestibulum orci sed tortor venenatis lobortis.
            </p>
          </div>

          <div className={styles.efficiency}>
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
            <div className={styles.hashtag_container}>
                {
                  hashtags.map((hashtag, i) => <span key={i} className={styles.hashtag}>#{ hashtag.name }</span>)
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
  const hashtags = JSON.parse(await readFile('/data/hashtags.json'))

  return {
    props: {
      templates,
      hashtags
    }
  }
}