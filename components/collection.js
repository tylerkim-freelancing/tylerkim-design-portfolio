import { useState } from 'react'
import Link from 'next/link'
import Layout from './layout'
import Icon from './icon'
import templates from '../data/templates.json'
import styles from '../styles/pages/collection.module.scss'

export default function Collection() {
  const [category, setCategory] = useState('All templates')
  const [view, setView] = useState('desktop')
  const visible = templates.filter(t => category === 'All templates' || t.category === category)
  return <Layout>
    <div className={styles.container}>
      <section className={styles.hero} aria-labelledby="collection-title">
        <div className={styles.eyebrow}><span/> THE PORTFOLIO COLLECTION <span className={styles.edition}>DESIGNED & BUILT BY HYUNBIN KIM</span></div>
        <div className={styles.heroBody}>
          <h1 id="collection-title">Six templates.<br/>Distinct <span>perspectives.</span></h1>
          <div className={styles.intro}><p>An exploration of how design shapes the way we share our work. Six portfolio templates, each with its own personality. All built to be explored.</p><Link href="/about"><a className={styles.textLink}>Behind the project <Icon name="arrow-up-right" size={16}/></a></Link></div>
        </div>
        <div className={styles.projectMeta}><span><Icon name="code" size={15}/> DESIGN + FRONT-END DEVELOPMENT</span><div>Next.js <i/> React <i/> Contentful <i/> Sass</div><span className={styles.metaEnd}>06 DESIGNS / ONE COLLECTION</span></div>
      </section>
      <section id="collection" aria-label="Template collection" className={styles.collection}>
        <div className={styles.collectionHeading}><div><span className={styles.sectionNumber}>01 /</span><h2>Explore the collection</h2><span className={styles.count}>{String(templates.length).padStart(2, '0')}</span></div><span className={styles.helper}>Choose a perspective. Make it your own.</span></div>
        <div className={styles.toolbar}>
          <div className={styles.filters} role="group" aria-label="Filter by design style">{['All templates', 'Editorial', 'Minimal', 'Expressive'].map(c => <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={category === c ? styles.selected : ''}>{c}{c === 'All templates' && <span>06</span>}</button>)}</div>
          <div className={styles.viewControls} role="group" aria-label="Thumbnail viewport"><span>PREVIEW</span>{['desktop', 'mobile'].map(v => <button key={v} aria-label={`${v === 'desktop' ? 'Desktop' : 'Mobile'} thumbnails`} aria-pressed={view === v} onClick={() => setView(v)}><Icon name={v} size={17}/></button>)}</div>
        </div>
        <p className="sr-only" role="status">{visible.length} templates shown</p>
        <div className={styles.grid}>
          {visible.map(t => <article key={t.name} className={styles.card}>
            <Link href={`/templates/${t.name}`}><a className={`${styles.preview} ${view === 'mobile' ? styles.mobile : ''}`} style={{'--preview-bg': t.background}} aria-label={`Explore ${t.name} template`}>
              <span className={styles.previewIndex}>{String(templates.indexOf(t) + 1).padStart(2, '0')} / {t.category}</span>
              <div className={styles.browser}><div className={styles.browserBar}><span><i/><i/><i/></span><span>{t.name.toLowerCase()}.portfolio</span><Icon name="arrow-up-right" size={10}/></div><img src={view === 'desktop' ? t.thumbnail_desktop : t.thumbnail_mobile} alt={`${t.name} portfolio ${view} preview`} loading={templates.indexOf(t) < 2 ? 'eager' : 'lazy'} width={view === 'desktop' ? 3840 : 390} height={view === 'desktop' ? 2160 : 844}/></div>
              <span className={styles.previewAction}>Explore template <Icon name="arrow-up-right" size={16}/></span>
            </a></Link>
            <div className={styles.cardTitle}><h3><Link href={`/templates/${t.name}`}><a>{t.name}</a></Link></h3><Link href={`/templates/${t.name}`}><a aria-label={`Open ${t.name} preview`} className={styles.cardArrow}><Icon name="arrow-up-right"/></a></Link></div>
            <p>{t.description}</p><ul className={styles.tags}>{t.tags.map(tag => <li key={tag}>{tag}</li>)}<li>Responsive</li></ul>
          </article>)}
        </div>
        <div className={styles.collectionNote}><span><span className={styles.dot}/> REAL WEBSITES, READY TO EXPLORE</span><p>Every preview is interactive. Switch devices and try the theme controls inside each template.<br/>Demo content features a fictional creative, John Doe.</p></div>
      </section>
      <section className={styles.underHood} aria-labelledby="engineering-title">
        <div className={styles.engineeringIntro}><span className={styles.eyebrow}>02 / BEYOND THE SURFACE</span><h2 id="engineering-title">Different on the outside.<br/><span>Thoughtful underneath.</span></h2><p>A visual collection, and a hands-on exploration of reusable front-end architecture.</p><Link href="/documents"><a className={styles.textLink}>Explore the implementation <Icon name="arrow-up-right" size={16}/></a></Link></div>
        <div className={styles.engineeringFeatures}>{[['01','Content-driven','Portfolio content lives in Contentful, separate from the presentation layer.'],['02','Responsive by design','Layouts adapt to the screen. Explore desktop and mobile views in the preview.'],['03','Room for personality','Distinct layouts and interactive color themes give the same content a different voice.']].map(([n,title,text]) => <div key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      </section>
      <section className={styles.return}><div><span>A PROJECT BY HYUNBIN KIM</span><h2>There’s more where this came from.</h2></div><a href="https://www.hyunbinkim.dev/">Back to my portfolio <Icon name="arrow-up-right" size={19}/></a></section>
    </div>
  </Layout>
}
