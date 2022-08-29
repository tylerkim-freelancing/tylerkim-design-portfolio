import styles from './styles/card.module.scss'
import Img from '../components/img'
import Link from 'next/link'

export default function Card({ src, name }) {
    return (
        <div className={styles.card}>
            <div className={styles.window_top}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.img_container}>
                <Img alt='template thumbnail' src={src}/>
                <div className={styles.info_container}>
                    <h2 className={styles.title}>{ name }</h2>
                    <Link href={`/templates/${name}`}><a className={styles.explore_btn} target="_blank">Explore</a></Link> 
                </div>
            </div>
            <div className={styles.window_bottom}>
                <div></div>
            </div>
        </div>
    )
}