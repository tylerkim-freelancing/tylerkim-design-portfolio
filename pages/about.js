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
                    <div id='contact' className={styles.about_me}>
                        <h1 className={styles.title}><span className='highlight'>Tyler Kim</span><br/>A Web Developer</h1>
                        <p>
                            Hi! My name is Tyler Kim, the best web developer/designer who specialized in personal websites that can potentially grow into a business. 
                            I always admire people who are so passionate with their creative works, and I would love to help them delivering the idea
                            to the people.
                        </p>
                        <h4>TylerKim.design@gmail.com</h4>
                        <h4>917 888 8888</h4>
                    </div>
                </div>
                
                <div className={styles.work_process}>
                    <h1 className={styles.title}><span className='highlight'>How</span> it works</h1>
                    <div className={styles.card}>
                        <h4 className={styles.title}>Browse my templates</h4>
                        <p>
                            Go to <Link href={'/templates'}><a target='_blank'><strong>templates</strong></a></Link> page and see what you like. There is a theme
                            setting feature where you can customize the theme of the template. Theme setting window will show you the color code that you used
                            for each component. you can remember them and tell me when you request a project.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.title}>Request a project</h4>
                        <p>
                            You can request a project through either <a target='_blank' href="https://www.fiverr.com/"><strong>Fiverr</strong></a> or 
                            <a target='_blank' href="https://www.upwork.com/"><strong> Upwork</strong></a>. You will get the same quality of the project for the same price,
                            however, as of writting this moment, Fiverr charges you 5.5% of payment processing fee while Upwork offers 3%. When you request a project,
                            please let me know the name of the template you liked, the color codes of your customization, and any additional feature you need for your website.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.title}>Revision</h4>
                        <p>
                            If we come to 
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.title}>Done!</h4>
                        <p>
                            
                        </p>
                    </div>
                </div>

                <div className={styles.and_more}>
                    <h1 className={styles.title}>And <span className='highlight'>more</span>...</h1>
                    <p>
                        If you have a question that I could not clear out for you, or if there is a project in your mind besides just using my template, 
                        please contact me through my <a href="#contact"><strong> email</strong></a> or <a href="#contact"><strong> text</strong></a>. I will be more than happy to assist you in any possible way!
                    </p>
                </div>
            </div>
        </Layout>
    )
}