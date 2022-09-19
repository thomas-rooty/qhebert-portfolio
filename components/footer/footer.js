import styles from '../../styles/Footer.module.css'
import Image from 'next/image'
import Instagram from '/assets/icons/instagram.svg'
import Facebook from '/assets/icons/facebook.svg'
import Youtube from '/assets/icons/youtube.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__icon}>
				<Image
					src={Instagram}
					alt="Instagram"
					width={30}
					height={30}
				/>
			</div>
			<div className={styles.footer__icon}>
				<Image
					src={Facebook}
					alt="Facebook"
					width={30}
					height={30}
				/>
			</div>
			<div className={styles.footer__icon}>
				<Image
					src={Youtube}
					alt="Youtube"
					width={30}
					height={30}
				/>
			</div>
		</footer>
	)
}

export default Footer