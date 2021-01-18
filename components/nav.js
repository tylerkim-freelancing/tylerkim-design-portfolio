import styles from './styles/nav.module.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function scrollHandler() {
      window.scrollY === 0 ? setScrolled(false) : setScrolled(true)
    }

    window.addEventListener('scroll', scrollHandler)

    return function cleanup() {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const nav = {
    on: {
 
    },
    off: {

    }
  }

  const routes = {

  }
  return (
    <motion.div 
      className={styles.nav}
      variants={nav}
      initial="on"
      animate={scrolled ? 'off' : 'on'}>
      <h1 className={styles.logo}>IRON MIND</h1>
      <div className={styles.route}><a href="#">Home</a></div>
      <div className={styles.route}><a href="#facility">Facilities</a></div>
      <div className={styles.route}><a>Membership</a></div>
      <div className={styles.route}><a>Contact</a></div>
    </motion.div>
  );
}