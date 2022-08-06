import { motion } from "framer-motion";
import Nav from './nav'
import Head from 'next/head'
import Footer from './footer'
import styles from './styles/layout.module.scss'

export default function Layout({ children, title }) {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }
    return (
        <>
            <Head>
                <title>TylerKim_design | {title}</title>
            </Head>
            <Nav title={title} />
            <div>
                <motion.main
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'linear' }} // Set the transition to linear
                    className={styles.main}
                >
                    { children }
                    <Footer />
                </motion.main>
            </div>
        </>
    )
}