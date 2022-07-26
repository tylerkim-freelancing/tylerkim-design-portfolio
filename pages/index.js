import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Layout title='Home'>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1>The most <span className='highlight'>efficient</span>, yet <span className='highlight'>attractive</span> way to deliver <span className='highlight'>your passion</span> to your clients.</h1>
            <p>
              Hello to the people with ambition, I am a web developer who creates a personal website with high performance and attractive design,
              which can be well used to promote yourself/products. I know you must have spent so many hours to plan and plan to build your idea into 
              something that will impress the crowd, and you probably just can't wait to bring it out to the world. 
              Listen, I as well have spent days and nights to come up with the best way to effeciently connect you and your target, and here I am, 
              being so excited to introduce you my very solution for it. Wait no longer, just go to "shop" and see it yourself. 
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
