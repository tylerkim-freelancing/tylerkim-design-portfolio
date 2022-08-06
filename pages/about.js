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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur ultricies libero, vitae molestie orci lobortis non. Proin ac mi sed dui laoreet vulputate eget eget dolor. Donec a rutrum odio, in volutpat libero. Vivamus ligula massa, maximus non venenatis molestie, tempus a massa. Aenean quis felis nunc. Cras eget mi leo. Cras vel interdum ligula. Vivamus sit amet feugiat ipsum. Nulla ac vulputate tellus. Nulla euismod volutpat auctor. Ut sem lectus, fringilla non tincidunt vel, vulputate vel eros. Donec efficitur nisl a lobortis efficitur. Nulla pharetra semper ex, at aliquam purus vestibulum sed.
                        </p>
                    </div>
                </div>

                <div className={styles.intro}>
                    <h1 className={styles.title}>I understand you just <span className='highlight'>can't find</span> the perfect <span className='highlight'>solution</span> for your personal website</h1>
                    <p>
                        You have a great idea that you want to present to the world, and you want to have your own website to do so, and you get several options. <br/><strong>But trust me, I know how it goes.</strong>
                    </p>
                    <div className={styles.inefficiency}>
                        <div>
                            <h3 className={styles.subtitle}>Hiring a freelancer</h3>
                            <p>
                                You want to hire a professional freelancer. Of course, you must goole "How much will it cost to make a personal website?", and you were surprised by unexpectedly expensive price to do so
                                when you hire a designer or developer. Not to mention all those long and complicated process of finding and communicating with the freelancer.
                            </p>
                        </div>
                        <div>
                            <h3 className={styles.subtitle}>Using a website builder platform</h3>
                            <p>
                                You start to explore those templates/themes on website builder platforms. They all look good options until you actually choose
                                a design and start building your own on it, then you realize how it comes out so much differently from the original design without
                                all those professionaly taken photography which the design is heavily relying on.
                            </p>
                        </div>
                        <div>
                            <h3 className={styles.subtitle}>Becoming a web developer yourself</h3>
                            <p>
                                You start going little overboard, and finding yourself watching bunch of youtube videos to learn how to become a web developer yourself to build everything from the scratch. Now you are overwhelmed by too many things to learn to build and host 
                                a website, and you don't have time to work on your ideas anymore.
                            </p>
                        </div>
                    </div>
                    <p>Yes, they are all too <strong>inefficient</strong> to solve your problem!</p>
                </div>
                
                <div className={styles.efficiency}>
                    <h1 className={styles.title}><span className='highlight'>Efficiency</span> is the quality I value the <span className='highlight'>most</span></h1>
                    <p>
                        We are living in the time where everything changes too fast, and the monetary assets have become by far the most valuble quality of a life in history.
                        In order to keep up with the rapid growth, especially in the IT field, you must stay efficient thus you lose less and gain more. When it specifcially 
                        comes to a web development, there are <strong>crucial four components</strong> that I focus on to keep the website as efficient as possible.
                    </p>
                </div>

                <div className={styles.efficient_components}>
                    <div className={styles.component}>
                        <img src='/performance.png'/>
                        <h2 className={styles.subtitle}>Performance</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                    <div className={styles.component}>
                        <img src='/design.png'/>
                        <h2 className={styles.subtitle}>Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                    <div className={styles.component}>
                        <img src='/affordability.png'/>
                        <h2 className={styles.subtitle}>Affordability</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                    <div className={styles.component}>
                        <img src='/scalability.png'/>
                        <h2 className={styles.subtitle}>Scalability</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                </div>

                <div className={styles.intro_templates}>
                    <h1 className={styles.title}>Proudly introduce you my <span className='highlight'>templates</span> with all the <span className='highlight'>goodies</span></h1>
                    <div className={styles.equation}>
                        <img src='/performance.png'/><h2>+</h2>
                        <img src='/design.png'/><h2>+</h2>
                        <img src='/affordability.png'/><h2>+</h2>
                        <img src='/scalability.png'/><h2>=</h2>
                        <img src='/template.png'/>
                    </div>
                    <div className={styles.templates_container}>
                        <div className={styles.template_desktop}>
                            <div className={styles.desktop_top}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={styles.img_container}>
                                <Img src='/images/templates/desktop/staircase.png'/>
                            </div>
                            <div className={styles.desktop_bottom}></div>
                        </div>
                        <div className={styles.template_mobile}>
                            <div className={styles.mobile_top}></div>
                            <div className={styles.img_container}>
                                <Img src='/images/templates/mobile/newtro.png'/>
                            </div>
                            <div className={styles.mobile_bottom}>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <Link href='/templates'><a>see my templates&rarr;</a></Link>
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
                        more features will be updated in the future for your template.
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
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
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