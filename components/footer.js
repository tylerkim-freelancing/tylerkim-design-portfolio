import Link from 'next/link'
import Icon from './icon'
import styles from './styles/footer.module.scss'

export default function Footer() {
  return <footer className={styles.footer}>
    <div><Link href="/"><a className={styles.title}>Portfolio Templates</a></Link><p>Different expressions. Thoughtfully engineered.</p></div>
    <div className={styles.links}><a href="https://www.hyunbinkim.dev/">Hyunbin Kim <Icon name="arrow-up-right" size={14}/></a><a href="https://github.com/tylerkim-freelancing/tylerkim-design-portfolio">Source on GitHub <Icon name="arrow-up-right" size={14}/></a><span>Design & development by Hyunbin Kim</span></div>
  </footer>
}
