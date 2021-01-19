import styles from './styles/nav.module.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [isToggled, setIsToggled] = useState(false)

  const nav = {
    on: {
      height: 'auto',
      display: 'block',
      transition: { 
        duration: 0.3,
        ease: 'easeIn' 
      }
    },
    off: {
      height: 0,
      transition: { duration: 0.3 },
      transitionEnd: { display: 'none' }
    }
  }
  return (
    <>
    <div className={styles.nav}>
      <h1 className={styles.logo}>IRON MIND</h1>
      <div className={styles.route}><a href="#">Home</a></div>
      <div className={styles.route}><a href="#facility">Facilities</a></div>
      <div className={styles.route}><a href="#membership">Membership</a></div>
      <div className={styles.route}><a href="#contact">Contact</a></div>
    </div>

    {/* Mobile */}
    <div 
      className={styles.nav_mobile}>
      <img onClick={() => setIsToggled(!isToggled)} src="/icons/menu.svg"/>
      <h1 className={styles.logo_mobile}>IRON MIND</h1>
      <motion.div 
        className={styles.routers_mobile}
        variants={nav}
        initial="off"
        animate={isToggled ? 'on' : 'off'}
        onClick={() => setIsToggled(!isToggled)}>
        <div className={styles.route_mobile}><a href="#">Home</a></div>
        <div className={styles.route_mobile}><a href="#facility">Facilities</a></div>
        <div className={styles.route_mobile}><a href="#membership">Membership</a></div>
        <div className={styles.route_mobile}><a href="#contact">Contact</a></div>
      </motion.div>
    </div>
  </>
  );
} 