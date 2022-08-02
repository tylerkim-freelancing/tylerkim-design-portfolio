import Layout from '../components/layout'
import styles from '../styles/pages/templates.module.scss'
import Card from '../components/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { readFile } from '../modules/fileServices'

export default function Templates({templates}) {
    const [isDesktop, setIsDesktop] = useState(true)
    
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
    
    return(
        <Layout title='Templates'>
            <div className={styles.container}>
              <div className={styles.intro}>
                <h1>The <span className='highlight'>most advanced</span> templates are here</h1>
                <p>
                  Feel free to explore the templates and see what you like. You can stick to the current theme of the template you are interested in, but you
                  can also change the theme by changing the color, fonts, and some layout to fit your taste. If you wanna learn more about how my templates
                  are more superior than the standard templates in the market, click the following. 
                </p>
                <br/>
                <Link href='/templates/about'><a>Learn more about my templates&rarr;</a></Link>
              </div>
                <div className={styles.gallery}>
                    {
                        templates.map((template, i) => <Card key={i} src={isDesktop ? template.src_desktop : template.src_mobile} name={template.name}/>)
                    }
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const templates = JSON.parse(await readFile('/data/templates.json'))

    return {
      props: {
        templates
      }
    }
  }