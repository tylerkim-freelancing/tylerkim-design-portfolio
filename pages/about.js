import Layout from '../components/layout'
import styles from '../styles/pages/about.module.scss'
import Img from '../components/img'

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

                </div>
            </div>
        </Layout>
    )
}