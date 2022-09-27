// noinspection XmlDeprecatedElement

import styles from "../../styles/Videos.module.css";

const VideosLib = () => {
	return (
		<div className={styles.gallery}>
			<h1>VIDEOS</h1>
			<div className={styles.videosContainer}>
				<div className={styles.video}>
					<iframe width="520" height="300" src="https://www.youtube.com/embed/GlSPrGCG4MM"
					        title="L'univers de Stéphane ROZAND" frameBorder="0"
					        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					        allowFullScreen></iframe>
				</div>
				<div className={styles.video}>
					<iframe width="520" height="300" src="https://www.youtube.com/embed/_HNnBWBFyAE"
					        title="Pour terminer avec mon projet de Cockpit fait maison" frameBorder="0"
					        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					        allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
}

export default VideosLib;