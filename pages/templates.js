import Layout from '../components/layout'
import styles from '../styles/pages/templates.module.scss'
import Card from '../components/card'
import { useState, useEffect } from 'react'
import { readFile } from '../module/fileServices'

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