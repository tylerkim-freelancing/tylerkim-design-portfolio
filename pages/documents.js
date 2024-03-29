import Layout from "../components/layout"
import styles from '../styles/pages/documents.module.scss'
import Img from '../components/img'
import Head from 'next/head'
import client from '../modules/contentfulClient'

export default function Documents({ metaData }) {
    const { ogTitle, ogDescription, ogImage } = metaData.fields

    return (
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
        <Layout title='Documents' >
            <div className={styles.container}>
                <h1 className={styles.title}>The <span className="highlight">Blueprint</span> of my templates</h1>
                <div className={styles.overview}>
                    <h2 className={styles.subtitle}><span className="highlight">Overview</span></h2>
                    <p className={styles.description}>
                    When you want to create a portfolio website, assuming you are not a programmer, 
                    there are generally two ways. You can use one of the reputable website builders and build your website yourself, or hire a freelancer to make one for you. The former 
                    would be a cheaper solution, but you usually end up with a poorly designed website with missing features. The latter offers a high-quality product personally designed 
                    for you, but it costs a lot more and goes with the hassle of communicating with your freelancer. I have successfully adopted the pros and discarded the cons from both 
                    worlds by creating a <strong>well-designed</strong> template with all the <strong>essential features</strong> and integrating the client's needs into the template.
                    </p>
                </div>

                <div className={styles.how_does_it_work}>
                    <h2 className={styles.subtitle}><span className="highlight">Why</span> using template?</h2>
                    <p className={styles.description}>
                        My template will be the foundation of your website. They come with all the essential factors you would need for a portfolio website plus upgradable features(blog, e-commerce, and etc..), and you can flexibly transform one of them into your personal website.
                        The benefits are the followings:
                    </p>
                    <ul>
                        <li>Fast production time</li>
                        <li>Professional looking design</li>
                        <li>Optimization for responsive design, search engine, performance, and accessibility</li>
                        <li>Customizable color-theme</li>
                        <li>Convenient theme swap from one template from another</li>
                        <li>Constant updates with more designs and upgradable features</li>
                    </ul>
                </div>

                <div className={styles.template_structure}>
                    <h2 className={styles.subtitle}>Thoughtfully designed page <span className="highlight">structure</span> and <span className="highlight">layout</span></h2>
                    <p className={styles.description}>
                    All of my templates come with a consistent page structure and layout. I have designed them to fit the general purpose of a portfolio website, but you can also change the page layout or add more sections to any of the pages upon an appropriate request.
                    </p>
                    <h3>&#128062; Home</h3>
                    <p>: This is your main page.</p>
                    <ul>
                        <li>main image</li>
                        <li>main title</li>
                        <li>main paragraph</li>
                        <li>
                            preview of your works
                            <ul>
                                <li>generally displays 4-6 works</li>
                                <li>each work is presented with a card that has a main title and a subtitle</li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for home page structure" src="/images/documents/structure_home.png"/>
                    </div>
                    <br/>
                    <br/>
                    <h3>&#128062; About</h3>
                    <p>: This is your about page to introduce yourself to your audience.</p>
                    <ul>
                        <li>main image(generally a profile picture)</li>
                        <li>main title</li>
                        <li>main paragraph</li>
                        <li>recognition</li>
                        <li>
                            personal information area
                            <ul>
                                <li>studio/business location</li>
                                <li>conatct information</li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for about page structure" src="/images/documents/structure_about1.png"/>
                    </div>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for about page structure" src="/images/documents/structure_about2.png"/>
                    </div>
                    <br/>
                    <br/>
                    <h3>&#128062; Works</h3>
                    <p>: The gallery page where you present all your works with their thumbnail, title, and subtitle.</p>
                    <ul>
                        <li>
                            gallery of your works
                            <ul>
                                <li>each work is presetned with a card that has a main title and a subtitle</li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for works page structure" src="/images/documents/structure_works.png"/>
                    </div>
                    <br/>
                    <br/>
                    <h3>&#128062; [Work]</h3>
                    <p>: This is a page where you can explain the individual project with details.</p>
                    <ul>
                        <li>title of your work</li>
                        <li>subtitle of your work</li>
                        <li>a rich text area you can insert followings:
                            <ul>
                                <li>large headings</li>
                                <li>small headings</li>
                                <li>paragraphs</li>
                                <li>images</li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for [work] page structure" src="/images/documents/structure_[work].png"/>
                    </div>
                </div>

                <div className={styles.upgradable}>
                    <h2 className={styles.subtitle}><span className='highlight'>Upgradable</span> features</h2>
                    <p className={styles.description}>
                        I believe in the idea that your portfolio website can scale up to become a blog, e-commerce, and more. I offer additional features that can easily integrate into your portfolio website to support your expansion. Those features are engineered to keep the design consistency with the template your website is based on.
                    </p>
                    <h3>&#128062; Blog</h3>
                    <p>
                    You will have an additional blog page on your website. You can write a blog post with different sizes of headings, 
                    paragraph text, embedded youtube videos, images, and external links. Your users can sort the posts by their updated date 
                    and search them by keywords. This page is not only limited to a blog but can work as a journal, news, updates, or event page 
                    for your audience by changing its route name. This page is currently demonstrated on my templates with the route name *blog.
                    </p>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for blogs page structure" src="/images/documents/structure_blogs.png"/>
                    </div>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for [post] page structure" src="/images/documents/structure_[post]1.png"/>
                    </div>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for [post] page structure" src="/images/documents/structure_[post]2.png"/>
                    </div>
                    <br/>
                    <br/>
                    <h3>&#128062; E-Commerce</h3>
                    <p>
                        will be updated soon!
                    </p>
                    <br/>
                    <br/>
                    <h3>&#128062; Progressive Web App</h3>
                    <p>
                        will be updated soon!
                    </p>
                </div>

                <div className={styles.basic_features}>
                    <h2 className={styles.subtitle}>Comes with all the <span className="highlight">essential features</span> you need for a website</h2>
                    <p className={styles.description}>
                        My templates are packed with all the essential features you would need for a portfolio website <strong>without extra charge</strong>.    
                    </p>
                    <h3>&#128062; CMS (Content Management System)</h3>
                    <p>
                    A content management system(CMS) is software that lets a user create, modify and delete the content of a website without having any technical knowledge. 
                    You will need a lot of adjustments on your web content as you need to add a new project, re-organize the portfolio, 
                    or modify any context as your idea changes. Instead of paying the developer to change the web content for you, you can 
                    modify your website by yourself through the dedicated control panel. My templates are specifically powered by the headless 
                    CMS called Contentful, and it offers generous community plan for free, which is generally enough to run a portfolio website.
                    </p>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for contentful control panel" src="/images/documents/contentful1.png"/>
                    </div>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for contentful control panel" src="/images/documents/contentful2.png"/>
                    </div>
                    <br/>
                    <br/>
               
                    <h3>&#128062; Open Graph Meta Tags</h3>
                    <p>
                    Open Graph meta tags(OG tags) on your website control how your shared URL on social media will be displayed. With OG tags, 
                    you can share your website's URL just as you intended and give people a general idea of what your website will be about before visiting. 
                    You will get OG tags for Facebook, Instagram, and Twitter on your website as default.
                    </p>
                    <div className={styles.ogtag_reference}>
                        <div>
                            <img alt="shared link without og tags on facebook" src="/images/documents/ogtags_without.png"/>
                            <p><strong>&rarr;</strong></p>
                            <img alt="shared link with og tags on facebook" src="/images/documents/ogtags_with.png"/>
                        </div>
                        <div>
                            <img alt="shared link without twittercard tags on twitter" src="/images/documents/twittercard_without.png"/>
                            <p><strong>&rarr;</strong></p>
                            <img alt="shared link without twittercard tags on twitter" src="/images/documents/twittercard_with.png"/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h3>&#128062; SEO (Search Engine Optimization)</h3>
                    <p>
                    SEO is a process of improving the visibility of your website to people on search engines such as Google or Bing. 
                    The more visible the website becomes, the more traffic it gets, which means you will have more business through your website. 
                    All my templates are optimized to score above 95 on Google's lighthouse report.
                    </p>
                    <div className={styles.structure_img_container}>
                        <Img priority={true} alt="Reference image for good seo" src="/images/documents/seo.png"/>
                    </div>
                    <br/>
                    <br/>
                    <h3>&#128062; Responsive Design</h3>
                    <p>
                    I design my templates to render well on a variety of devices.               
                    </p>
                    <div className={styles.responsive_reference}>
                        <img alt="a template in desktop view" src="/images/templates/desktop/newtro.png"/>
                        <p><strong>&rarr;</strong></p>
                        <img alt="a template in mobile view" src="/images/templates/mobile/newtro.png"/>
                    </div>
                </div>

                <div className={styles.web_stack}>
                    <h2 className={styles.subtitle}>Built with the most efficient <span className="highlight">web stack</span></h2>
                    <p className={styles.description}>
                    A web stack is a collection of software required to build a web application, and there are many options out there to choose from. 
                    I have carefully determined the most efficient web stack for your project in terms of the technological and economical aspects. 
                    </p>
                    <div className={styles.equation}>
                        <img alt="next js logo" src="/images/nextjs.png"/>+
                        <img alt="contentful logo" src="/images/contentful.png"/>+
                        <img alt="netlify logo" src="/images/netlify.png"/>
                    </div>
                    <h3>&#128062; Next.JS</h3>
                    <p>
                    Next.JS is a React framework with additional features like server-side rendering and static site generation. 
                    I use Next.JS to create the front-end of my templates which the users will visually experience on the browser. 
                    The best part of this framework is that it can render web pages at the build time or on the server side upon a request 
                    and have them ready to serve the users. Users will have a better experience, and search engines will crawl your website better.
                    </p>
                    <br/>
                    <br/>
                    <h3>&#128062; Contentful</h3>
                    <p>
                    Contentful is a popular headless CMS platform where you can create your data assets and connect them with your application. 
                    It has a user-friendly UI that is easy to learn and offers a free plan with a generous amount of data usage and API calls. 
                    In general cases, 2,000,000 API calls/month and a 750GB/month bandwidth limit will be more than enough for a portfolio website.
                    </p>
                    <br/>
                    <br/>
                    <h3>&#128062; Netlify</h3>
                    <p>
                    Netlify is the platform where you can easily deploy and host the Next.JS project. Its advanced CDNs are globally 
                    distributed and ready to deliver your website to users at high speed. Netlify's free plan offers a 100GB/month 
                    bandwidth and 300mins/month build time which is more than enough for a portfolio website, and it even lets 
                    you host your website for commercial use. 
                    </p>
                </div>
            </div>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const metaData = await client.getEntries({ content_type: 'metaTags', 'fields.page[match]': 'Documents' })
  
    return {
      props: {
        metaData: metaData.items[0]
      }
    }
  }