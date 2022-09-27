import styles from "../../styles/Photos.module.css";
import Image from "next/future/image";
import portrait1 from "../../public/assets/pictures_gallery/portrait/1.jpg";
import portrait2 from "../../public/assets/pictures_gallery/portrait/2.jpg";
import portrait3 from "../../public/assets/pictures_gallery/portrait/3.jpg";
import portrait4 from "../../public/assets/pictures_gallery/portrait/4.jpg";
import portrait5 from "../../public/assets/pictures_gallery/portrait/5.jpg";
import portrait6 from "../../public/assets/pictures_gallery/portrait/6.jpg";
import portrait7 from "../../public/assets/pictures_gallery/portrait/7.jpg";
import portrait8 from "../../public/assets/pictures_gallery/portrait/8.jpg";
import portrait9 from "../../public/assets/pictures_gallery/portrait/9.jpg";
import portrait10 from "../../public/assets/pictures_gallery/portrait/10.jpg";
import portrait11 from "../../public/assets/pictures_gallery/portrait/11.jpg";
import portrait12 from "../../public/assets/pictures_gallery/portrait/12.jpg";
import portrait13 from "../../public/assets/pictures_gallery/portrait/13.jpg";
import portrait14 from "../../public/assets/pictures_gallery/portrait/14.jpg";
import portrait15 from "../../public/assets/pictures_gallery/portrait/15.jpg";
import landscape1 from "../../public/assets/pictures_gallery/landscape/1.jpg";
import landscape2 from "../../public/assets/pictures_gallery/landscape/2.jpg";

const PhotosLib = () => {
	return (
		<div className={styles.gallery}>
			<h1>PHOTOS</h1>
			<div className={styles.portraitContainer}>
				<div className={styles.portrait} key={portrait1}>
					<Image src={portrait1} alt="portrait1"/>
				</div>
				<div className={styles.portrait} key={portrait2}>
					<Image src={portrait2} alt="portrait2"/>
				</div>
				<div className={styles.portrait} key={portrait3}>
					<Image src={portrait3} alt="portrait3"/>
				</div>
				<div className={styles.portrait} key={portrait4}>
					<Image src={portrait4} alt="portrait4"/>
				</div>
				<div className={styles.portrait} key={portrait5}>
					<Image src={portrait5} alt="portrait5"/>
				</div>
				<div className={styles.portrait} key={portrait6}>
					<Image src={portrait6} alt="portrait6"/>
				</div>
				<div className={styles.portrait} key={portrait7}>
					<Image src={portrait7} alt="portrait7"/>
				</div>
				<div className={styles.portrait} key={portrait8}>
					<Image src={portrait8} alt="portrait8"/>
				</div>
				<div className={styles.portrait} key={portrait9}>
					<Image src={portrait9} alt="portrait9"/>
				</div>
				<div className={styles.portrait} key={portrait10}>
					<Image src={portrait10} alt="portrait10"/>
				</div>
				<div className={styles.portrait} key={portrait11}>
					<Image src={portrait11} alt="portrait11"/>
				</div>
				<div className={styles.portrait} key={portrait12}>
					<Image src={portrait12} alt="portrait12"/>
				</div>
				<div className={styles.portrait} key={portrait13}>
					<Image src={portrait13} alt="portrait13"/>
				</div>
				<div className={styles.portrait} key={portrait14}>
					<Image src={portrait14} alt="portrait14"/>
				</div>
				<div className={styles.portrait} key={portrait15}>
					<Image src={portrait15} alt="portrait15"/>
				</div>

			</div>
			<div className={styles.landscapeContainer}>
				<div className={styles.landscape} key={landscape1}>
					<Image src={landscape1} alt="landscape1"/>
				</div>
				<div className={styles.landscape} key={landscape2}>
					<Image src={landscape2} alt="landscape2"/>
				</div>
			</div>
		</div>
	);
}

export default PhotosLib;