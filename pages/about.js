import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Icon from '../components/icon'
import templates from '../data/templates.json'
import styles from '../styles/pages/project.module.scss'

export default function About() {
  const [templateIndex, setTemplateIndex] = useState(0)
  const template = templates[templateIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setTemplateIndex(index => (index + 1) % templates.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return <Layout title="About the project" description="The design and engineering behind Portfolio Templates, a collection of six responsive portfolio experiences by Hyunbin Kim.">
    <div className={styles.container}>
      <div className={styles.eyebrow}>THE STORY BEHIND THE COLLECTION</div>
      <h1>One foundation.<br/><em>Six ways to stand out.</em></h1>
      <div className={styles.lead}><p>Portfolio Templates is a design and front-end development project exploring how the same creative work can take on a different identity through layout, typography, and color.</p><div className={styles.facts}><div><span>CREATOR</span><strong>Hyunbin Kim</strong></div><div><span>MY ROLE</span><strong>UI/UX design & development</strong></div><div><span>STACK</span><strong>Next.js · React · Contentful · Sass</strong></div><div><span>COLLECTION</span><strong>6 interactive portfolio templates</strong></div></div></div>
      <div className={styles.image}><img src={template.thumbnail_desktop} width="3840" height="2160" alt={`${template.name} portfolio template. ${template.description}`}/></div>
      <div className={styles.sections}>
        <section><span className={styles.eyebrow}>01 / THE IDEA</span><h2>Let the work take the lead.</h2><p>The project began as a template-based portfolio solution for creatives. This collection brings the design and engineering work into focus: six visual directions, a shared content approach, and a way to explore each experience before choosing a favorite.</p><p>Each demo uses the fictional creative John Doe, so the differences in composition, hierarchy, and interaction can speak for themselves.</p></section>
        <section><span className={styles.eyebrow}>02 / THE IMPLEMENTATION</span><h2>Content and presentation, decoupled.</h2><p>The individual template demos use Contentful to manage portfolio content separately from their Next.js front ends. This allows content to change without editing the page components.</p><p>The showcase reads its template catalog from a local JSON file and generates a preview route for every design. A consistent preview interface makes it easy to move between the collection and the live demos.</p></section>
        <section><span className={styles.eyebrow}>03 / THE EXPLORATION</span><h2>A small collection with range.</h2><p>From Cashmere’s editorial composition to Neumorphism’s soft surfaces, each template explores a different visual language. Responsive layouts and theme controls make the collection something to interact with, rather than simply look at.</p><p>The project combines visual design, React components, responsive Sass styles, static generation, and CMS integration in one end-to-end portfolio experience.</p></section>
      </div>
      <div className={styles.actions}><Link href="/templates"><a className={styles.primary}>Explore the collection <Icon name="arrow" size={17}/></a></Link><a href="https://github.com/tylerkim-freelancing/tylerkim-design-portfolio">View source on GitHub <Icon name="arrow-up-right" size={17}/></a></div>
    </div>
  </Layout>
}
