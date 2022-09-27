import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__icon}>
				<Image
					src={'/assets/icons/instagram.svg'}
					alt="Instagram"
					width={30}
					height={30}
					onClick={() => window.open('https://www.instagram.com/quentin.hebert_/')}
				/>
			</div>
			<div className={styles.footer__icon}>
				<Image
					src={'/assets/icons/facebook.svg'}
					alt="Facebook"
					width={30}
					height={30}
					onClick={() => window.open('https://www.facebook.com/quentinmaker.hebert')}
				/>
			</div>
			<div className={styles.footer__icon}>
				<Image
					src={'/assets/icons/youtube.svg'}
					alt="Youtube"
					width={30}
					height={30}
					onClick={() => window.open('https://www.youtube.com/channel/UCX4W-dFBVrf_W_ZBlap_GOg/featured')}
				/>
			</div>
		</footer>
	)
}

export default Footer