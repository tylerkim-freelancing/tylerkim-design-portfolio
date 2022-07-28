import Layout from '../components/layout'
import styles from '../styles/pages/templates.module.scss'
import Card from '../components/card'
import { readFile } from '../module/fileServices'

export default function Templates({templates}) {
    
    return(
        <Layout title='Templates'>
            <div className={styles.container}>
                <div className={styles.gallery}>
                    {
                        templates.map((template, i) => <Card key={i} src={template.src} name={template.name}/>)
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