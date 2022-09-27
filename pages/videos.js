import styles from "../styles/Videos.module.css";
import Navbar from "../components/navbar/navbar";
import VideosLib from "../components/videosLib/videosLib";
import Footer from "../components/footer/footer";
import Head from "next/head";

const Videos = () => {
	return (
		<div>
			<Head>
				<title>Q. HEBERT | Photographe</title>
				<meta name="description" content=""/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				<Navbar/>
				<VideosLib/>
				<Footer/>
			</main>
		</div>
	);
}

export default Videos;