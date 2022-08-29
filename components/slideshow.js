import styles from './styles/slideshow.module.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Img from './img'

export default function Slideshow({ templates }) {
    const [isDesktop, setIsDesktop] = useState(true)
    
    useEffect(() => { 
        function screenSizeHandler() {
          if (window.innerWidth > 767) {
              setIsDesktop(true)
          } else {
              setIsDesktop(false)
          }
        }
        screenSizeHandler()
        window.addEventListener('resize', screenSizeHandler)
  
        return function cleanup() {
          window.removeEventListener('resize', screenSizeHandler)
        }
      })

    return (
        <div className={styles.container}>
            <div className={styles.window_top}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.thumbnail_wrapper}>
                {
                    templates.map((template, i) => 
                    <motion.div 
                        key={i} 
                        className={styles.thumbnail}
                        initial={{opacity: 0}}
                        animate={{opacity: [0, 1, 1, 0]}}
                        exit={{opacity: 0}}
                        transition={{
                            repeat: "Infinity",
                            repeatDelay: (templates.length - 1) * 5 - 1,
                            duration: 6,
                            delay: (i)* 5,
                            type: 'just' 
                        }}
                        >
                        <Img src={template.src_desktop} alt='template thumbnail'/>
                    </motion.div>)
                }
            </div>
            <div className={styles.window_bottom}>
            </div>
        </div>
    )
}


