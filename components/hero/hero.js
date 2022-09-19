import styles from '../../styles/Hero.module.css'

const Hero = () => {
	return (
		<div className={styles.hero}>
			<video className={styles.heroVideo} autoPlay loop muted>
				<source src="/assets/videos/hero.mp4" type="video/mp4"/>
			</video>
			<div className={styles.centerBottom}>
				<span>Photographe Vidéaste</span>
			</div>
		</div>
	)
}

export default Hero;