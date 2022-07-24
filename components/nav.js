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

    //   function topHandler() {
    //     let currScrollPos = window.scrollY
  
    //     currScrollPos > 0 ? setIsTop(false) : setIsTop(true)
    //   }

    //   function screenSizeHandler() {
    //     if (window.innerWidth < 768) {
    //         setIsMobile(true)
    //     } else {
    //         setIsMobile(false)
    //     }
    // }
      window.addEventListener('scroll', scrollHandler)
    //   window.addEventListener('resize', screenSizeHandler)
  
      return function cleanup() {
        window.removeEventListener('scroll', scrollHandler)
        // window.removeEventListener('resize', screenSizeHandler)
      }
    }, [])

    
    const logo = {
        scrollUp: {
            opacity: 1
        },
        scrollDown: {
            opacity: 0
        }
    }

    const nav = {
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
        <div className={styles.nav_container}>
            <Link href='/'><motion.h1
                variants={logo}
                initial='scrollUp'
                animate={ isScrollDown ? 'scrollDown' : 'scrollUp' }
                >
                The Logo
            </motion.h1></Link>
            <ul className={styles.nav}>
                <Link href="/">
                    <li>
                        <a className={ title === 'Home' ? styles.active_route : 'dummy' }>
                            Home
                        </a>
                    </li>
                </Link>
                <Link href="/about">
                    <li>
                        <a className={ title === 'About' ? styles.active_route : 'dummy' }>
                            About
                        </a>
                    </li>
                </Link>
                <Link href="/works">
                    <li>
                        <a className={ title === 'Works' ? styles.active_route : 'dummy' }>
                            Works
                        </a>
                    </li>
                </Link>
            </ul>
        </div>

        {/* Mobile Nav */}
        <div className={styles.nav_mobile_container}>
            <Link href='/'><motion.h1
                variants={logo}
                initial='scrollUp'
                animate={ isScrollDown ? 'scrollDown' : 'scrollUp' }
                >
                THE CHAIRMAN
            </motion.h1></Link>
            <img onClick={() => setIsToggled(prevState => !prevState)} className={styles.dropdown_btn} src={`/${isToggled ? 'close.svg' : 'menu.svg'}`}/>
        </div>  
        <motion.ul 
            className={styles.nav_mobile}
            variants={nav}
            initial='untoggled'
            animate={ isToggled ? 'toggled' : 'untoggled' }
            transition={{
                type: 'just',
                duration: 0.5
            }}
            >
                <Link href="/">
                    <li>
                        <a className={ title === 'Home' ? styles.active_route : 'dummy' }>
                            Home
                        </a>
                    </li>
                </Link>
                <Link href="/about">
                    <li>
                        <a className={ title === 'About' ? styles.active_route : 'dummy' }>
                            About
                        </a>
                    </li>
                </Link>
                <Link href="/works">
                    <li>
                        <a className={ title === 'Works' ? styles.active_route : 'dummy' }>
                            Works
                        </a>
                    </li>
                </Link>
            </motion.ul>
        </>
    )
}