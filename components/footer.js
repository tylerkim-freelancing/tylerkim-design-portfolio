import styles from './styles/footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2022 Powered By <a className={styles.copyright} href='https://github.com/tylerhkmontana'>Tyler Kim</a>. All rights reserved.</p>
        </footer>
    )
}