import { motion } from "framer-motion";
import Head from 'next/head'
import Logo from './logo'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children, title }) {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <Logo /> 
                <Nav route={title} />
                <motion.main
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'linear' }} // Set the transition to linear
                    className=""
                >
                    { children }
                    <Footer />
                </motion.main>
            </div>
        </>
    )
}