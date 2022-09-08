import styles from '../../styles/pages/[template].module.scss'
import { readFile } from '../../modules/fileServices'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import client from '../../modules/contentfulClient'
import Link from 'next/link'
import Head from 'next/head'

export default function Template({ template, metaData }) {
    const { ogTitle, ogDescription, ogImage } = metaData.fields

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
        x: 0,
        display: 'flex'
       },
      off: {
        x: -100,
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
        width: '350px',
        height: '600px',
        borderRadius: '15px',
        margin: '150px 0px 50px 0px'
      }
    }

    const frame = {
      desktop: {
        opacity: 0,
        transitionEnd:{
          display: 'none'
        }
      },
      mobile: {
        display: 'block',
        opacity: 1
      }
    }
    return(
      <>
      <Head>
        <title>Template | { template.name }</title>
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
        <div className={styles.container}>
          <motion.img 
            onClick={() => setIsToggled(true)} 
            className={styles.setting_btn} 
            src='/setting.png'
            alt='setting button'
            variants={setting_btn}
            initial='off'
            animate={ isToggled ? 'off' : 'on' }
            transition={{ type: 'just' }}
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
                  * You can change theme color through theme setting<br/>
                  * Actual website will behave more smoothly<br/>
                  * Blog page is not included in the basic package
                </p>
                {/* View  Ports */}
                <div style={{ display: isDesktop ? 'flex' : 'none' }} className={styles.viewports}>
                  <img alt='desktop icon' onClick={() => setIsMobile(false)} className={styles.desktop} src={`/desktop${isMobile ? '' : '_active'}.png`}/>
                  <img alt='mobile icon' onClick={() => setIsMobile(true)} className={styles.smartphone} src={`/smartphone${isMobile ? '_active' : ''}.png`}/>
                </div>
                {/* alert */}
                <p style={{ display: isDesktop ? 'none' : 'block' }} className={styles.alert}>*Cannot display the desktop view of the template on your current device. In order to see the desktop view, switch to a device with a bigger screen.</p>
                <Link href='/templates'><a href='/templates'>more templates&rarr;</a></Link>
            </motion.div>
            <motion.div 
              className={styles.template_container}
              variants={view}
              initial='desktop'
              animate={ isMobile ? 'mobile' : 'desktop' }
              transition={{ type: 'just' }}
              >
              <motion.img 
                className={styles.mobile_frame} 
                alt="mobile frame" 
                src="/mobile_frame.png"
                variants={frame}
                initial='desktop'
                animate={ isMobile ? 'mobile' : 'desktop' }
                />
              <iframe className={styles.template} src={template.url}/>
            </motion.div>
        </div>
      </>
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
    const metaData = await client.getEntries({ content_type: 'metaTags', 'fields.page[match]': 'Template', 'fields.ogTitle[match]': `Template | ${template.name}` })
  
    return {
      props: {
        template,
        metaData: metaData.items[0]
      }
    }
  }