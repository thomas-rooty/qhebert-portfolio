import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__icon}>
				<Image
					src="/icons/instagram.svg"
					alt="Instagram"
					width={30}
					height={30}
				/>
			</div>
			<div className={styles.footer__icon}>
				<Image
					src="/icons/facebook.svg"
					alt="Facebook"
					width={30}
					height={30}
				/>
			</div>
			<div className={styles.footer__icon}>
				<Image
					src="/icons/youtube.svg"
					alt="Youtube"
					width={30}
					height={30}
				/>
			</div>
		</footer>
	)
}

export default Footer