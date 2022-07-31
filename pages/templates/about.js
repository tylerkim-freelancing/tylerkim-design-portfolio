import Layout from "../../components/layout"
import styles from '../../styles/pages/templatesAbout.module.scss'

export default function TemplatesAbout() {
    return (
        <Layout title='Templates' >
            <div className={styles.container}>
                <h1 className={styles.title}>The <span className="highlight">Blueprint</span> of my templates</h1>
                <div className={styles.template_structure}>
                    <h2 className={styles.subtitle}>Thoughtfully designed <span className="highlight">layout</span> with a consistent structure</h2>
                    <p className={styles.description}>
                        All of my templates come with consistent page structure but layed out differently. I came up with the 
                        following page layout to fit the general purpose of personal website, and additional section can be added
                        to any of the pages upon request with some extra charge.
                    </p>
                    <h3>[Home]</h3>
                    <h4>: This is youre main page where it welcomes your target people. It consists of following sections.</h4>
                    <p>- a main picture area</p>
                    <p>- a main text area</p>
                    <p>- a preview of your works</p>
                    <p>&emsp;+ Generally displays 4-6 works</p>
                    <p>&emsp;+ Each work is presented with a card that has a main title and a subtitle</p>
                    <br/>
                    <h3>[About]</h3>
                    <h4>: About page is to introduce yourself and describe what you do. It consists of following sections.</h4>
                    <p>- a profile picture</p>
                    <p>- two text areas generally used as main paragraph + secondary paragraph</p>
                    <p>- a personal information area</p>
                    <p>&emsp;+ studio/business location</p>
                    <p>&emsp;+ conatct information</p>
                    <br/>
                    <h3>[Gallery]</h3>
                    <h4>: This page is like a gallery where you presents all your works with their thumbnails.</h4>
                    <p>- a gallery of your works</p>
                    <p>&emsp;+ Each work is presetned with a card that has a main title and a subtitle</p>
                    <br/>
                    <h3>[Work]</h3>
                    <h4>: This is where you can explain your individual project with details. It consists of following sections.</h4>
                    <p>- a main photo of the project</p>
                    <p>- a main tilte and a subtitle</p>
                    <p>- a main paragraph to explain your project</p>
                </div>

                <div className={styles.basic_features}>
                    <h2 className={styles.subtitle}>Comes with all the <span className="highlight">basic features</span> you need for a website</h2>
                    <p className={styles.description}>
                        When you hire a freelancer to make your personal website, each additional page and feature is extra money you will 
                        have to pay for your website. There are few essential features that all the modern website must have to meet the 
                        standard, and all of my templates come with those features as default without extra charge.
                    </p>
                    <h3>Responsive Design</h3>
                    <p>
                        Website design needs to be optimized to display all the contents properly through various devices. All the traffic to your
                        webiste are coming from a different type of device, it is a must to optimize your website to be responsive to any size of the platform.
                    </p>
                    <br/>
                    <h3>SEO (Search Engine Optimization)</h3>
                    <p>
                        SEO is a process of improving the visibility of your webiste to the people on the search engine such as Google or Bing.
                        More visible the website becomes, more traffic it gets, and it simply means you will have more business through your website.
                    </p>
                    <br/>
                    <h3>Open Graph Meta Tags</h3>
                    <p>
                        Open Graph meta tags on your website controls how your shared URL on social media will be displayed. With OG tags, you can
                        share your website's URL just as you intended, and you can give the people a general idea of what your website will be about. 
                        You will get OG tags for Facebook, Instagram and Twitter on your website as default.
                    </p>
                    <br/>
                    <h3>CMS (Content Management System)</h3>
                    <p>
                        A content management system is a software that lets a user to create, modify and delete the content of a website without
                        having any technical knowledge. Obviously, you will need a lot of adjustments on your web contents as you create a new work, 
                        re-organize the portfolio, or modify any context as your idea changes. Instead of paying the developer to change your webiste
                        for you, you can modify your website by yourself through the dedicated control panel.
                    </p>
                </div>

                <div className={styles.web_stack}>
                    <h2 className={styles.subtitle}>Built with the most efficient <span className="highlight">web stack</span></h2>
                    <p className={styles.description}>
                        There are tons of different way to build a web application by combining different type of server, framework, third party software, and databases. 
                        I spent days and nights to figure out the best way to build a personal website that can also grow into a business, as efficient as possible.
                        The answer to the question is, 
                    </p>
                    <div className={styles.equation}>
                        <img src="/images/nextjs.png"/>+
                        <img src="/images/vercel.png"/>+
                        <img src="/images/sanity.png"/>
                    </div>
                    <h3>Next JS</h3>
                    <p>
                        Next JS is a React framework with additional feautures including server-side rendering and static site generation.
                        It is used create the front-end of my templates which the users will visually experience on the browser. The best part
                        of Next JS is that it generates the static site of each web page at the build time, meaning all the contents of a web page
                        is populated and rendered, and the web page is all ready to be served to the users. This results in very fast loading speed and
                        having advantage in SEO.
                    </p>
                    <br/>
                    <h3>Vercel</h3>
                    <p>
                        Vercel is a cloud platform that enables developers to host their front-end software. Vercel makes it very easy for the developers
                        to deploy their websites to a global CDN (Content Delivery Network) which has its globally distributed network of proxy servers
                        to rapidly serve the static pages of web applications to the users without geographical limit. Next JS and Vercel makes a great
                        synergy where Next JS generates the static pages and Vercel delivers them as fast as possible.
                    </p>
                    <br/>
                    <h3>Sanity</h3>
                    <p>
                        Sanity is a platform where you can create contents and serve them onto your websites. Its independent content management system
                        provides you more flexbility on choosing the design and layout of your websites as it only holds the content, and you can decide 
                        how to display them. It ultimately lets you easily switch between templates and scale up your websites with additional features
                        such as blogs and e-commerce.
                    </p>
                </div>

                <div className={styles.customization}>
                    
                </div>
            </div>
        </Layout>
    )
}