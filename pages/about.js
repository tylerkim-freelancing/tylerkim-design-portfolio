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
                            Hi! My name is Tyler Kim, a web developer who specialized in personal websites that will potentially can grow into a business. 
                            I always admire people who are so passionate with their creative works, and I would love to help them delivering the idea
                            to the people.
                        </p>
                    </div>
                </div>
                
                <div className={styles.custom_design}>
                    <h1 className={styles.title}>My templates are <span className='highlight'>customizable</span></h1>
                    <p>
                        You can consider my template as a <strong>guidance</strong> to design your own creative website. All of my templates are built so that
                        it is easy to transform into a whole new website with just a little tweak of colrs, fonts, and some pictures. Those two
                        websites below are built on the same template, and see how different they could get.
                    </p>
                    <div className={styles.templates_comparison_container}>
                        <Link href='/templates/Blooming'><div className={styles.template_desktop}>
                            <div className={styles.desktop_top}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={styles.img_container}>
                                <Img src='/images/templates/desktop/blooming.png'/>
                            </div>
                            <div className={styles.desktop_bottom}></div>
                        </div></Link>
                        <Link href='/templates/Joy Sweet'><div className={styles.template_desktop}>
                            <div className={styles.desktop_top}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={styles.img_container}>
                                <Img src='/images/templates/desktop/joysweet.png'/>
                            </div>
                            <div className={styles.desktop_bottom}></div>
                        </div></Link>
                    </div>
                </div>

                <div className={styles.scalable_design}>
                    <h1 className={styles.title}>My templates are <span className='highlight'>upgradable</span></h1>
                    <p>
                        There are few things you can upgrade the basic templates with. First of all, you can add <strong>more sections</strong> to each pages, and 
                        the additional section could be used as textarea, title area, or picture area. You can also upgrade the template with
                        addtional features. <strong>Blogging</strong> and <strong>e-commerce</strong> are currently the official features that you can add onto your template, and 
                        <strong> more features will be updated</strong> in the future for your template.
                    </p>
                    <div className={styles.templates_comparison_container}>
                        <div>
                            <Link href='/templates/Newtro with Blogs'><div className={styles.template_desktop}>
                                <div className={styles.desktop_top}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.img_container}>
                                    <Img src='/images/templates/desktop/newtrowithblogs.png'/>
                                </div>
                                <div className={styles.desktop_bottom}></div>
                            </div></Link>
                            <br/>
                            <h4>Template Newtro with Blogs</h4>
                        </div>
                        <div>
                            <div className={styles.template_desktop}>
                                <div className={styles.desktop_top}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.img_container}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                        <h1>Coming Soon</h1>
                                    </div>
                                </div>
                                <div className={styles.desktop_bottom}></div>
                            </div>
                            <br/>
                            <h4>Template Newtro with E-Commerce</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.and_more}>
                    <h1 className={styles.title}>And <span className='highlight'>more</span>...</h1>
                    <p>
                        Besides the essential features of my templates presented above, there are more things that make my templates very
                        competitive against the standard websites in the market. Click the following link, and learn more about my templates. 
                        &nbsp;<Link href='/templates/about'><a>learn more &rarr;</a></Link>
                    </p>
                    <p>
                        If you have any other question, or if you would like to discuss other type of project with me, 
                        please contact me through following information.
                    </p>
                    <br/>
                    <h4>Tel. 917 888 8888</h4>
                    <h4>tylerkim.design@gmail.com</h4>
                </div>
            </div>
        </Layout>
    )
}