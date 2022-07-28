import styles from '../../styles/pages/[template].module.scss'
import { readFile } from '../../module/fileServices'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Template({ template }) {
    const [isToggled, setIsToggled] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true)

    const modal = {
      on: {
        opacity: 1,
        display: 'flex'
      },
      off: {
        opacity: 0,
        transitionEnd: {
          display: 'none'
        }
      }
    }

    const setting_btn = {
      on: {
        opacity: 1,
        display: 'block'
      },
      off: {
        opacity: 0,
        transitionEnd: {
          display: 'none'
        }
      }
    }

    const view = {
      desktop: {
        width: '100%',
        height: '100%',
        borderRadius: '0px'
      },
      mobile: {
        width: '450px',
        height: '800px',
        borderRadius: '15px'
      }
    }

    const frame = {
      desktop: {
        display: 'none'
      },
      mobile: {
        display: 'flex'
      }
    }
    return(
        <div className={styles.container}>
          <motion.img 
            onClick={() => setIsToggled(true)} 
            className={styles.setting_btn} 
            src='/setting.svg'
            variants={setting_btn}
            initial='on'
            animate={ isToggled ? 'off' : 'on' }
            />

            <motion.div 
              className={styles.info}
              variants={modal}
              initial='on'
              animate={ isToggled ? 'on' : 'off' }
              >
                <img onClick={() => setIsToggled(false)} className={styles.close_btn} src='/close.svg'/>
                <h2>{ template.name }</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum in lacus et finibus. Maecenas lectus nunc, pellentesque et elit nec, blandit molestie tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eget dui ut erat congue finibus. Maecenas neque nibh, venenatis in tempus aliquam, luctus nec tortor.
                </p>
                <div className={styles.viewports}>
                  <img onClick={() => setIsDesktop(true)} className={styles.desktop} src={`/desktop${isDesktop ? '_active' : ''}.png`}/>
                  <img onClick={() => setIsDesktop(false)} className={styles.smartphone} src={`/smartphone${isDesktop ? '' : '_active'}.png`}/>
                </div>
                <Link href='/templates'><a>more templates&rarr;</a></Link>
            </motion.div>
            <motion.div 
              className={styles.template_container}
              variants={view}
              initial='desktop'
              animate={ isDesktop ? 'desktop' : 'mobile' }
              >
              <motion.div className={styles.mobile_top} variants={frame}></motion.div>
              <iframe className={styles.template} src={template.url}/>
              <motion.div className={styles.mobile_bottom} variants={frame}>
                <div></div>
              </motion.div>
            </motion.div>
        </div>
    )
}

export async function getStaticPaths() {
    let templates = JSON.parse(await readFile('/data/templates.json'))
  
    let paths = templates.map(p => p.name)
    paths = paths.map(p => ({
      params: {
        template: p
      }
    }))
  
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const templates = JSON.parse(await readFile('/data/templates.json'))
    const template = templates.find(t => t.name === params.template)
  
    return {
      props: {
        template
      }
    }
  }