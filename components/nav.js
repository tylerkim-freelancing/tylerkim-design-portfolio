import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from './icon'
import styles from './styles/nav.module.scss'

export default function Nav() {
  const { pathname } = useRouter()
  const links = [['/templates', 'Collection'], ['/about', 'About the project'], ['/documents', 'Documentation']]
  return <header className={styles.header}>
    <div className={styles.inner}>
      <Link href="/"><a className={styles.brand} aria-label="Portfolio Templates home"><span className={styles.mark} aria-hidden="true"><i/><i/><i/><i/></span><span>Portfolio Templates<span className={styles.byline}>A PROJECT BY HYUNBIN KIM</span></span></a></Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        {links.map(([href, label]) => <Link key={href} href={href}><a aria-current={pathname === href || (href === '/templates' && pathname === '/') ? 'page' : undefined}>{label}</a></Link>)}
      </nav>
      <a className={styles.portfolio} href="https://www.hyunbinkim.dev/">My portfolio <Icon name="arrow-up-right" size={15}/></a>
    </div>
  </header>
}
