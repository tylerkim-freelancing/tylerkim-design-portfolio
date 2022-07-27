import styles from './styles/slideshow.module.scss'
import { motion } from 'framer-motion'
import Img from './img'

export default function Slideshow({ thumbnails }) {
    return (
        <div className={styles.container}>
            <div className={styles.window_top}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.thumbnail_wrapper}>
                {
                    thumbnails.map((thumbnail, i) => 
                    <motion.div 
                        key={i} 
                        className={styles.thumbnail}
                        initial={{opacity: 0}}
                        animate={{opacity: [0, 1, 1, 0]}}
                        exit={{opacity: 0}}
                        transition={{
                            repeat: "Infinity",
                            repeatDelay: (thumbnails.length - 1) * 5 - 1,
                            duration: 6,
                            delay: (i)* 5,
                            type: 'just' 
                        }}
                        >
                        <Img src={`/images/template-thumbnails/${thumbnail}`} alt='template thumbnail' objectFit='contain'/>
                    </motion.div>)
                }
            </div>
            <div className={styles.window_bottom}></div>
        </div>
    )
}


