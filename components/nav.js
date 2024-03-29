import { useEffect, useState } from "react"
import Link from 'next/link'
import styles from './styles/nav.module.scss'
import { motion } from "framer-motion"

export default function Nav({ title }) {
    // const [isTop, setIsTop] = useState(true)
    // const [isMobile, setIsMobile] = useState(false)
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
      let prevScrollPos = 0

      function scrollHandler() {
        let currScrollPos = window.scrollY
  
        currScrollPos > prevScrollPos ? setIsScrollDown(true) : setIsScrollDown(false)
        prevScrollPos = window.scrollY
      }

      window.addEventListener('scroll', scrollHandler)

  
      return function cleanup() {
        window.removeEventListener('scroll', scrollHandler)
        // window.removeEventListener('resize', screenSizeHandler)
      }
    }, [])

    
    const nav_desktop = {
        scrollUp: {
            opacity: 1,
        },
        scrollDown: {
            opacity: 0,
        }
    }

    const nav_mobile = {
        toggled: {
            display: 'flex',
            opacity: 1
        }, 
        untoggled: {
            opacity: 0,
            transitionEnd: { display: 'none' }
        }
    }

    return(
        <>
        <div 
            className={styles.nav_container}>
            <Link href='/'>
                <motion.h1
                      variants={nav_desktop}
                      initial='scrollUp'
                    animate={ isScrollDown ? 'scrollDown' : 'scrollUp' }>
                    TylerKim_design
                </motion.h1>
            </Link>
            <motion.ul 
                variants={nav_desktop}
                initial='scrollUp'
                animate={ isScrollDown ? 'scrollDown' : 'scrollUp' }
                className={styles.nav}>
                <Link href="/">
                    <li>
                        <a 
                        href="/"
                        className={ title === 'Home' ? styles.active_route : 'dummy' }>
                            Home
                        </a>
                    </li>
                </Link>
                <Link href="/about">
                    <li>
                        <a 
                        href="/about"
                        className={ title === 'About' ? styles.active_route : 'dummy' }>
                            About
                        </a>
                    </li>
                </Link>
                <Link href="/templates">
                    <li>
                        <a 
                        href="/templates"
                        className={ title === 'Templates' ? styles.active_route : 'dummy' }>
                            Templates
                        </a>
                    </li>
                </Link>
                <Link href="/documents">
                    <li>
                        <a 
                        href="/documents"
                        className={ title === 'Documents' ? styles.active_route : 'dummy' }>
                            Documents
                        </a>
                    </li>
                </Link>
            </motion.ul>
        </div>

        {/* Mobile Nav */}

        <Link href='/'><motion.h1
            variants={nav_desktop}
            initial='scrollUp'
            animate={ isScrollDown ? 'scrollDown' : 'scrollUp' }
            className={styles.logo_mobile}
            >
            TylerKim_design
        </motion.h1></Link>
        <img onClick={() => setIsToggled(prevState => !prevState)} className={styles.dropdown_btn} src={`/${isToggled ? 'close.svg' : 'menu.svg'}`}/>

        <motion.ul 
            className={styles.nav_mobile}
            variants={nav_mobile}
            initial='untoggled'
            animate={ isToggled ? 'toggled' : 'untoggled' }
            transition={{
                type: 'just',
                duration: 0.5
            }}
            >
                <Link href="/">
                    <li>
                        <a 
                        href="/"
                        className={ title === 'Home' ? styles.active_route : 'dummy' }>
                            Home
                        </a>
                    </li>
                </Link>
                <Link href="/about">
                    <li>
                        <a 
                        href="/about"
                        className={ title === 'About' ? styles.active_route : 'dummy' }>
                            About
                        </a>
                    </li>
                </Link>
                <Link href="/templates">
                    <li>
                        <a 
                        href="/templates"
                        className={ title === 'Templates' ? styles.active_route : 'dummy' }>
                            Templates
                        </a>
                    </li>
                </Link>
                <Link href="/documents">
                    <li>
                        <a 
                        href="/documents"
                        className={ title === 'Documents' ? styles.active_route : 'dummy' }>
                            Documents
                        </a>
                    </li>
                </Link>
            </motion.ul>
        </>
    )
}