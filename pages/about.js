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
                        <h1><span className='highlight'>Tyler Kim</span><br/>A Web Developer</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur ultricies libero, vitae molestie orci lobortis non. Proin ac mi sed dui laoreet vulputate eget eget dolor. Donec a rutrum odio, in volutpat libero. Vivamus ligula massa, maximus non venenatis molestie, tempus a massa. Aenean quis felis nunc. Cras eget mi leo. Cras vel interdum ligula. Vivamus sit amet feugiat ipsum. Nulla ac vulputate tellus. Nulla euismod volutpat auctor. Ut sem lectus, fringilla non tincidunt vel, vulputate vel eros. Donec efficitur nisl a lobortis efficitur. Nulla pharetra semper ex, at aliquam purus vestibulum sed.
                        </p>
                    </div>
                </div>

                <div className={styles.intro}>
                    <h1>I specialize in <span className='highlight'>personal website</span> that will <span className='highlight'>potentially</span> grow into a <span className='highlight'>business</span></h1>
                    <p>
                        I create websites for those who desire to share their ideas to the public, and eventually... blahblah Proin ac mi sed dui laoreet vulputate eget eget dolor. Donec a rutrum odio, in volutpat libero. Vivamus ligula massa, maximus non venenatis molestie, tempus a massa. Aenean quis felis nunc. Cras eget mi leo. Cras vel interdum ligula. Vivamus sit amet feugiat ipsum. Nulla ac vulputate tellus. Nulla euismod volutpat auctor. Ut sem lectus, fringilla non tincidunt vel, vulputate vel eros. Donec efficitur nisl a lobortis efficitur. Nulla pharetra semper ex, at aliquam purus vestibulum sed.  
                    </p>
                </div>
                
                <div className={styles.efficiency}>
                    <h1><span className='highlight'>Efficiency</span> is the quality I value the <span className='highlight'>most</span></h1>
                    <p>
                        We are living in the time where everything changes too fast, and the monetary assets have become by far the most valuble quality of a life in history.
                        In order to keep up with the rapid growth, especially in the IT field, you must stay efficient thus you lose less and gain more. When it specifcially 
                        comes to a web development, there are crucial four components that I focus on to keep the website as efficient as possible.
                    </p>
                </div>

                <div className={styles.efficient_components}>
                    <div className={styles.component}>
                        <img src='/performance.png'/>
                        <h2>Performance</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                    <div className={styles.component}>
                        <img src='/design.png'/>
                        <h2>Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                    <div className={styles.component}>
                        <img src='/affordability.png'/>
                        <h2>Affordability</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                    <div className={styles.component}>
                        <img src='/scalability.png'/>
                        <h2>Scalability</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet at ex eget ultrices. Donec ante ex, faucibus ultrices sem sit amet, luctus varius tortor. Quisque a leo nisl. In libero arcu, efficitur non tincidunt nec, consequat eu nisi. Curabitur lobortis orci quis cursus pellentesque. Nulla convallis metus ac massa elementum porta.</p>
                    </div>
                </div>

                <div className={styles.intro_templates}>
                    <h1>Proudly introduce you my <span className='highlight'>templates</span> with all the <span className='highlight'>goodies</span></h1>
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
                    <Link href='/templates'><a>See my templates&rarr;</a></Link>
                </div>
            </div>
        </Layout>
    )
}