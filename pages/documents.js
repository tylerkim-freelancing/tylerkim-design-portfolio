import Link from 'next/link'
import Layout from '../components/layout'
import Icon from '../components/icon'
import styles from '../styles/pages/project.module.scss'

const sections = [
  ['overview', '01', 'Project architecture'],
  ['content', '02', 'Content & CMS'],
  ['structure', '03', 'Page structure'],
  ['preview', '04', 'Interactive previews'],
  ['running', '05', 'Run locally'],
]

export default function Documents() {
  return <Layout title="Documentation" description="A look at the architecture, content model, page structure, and live preview experience behind Portfolio Templates.">
    <div className={styles.container}>
      <div className={styles.eyebrow}>PROJECT NOTES / IMPLEMENTATION</div>
      <h1>Behind <em>the interface.</em></h1>
      <p className={styles.subtitle}>How the collection is organized, how content flows, and how to explore it.</p>
      <div className={styles.docs}>
        <aside><nav aria-label="Documentation sections">{sections.map(([id,n,label]) => <a key={id} href={`#${id}`}><span>{n}</span>{label}</a>)}</nav><a href="https://github.com/tylerkim-freelancing/tylerkim-design-portfolio">View repository <Icon name="arrow-up-right" size={15}/></a></aside>
        <div className={styles.docContent}>
          <section id="overview"><span className={styles.eyebrow}>01 / ARCHITECTURE</span><h2>A showcase and six live demos.</h2><p>This repository contains the collection website. Each template is hosted separately and displayed in an iframe on its preview route. The showcase uses Next.js Pages Router, React, and Sass modules.</p><div className={styles.flow}><span>Local template catalog</span><Icon name="arrow" size={17}/><span>Next.js showcase</span><Icon name="arrow" size={17}/><span>Live template demo</span></div><p>The catalog in <code>data/templates.json</code> defines names, preview images, style categories, descriptions, and demo URLs. Both the gallery and statically generated preview routes use that catalog.</p></section>
          <section id="content"><span className={styles.eyebrow}>02 / CONTENT & CMS</span><h2>Content independent of the layout.</h2><p>The template demos integrate with Contentful for portfolio content. The CMS holds the creative’s introduction, project information, imagery, and other page content. The template front end controls how that content is presented.</p><p>The collection itself uses local catalog data and page metadata, so building this repository does not require Contentful credentials. The externally hosted demos depend on their own hosting and CMS configuration.</p><figure><img src="/images/documents/contentful1.png" width="1200" height="650" loading="lazy" alt="Contentful editor showing the portfolio content model"/><figcaption>The Contentful editing experience used by the template projects.</figcaption></figure></section>
          <section id="structure"><span className={styles.eyebrow}>03 / PAGE STRUCTURE</span><h2>Familiar content. Individual expression.</h2><p>Templates share a core portfolio structure while interpreting it through different layouts.</p><dl className={styles.pageList}><div><dt>Home</dt><dd>An introduction and a selection of featured work.</dd></div><div><dt>About</dt><dd>A biography, recognition, and contact information.</dd></div><div><dt>Works</dt><dd>A browsable project gallery and individual project details.</dd></div><div><dt>Blog</dt><dd>A demo section for posts and long-form content, where available.</dd></div></dl><p>All preview content represents a fictional creative named John Doe.</p></section>
          <section id="preview"><span className={styles.eyebrow}>04 / INTERACTION</span><h2>Explore the real experience.</h2><p>Open any template to interact with its live demo. The preview toolbar switches between the available desktop width and a 390px mobile viewport. On smaller screens, the preview fits the device width.</p><p>Use the theme control inside the live template to experiment with its colors. The control belongs to each demo, so its appearance varies between designs. The “Open live site” link opens the demo directly.</p><Link href="/templates"><a className={styles.inlineLink}>Find a template to explore <Icon name="arrow" size={16}/></a></Link></section>
          <section id="running"><span className={styles.eyebrow}>05 / LOCAL DEVELOPMENT</span><h2>Explore the source.</h2><p>Use Node.js 24 (see .nvmrc). Install the project dependencies, then start the Next.js development server:</p><pre><code>{'npm ci\nnpm run dev'}</code></pre><p>Visit <code>http://localhost:3000</code>. For a production build, run <code>npm run build</code>, followed by <code>npm start</code>.</p><p>To add a template, add its details to <code>data/templates.json</code> and place its desktop and mobile thumbnails in <code>public/images/templates</code>. Use an existing style category (Editorial, Minimal, or Expressive). Rebuild to include the new template in the collection and preview routes.</p></section>
        </div>
      </div>
    </div>
  </Layout>
}
