import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Icon from '../../components/icon'
import templates from '../../data/templates.json'
import styles from '../../styles/pages/[template].module.scss'

export default function Template({ template }) {
  const [view, setView] = useState('desktop')
  const [loaded, setLoaded] = useState(false)
  return <>
    <Head><title>{template.name} — Portfolio Templates</title><meta name="description" content={template.description}/><meta property="og:title" content={`${template.name} — Portfolio Templates`}/><meta property="og:description" content={template.description}/><meta property="og:image" content={`https://tylerkim-design-portfolio.vercel.app${template.src_desktop}`}/></Head>
    <div className={styles.container}>
      <header className={styles.toolbar}>
        <Link href="/templates"><a className={styles.back} aria-label="Back to collection"><Icon name="back" size={16}/><span>Collection</span></a></Link>
        <div className={styles.identity}><h1>{template.name}</h1><span>{template.tags.join(' / ')}</span></div>
        <div className={styles.viewports} role="group" aria-label="Live preview viewport">{['desktop','mobile'].map(v => <button key={v} aria-label={`${v === 'desktop' ? 'Desktop' : 'Mobile'} preview`} aria-pressed={view === v} onClick={() => setView(v)}><Icon name={v} size={17}/><span>{v === 'desktop' ? 'Desktop' : 'Mobile'}</span></button>)}</div>
        <a className={styles.open} href={template.url} target="_blank" rel="noopener noreferrer">Open live site <Icon name="arrow-up-right" size={15}/></a>
      </header>
      <main id="main" className={`${styles.stage} ${view === 'mobile' ? styles.mobile : ''}`}>
        {!loaded && <p className={styles.loading} role="status">Loading live preview…</p>}
        <div className={styles.frame}><iframe key={template.name} title={`${template.name} interactive portfolio template`} src={template.url} onLoad={() => setLoaded(true)} allowFullScreen/></div>
      </main>
      <footer className={styles.status}><span><i/>{view === 'mobile' ? 'MOBILE / UP TO 390 PX' : 'DESKTOP / FIT TO SCREEN'}</span><p>Try the theme control inside the demo to explore its colors.</p><details><summary>About this demo</summary><div><strong>{template.name}</strong><p>{template.description} Demo content features a fictional creative, John Doe.</p><p>This is an externally hosted website. If the preview is unavailable, <a href={template.url} target="_blank" rel="noopener noreferrer">open the live site directly ↗</a>.</p></div></details></footer>
    </div>
  </>
}

export function getStaticPaths() {
  return { paths: templates.map(t => ({params: {template: t.name}})), fallback: false }
}
export function getStaticProps({ params }) {
  const template = templates.find(t => t.name === params.template)
  return template ? { props: { template } } : { notFound: true }
}
