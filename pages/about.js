import Layout from '../components/layout'
import styles from '../styles/pages/about.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import client from '../modules/contentfulClient'
import Img from '../components/img'

export default function About({ metaData }) {
    const { ogTitle, ogDescription, ogImage } = metaData.fields

    return(
        <>
        <Head>
            <meta name="description" content={ ogDescription } />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ ogTitle } />
            <meta property="og:description" content={ ogDescription } />
            <meta property="og:image" content={`https:${ogImage.fields.file.url}`} />
            <meta name="twitter:card" content="summary" /> 
            <meta name="twitter:title" content={ ogTitle }/> 
            <meta name="twitter:description" content={ ogDescription } /> 
            <meta name="twitter:image" content={`https:${ogImage.fields.file.url}`} />
      </Head>
        <Layout title='About'>
            <div className={styles.container}>
                <div className={styles.main}>
                    <img className={styles.logo_container} src="/logo.svg" alt="logo image"/>
                    <div id='contact' className={styles.about_me}>
                        <h1 className={styles.title}><span className='highlight'>Tyler Kim</span><br/>Web Developer/Designer</h1>
                        <p>
                        Hey! I'm Tyler Kim, the best web developer/designer, and I have the best web solution for your portfolio website. 
                        I admire people who are passionate about their unique craftsmanship, and it is my passion to make them 
                        look more professional and get them the attention that they deserve. You can find my gig from the following platforms.
                        </p>
                        <div className={styles.gig_container}>
                            <a href='#'>
                                <img src='/fiverr.png' alt='fiverr logo image'/>
                            </a>
                            <a href='#'>
                                <img src='/upwork.png' alt='upwork logo image'/>
                            </a>
                        </div>
                        {/* <h4>TylerKim.design@gmail.com</h4>
                        <h4><a href='tel:917-473-1447'>917 473 1447</a></h4> */}
                    </div>
                </div>

                <div className={styles.template_based}>
                    <h1 className={styles.title}>What is the <span className='highlight'>template-based</span> web development?</h1>
                    <p>
                    I create <strong>uniquely styled</strong> templates ready to serve your portfolio content with <strong>high performance</strong>. 
                    My templates are conveniently usable right out of the box, but you may request me to modify them to fit your case precisely. 
                    You would waste a lot of time 
                    discussing with your freelancer for design agreement, walking through technical requirements together, and compromising on the price. 
                    Time is money, and I do not waste it by laying the groundwork beforehand through my templates so I can provide you with a high-quality 
                    project <strong>cheaper</strong>.
                    </p>
                    <br/>
                    <br/>
                    <Link href='/documents'><button>Learn more about the templates &rarr;</button></Link>
                </div>
                
                {/* <div className={styles.work_process}>
                    <h1 className={styles.title}><span className='highlight'>How</span> does it work?</h1>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>1. Browse my templates</h4>
                        <p>
                            Go to <Link href={'/templates'}><a href='/templates' target='_blank'><strong>Templates(click)</strong></a></Link> page and see what you like. You can find open the theme
                            setting panel by clicking <img alt='theme setting button' src='/theme.png'/> where you can customize the color theme of the template. Keep exploring the 
                            templates until you find the best one for yourself with the perfect customization.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>2. Request a project</h4>
                        <p>
                            You can request a project through either <a target='_blank' href="https://www.fiverr.com/"><strong>Fiverr(click)</strong></a> or 
                            <a target='_blank' href="https://www.upwork.com/"><strong> Upwork(click)</strong></a>. There will be no difference between the two 
                            platforms except for the payment processing fee. When you request a project, please let me know the name of the template you've selected with 
                            the color codes of your customization, the pricing plan you are getting, and any modification request to the template. 
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>3. Upload your projects</h4>
                        <p>
                        You will be managing your website content through the headless CMS server called <a target='_blank' href="https://www.contentful.com/features/"><strong>Contentful(click)</strong></a>. I will build your management environment on Contentful using your GitHub account(I will help you make one if you don't have one). 
                        When the setup gets completed, you will be asked to upload your projects for your portfolio website to Contentful as guided.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>4. Proposal</h4>
                        <p>
                            I will deliver a proposal website based on your request and projects within <strong>1-2 business days</strong>. 
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>5. Revision</h4>
                        <p>
                        You will have <strong>two free</strong> revision sessions for your project. For each revision session, you can let me know what to change for your satisfaction, and I will deliver you the improved proposal. 
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>6. Hosting</h4>
                        <p>
                        After the revision, I will deploy your project through the Netlify server using the same GitHub account you used to upload your projects for you. 
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4 className={styles.subtitle}>+ Upgrades</h4>
                        <p>
                        You can always upgrade your portfolio website with the additional feature I offer(the blog page is currently available, and I will update more in the future). 
                        In addition, you can easily swap the design theme from the current one to another using a different template and wait for more template updates every two weeks. 
                        </p>
                    </div>
                </div>

                <div className={styles.and_more}>
                    <h1 className={styles.title}>And <span className='highlight'>more</span>...</h1>
                    <p>
                    If you have a question I failed to clarify, or if there is any project in your mind besides the portfolio website, you contact me by 
                    <a href="#contact"><strong> email</strong></a> or <a href="#contact"><strong> text</strong></a>. I will be more than happy to assist you in any possible way!
                    </p>
                </div> */}
            </div>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const metaData = await client.getEntries({ content_type: 'metaTags', 'fields.page[match]': 'About' })
  
    return {
      props: {
        metaData: metaData.items[0]
      }
    }
  }