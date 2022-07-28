import styles from '../../styles/pages/[template].module.scss'
import { readFile } from '../../module/fileServices'
import Link from 'next/link'

export default function Template({ template }) {
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>{ template.name }</h2>
                <Link href='/templates'>Back to templates</Link>
            </div>
            <iframe className={styles.template} src={template.url}/>
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