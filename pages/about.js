import Layout from '../components/layout'
import styles from '../styles/pages/about.module.scss'
import Img from '../components/img'
import Link from 'next/link'

export default function About() {
    return(
        <Layout title='About'>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.profile_container}>
                        <Img src='/images/profile.jpg'/>
                    </div>
                    <div className={styles.about_me}>
                        <h1 className={styles.title}><span className='highlight'>Tyler Kim</span><br/>A Web Developer</h1>
                        <p>
                            Hi! My name is Tyler Kim, a web developer who specialized in personal websites that can potentially grow into a business. 
                            I always admire people who are so passionate with their creative works, and I would love to help them delivering the idea
                            to the people.
                        </p>
                        <h4>tylerkim.design@gmail.com</h4>
                        <h4>Tel# 917 888 8888</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )
}