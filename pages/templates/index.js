import Layout from '../../components/layout'
import styles from '../../styles/pages/templates.module.scss'
import Card from '../../components/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { readFile } from '../../modules/fileServices'

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
                <h1>The <span className='highlight'>most advanced</span> templates are here.</h1>
                {/* <p>
                  Feel free to explore the templates and see what you like. You can stick to the current theme of the template you are interested in, but you
                  can also change the theme by changing the color, fonts, and some layout to fit your taste. If you wanna learn more about how my templates
                  are more superior than the standard templates in the market, click the following. 
                </p> */}
                  <ul>
                    <li>All the templates are serving the content of an imaginary artist named <strong>John Doe</strong>.</li>
                    <li>Basic package comes with <strong>Home</strong>, <strong>About</strong>, and <strong>Works</strong> pages.</li>
                    <li><strong>*Blog</strong> page is an additional feature you get when you upgrade your website.</li>
                    <li>You can change the color theme of the template by clicking <img alt="paint icon" src='/theme.png'/> button.</li>
                    <li>A new template will be launched <strong>every two weeks</strong>.</li>
                  </ul>
              </div>
                <div className={styles.gallery}>
                    {
                        templates.map((template, i) => template.isExample || <Card key={i} src={isDesktop ? template.src_desktop : template.src_mobile} name={template.name}/>)
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