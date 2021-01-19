import styles from './styles/nav.module.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [isToggled, setIsToggled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let prevScrollPos = 0
    function scrollHandler() {
      let currScrollPos = window.scrollY
      // console.log(currScrollPos, prevScrollPos)

      currScrollPos > prevScrollPos ? setIsScrolling(true) : setIsScrolling(false)
      prevScrollPos = window.scrollY

      // console.log(isScrolling)
    }
    window.addEventListener('scroll', scrollHandler)

    return function cleanup() {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const nav = {
    on: {
      transition: {
        staggerChildren: 0.1
      }
    },
    off: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const routes = {
    on: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    },
    off: {
      opacity: 0,
      x: 500,
      transition: { duration: 0.6 }
    }
  }

  const nav_mobile = {
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
    <motion.div 
      className={styles.nav}
      variants={nav}
      initial="on"
      animate={isScrolling ? "off" : "on"}>
      <h1 className={styles.logo}>IRON MIND</h1>
      <motion.div className={styles.route} variants={routes}><a href="#">Home</a></motion.div>
      <motion.div className={styles.route} variants={routes}><a href="#facility">Facilities</a></motion.div>
      <motion.div className={styles.route} variants={routes}><a href="#membership">Membership</a></motion.div>
      <motion.div className={styles.route} variants={routes}><a href="#contact">Contact</a></motion.div>
    </motion.div>

    {/* Mobile */}
    <div 
      className={styles.nav_mobile}>
      <img onClick={() => setIsToggled(!isToggled)} src="/icons/menu.svg"/>
      <h1 className={styles.logo_mobile}>IRON MIND</h1>
      <motion.div 
        className={styles.routers_mobile}
        variants={nav_mobile}
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