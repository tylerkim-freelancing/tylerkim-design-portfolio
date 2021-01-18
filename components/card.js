import styles from './styles/card.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Card({imgSrc, title, images, directory}) {
  const [isToggled, setIsToggled] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const numImages = images.length

  const popup = {
    on: {
      opacity: 1,
      display: 'flex',
      transition: { duration: 0.5 }
    },
    off: {
      opacity: 0,
      transition: { duration: 0.5 },
      transitionEnd: { display: 'none' }
    }
  }

  const imgContent = {
    on: {
      display: 'block',
      opacity: 1,
      transition: { duration: 0.5 }
    },
    off: {
      opacity: 0,
      transition: { duration: 0.5 },
      transitionEnd: { display: 'none' }
    }
  }

  function closeModal(e) {
    if (e.target.dataset.ref === 'modal') {
      setIsToggled(false)
    }
  }

  function nextHandler() {
    imgIndex === (numImages - 1) ? setImgIndex(0) : setImgIndex(imgIndex + 1)
    console.log(imgIndex)
  }

  function prevHandler() {
    imgIndex === 0 ? setImgIndex(numImages - 1) : setImgIndex(imgIndex - 1)
    console.log(imgIndex)
  }
  return (
    <>
      <motion.div 
        className={styles.popup}
        variants={popup}
        initial="off"
        animate={isToggled ? 'on' : 'off'}
        onClick={(e) => closeModal(e)}
        data-ref="modal">
        <div className={styles.content}>
          <div className={styles.arrow_left} onClick={prevHandler}>
            <img src="/icons/arrow_left.svg"/>
          </div>
          <div className={styles.arrow_right} onClick={nextHandler}>
            <img src="/icons/arrow_right.svg"/>
          </div>
          {
            images.map((image, i) => (
              <motion.div 
                key={i} 
                className={styles.facility_img}
                initial='off'
                animate={ imgIndex === i ? 'on' : 'off' }
                variants={imgContent}>
                <div className="image-container">
                  <Image 
                    src={`/images/${directory}/${image}`}
                    layout="fill"
                    objectFit="cover"/>
                </div>
              </motion.div>
            ))
          }
     
        </div>
      </motion.div>
      <div className={styles.card}>
        <div className={styles.explore}>
          <button onClick={() => setIsToggled(true)}>Explore</button>
        </div>
        <div className={styles.image}>
          <Image 
            src={imgSrc}
            layout="fill"
            objectFit="cover"/>
        </div>
        <h3>{title}</h3>
      </div>
    </>
  );
}