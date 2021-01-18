import Nav from '../components/nav'
import styles from '../styles/pages/home.module.scss'
import Image from 'next/image'
import Card from '../components/card'
import Footer from '../components/footer'
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

      {/* Facility */}
      <div id="facility" className={styles.facility}>
        <h1>About Our Place</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={styles.card_container}>
          <Card imgSrc="/images/machine/machine_preview.jpg" title="Machine Zone" directory="machine" images={images.machine}/>
          <Card imgSrc="/images/cardio/cardio_preview.jpg" title="Cardio Zone" directory="cardio" images={images.cardio}/>
          <Card imgSrc="/images/freeweight/freeweight_preview.jpg" title="Free-Weight Zone" directory="freeweight" images={images.freeweight}/>
        </div>
      </div>

      {/* Membership */}
      <div className={styles.membership}>
        <div className={styles.background_membership}>
          <div className="image-container">
            <Image 
              src="/images/background1.jpg"
              layout="fill"
              objectFit="cover"/>
          </div>
        </div>

        <div className={styles.membership_intro}>
          <h1>Awesome Staff & Facility</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div id="membership" className={styles.membership_content}>
          <h1>Membership</h1>
          <h2>As Low As $20 / Month</h2>
          <table className={styles.table_membership}>
            <thead>
              <tr>
                <th></th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
                <th>1 Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Membership</th>
                <td>$50</td>
                <td>$120</td>
                <td>$180</td>
                <td>$240</td>
              </tr>
            </tbody>
          </table>
          <p>*There is $50 initiation fee for non-member.</p>
          <h1>Pilates</h1>
          <h2>$50 / Class</h2>
          <table className={styles.table_pilates}>
            <thead>
              <tr>
                <th></th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thr</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan="2">Availability</th>
                <td>AM 10:30 - 11:30</td>
                <td>AM 9:00 - 10:00</td>
                <td rowSpan="2">PM 8:00 - 9:00</td>
                <td>AM 10:30 - 11:30</td>
                <td>AM 9:00 - 10:00</td>
                <td rowSpan="2">N/A</td>
                <td rowSpan="2">N/A</td>
              </tr>
              <tr>
                <td>PM 7:30 - 8:30</td>
                <td>PM 8:00 - 9:00</td>
                <td>PM 7:30 - 8:30</td>
                <td>PM 8:00 - 9:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact */}
      <div className={styles.contact}>
        <div className={styles.background_pilates}>
          <div className="image-container">
            <Image 
              src="/images/background2.jpg"
              layout="fill"
              objectFit="cover"/>
          </div>
        </div>

        <div className={styles.contact_intro}>
          <h1>Rocking Environment</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className={styles.contact_content}>
          <div className={styles.location}>
            <div className={styles.store_info}>
              <p><strong>Telephone</strong> 777-777-7777</p>
              <p><strong>Business Hours</strong> 24 / 7</p>
              <p><strong>Address</strong> 777 Al Pacino Rd, West Hollywood, CA 900099</p>
            </div>
            <iframe 
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52864.87101914459!2d-118.36149759132728!3d34.09374583208188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1609398516146!5m2!1sen!2sus" 
            frameBorder="0" 
            aria-hidden="false" 
            tabIndex="0"
            title="Hollywood"></iframe>
          </div>

          <form className={styles.contact_form}>
            <h2>Conatct Us</h2>
            <input type="text" placeholder="name"/>
            <input type="email" placeholder="email"/>
            <input type="text" placeholder="subject"/>
            <textarea placeholder="message"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
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