import Nav from '../components/nav'
import styles from '../styles/pages/home.module.scss'
import Image from 'next/image'
import Card from '../components/card'
import { readDir } from '../module/fileServices'

export default function Home({images}) {
  return (
    <>
    <Nav />
    <div className={styles.main}>
      <div className={styles.fixed_photo}>
        <div className='image-container'>
          <Image 
            src="/images/background_middle.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"/>
        </div>
      </div>
      <h1 className={styles.main_text}>FORGE YOUR <br/>BODY & MIND.</h1>
      <div className={styles.main_photo}>
        <div className={styles.photo}>
          <Image 
            src="/images/background_right.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"/>
        </div>
        <div className={styles.photo}>
          <Image 
            src="/images/background_left.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"/>
        </div>
      </div>
      <div id="facility" className={styles.facility}>
        <h1>About Our Place</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={styles.card_container}>
          <Card imgSrc="/images/machine/machine_preview.jpg" title="Machine Zone" directory="machine" images={images.machine}/>
          <Card imgSrc="/images/cardio/cardio_preview.jpg" title="Cardio Zone" directory="cardio" images={images.cardio}/>
          <Card imgSrc="/images/freeweight/freeweight_preview.jpg" title="Free-Weight Zone" directory="freeweight" images={images.freeweight}/>
        </div>
      </div>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const machine = readDir('/public/images/machine')
  const cardio = readDir('/public/images/cardio')
  const freeweight = readDir('/public/images/freeweight')

  return {
    props: {
      images: {
        machine,
        cardio,
        freeweight
      }
    }
  }
}