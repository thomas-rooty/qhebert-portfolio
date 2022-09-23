import styles from "../../styles/Photos.module.css";

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<h1>PHOTOS</h1>
			<div className={styles.portraitContainer}>
				{[...Array(13)].map((_, i) => (
					<div className={styles.portrait} key={i}>
						<img
							src={`/assets/pictures_gallery/portrait/${i + 1}.jpg`}
							alt="portrait"
						/>
					</div>
				))}
			</div>
			<div className={styles.landscapeContainer}>
				{[...Array(4)].map((_, i) => (
					<div className={styles.landscape} key={i}>
						<img
							src={`/assets/pictures_gallery/landscape/${i + 1}.jpg`}
							alt="portrait"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Gallery;