import styles from '../../styles/pages/[template].module.scss'
import { readFile } from '../../modules/fileServices'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Template({ template }) {
    const [isToggled, setIsToggled] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => { 
      function screenSizeHandler() {
        if (window.innerWidth > 1024) {
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
        borderRadius: '0px',
        margin: '0px 0px 0px 0px'
      },
      mobile: {
        width: '450px',
        height: '800px',
        borderRadius: '15px',
        margin: '50px 0px 50px 0px'
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
                {/* View  Ports */}
                <div style={{ display: isDesktop ? 'flex' : 'none' }} className={styles.viewports}>
                  <img onClick={() => setIsMobile(false)} className={styles.desktop} src={`/desktop${isMobile ? '' : '_active'}.png`}/>
                  <img onClick={() => setIsMobile(true)} className={styles.smartphone} src={`/smartphone${isMobile ? '_active' : ''}.png`}/>
                </div>
                {/* alert */}
                <p style={{ display: isDesktop ? 'none' : 'block' }} className={styles.alert}>*Cannot display the desktop view of the template on your current device. In order to see the desktop view, switch to a device with a bigger screen.</p>
                <Link href='/templates'><a>more templates&rarr;</a></Link>
            </motion.div>
            <motion.div 
              className={styles.template_container}
              variants={view}
              initial='desktop'
              animate={ isMobile ? 'mobile' : 'desktop' }
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