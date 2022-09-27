import styles from "../styles/Photos.module.css";
import Navbar from "../components/navbar/navbar";
import PhotosLib from "../components/photosLib/photosLib";
import Footer from "../components/footer/footer";
import Head from "next/head";

const Photos = () => {
	return (
		<div>
			<Head>
				<title>Q. HEBERT | Photographe</title>
				<meta name="description" content=""/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				<Navbar/>
				<PhotosLib/>
				<Footer/>
			</main>
		</div>
	);
}

export default Photos;