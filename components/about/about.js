import styles from '../../styles/About.module.css'
import Image from "next/image";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Image
					src="/assets/images/sitting.png"
					alt="Q. Hebert"
					width={333}
					height={333}
				/>
			</div>
			<div className={styles.right}>
				<h1>A PROPOS</h1>
				<p>Tout a commencé par la publication de tutoriels dans le domaine du bricolage sur YouTube.</p>
				<p>Progressivement, je me suis spécialisé dans la réalisation de vidéos dynamiques. Chaque vidéo est soigneusement réfléchie et travaillée de A à Z par mes soins, en commencant par le storyboard, puis le tournage, le montage, la colorimétrie et le sound design.</p>
				<p>J'utilise régulièrement des drones pour obtenir des images aériennes.</p>
				<p>Ma passion pour l'image me permet aujourd'hui de travailler avec des sportifs et artistes de haut niveau.</p>
			</div>
		</div>
	)
}

export default About;