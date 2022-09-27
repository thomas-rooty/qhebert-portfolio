import styles from "../../styles/Photos.module.css";
import ModalImage from "react-modal-image";
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
					<ModalImage
						small={"/assets/pictures_gallery/portrait/1.jpg"}
						medium={"/assets/pictures_gallery/portrait/1.jpg"}
						large={"/assets/pictures_gallery/portrait/1.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait2}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/2.jpg"}
						medium={"/assets/pictures_gallery/portrait/2.jpg"}
						large={"/assets/pictures_gallery/portrait/2.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait3}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/3.jpg"}
						medium={"/assets/pictures_gallery/portrait/3.jpg"}
						large={"/assets/pictures_gallery/portrait/3.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait4}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/4.jpg"}
						medium={"/assets/pictures_gallery/portrait/4.jpg"}
						large={"/assets/pictures_gallery/portrait/4.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait5}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/5.jpg"}
						medium={"/assets/pictures_gallery/portrait/5.jpg"}
						large={"/assets/pictures_gallery/portrait/5.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait6}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/6.jpg"}
						medium={"/assets/pictures_gallery/portrait/6.jpg"}
						large={"/assets/pictures_gallery/portrait/6.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait7}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/7.jpg"}
						medium={"/assets/pictures_gallery/portrait/7.jpg"}
						large={"/assets/pictures_gallery/portrait/7.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait8}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/8.jpg"}
						medium={"/assets/pictures_gallery/portrait/8.jpg"}
						large={"/assets/pictures_gallery/portrait/8.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait9}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/9.jpg"}
						medium={"/assets/pictures_gallery/portrait/9.jpg"}
						large={"/assets/pictures_gallery/portrait/9.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait10}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/10.jpg"}
						medium={"/assets/pictures_gallery/portrait/10.jpg"}
						large={"/assets/pictures_gallery/portrait/10.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait11}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/11.jpg"}
						medium={"/assets/pictures_gallery/portrait/11.jpg"}
						large={"/assets/pictures_gallery/portrait/11.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait12}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/12.jpg"}
						medium={"/assets/pictures_gallery/portrait/12.jpg"}
						large={"/assets/pictures_gallery/portrait/12.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait13}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/13.jpg"}
						medium={"/assets/pictures_gallery/portrait/13.jpg"}
						large={"/assets/pictures_gallery/portrait/13.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait14}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/14.jpg"}
						medium={"/assets/pictures_gallery/portrait/14.jpg"}
						large={"/assets/pictures_gallery/portrait/14.jpg"}
						className={styles.imgPortrait}
					/>
				</div>
				<div className={styles.portrait} key={portrait15}>
					<ModalImage
						small={"/assets/pictures_gallery/portrait/15.jpg"}
						medium={"/assets/pictures_gallery/portrait/15.jpg"}
						large={"/assets/pictures_gallery/portrait/15.jpg"}
						className={styles.imgPortrait}
					/>
				</div>

			</div>
			<div className={styles.landscapeContainer}>
				<div className={styles.landscape} key={landscape1}>
					<ModalImage
						small={"/assets/pictures_gallery/landscape/1.jpg"}
						medium={"/assets/pictures_gallery/landscape/1.jpg"}
						large={"/assets/pictures_gallery/landscape/1.jpg"}
						className={styles.imgLandscape}
					/>
				</div>
				<div className={styles.landscape} key={landscape2}>
					<ModalImage
						small={"/assets/pictures_gallery/landscape/2.jpg"}
						medium={"/assets/pictures_gallery/landscape/2.jpg"}
						large={"/assets/pictures_gallery/landscape/2.jpg"}
						className={styles.imgLandscape}
					/>
				</div>
			</div>
		</div>
	);
}

export default PhotosLib;