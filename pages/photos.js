import styles from "../styles/Photos.module.css";
import Navbar from "../components/navbar/navbar";
import Gallery from "../components/gallery/gallery";
import Footer from "../components/footer/footer";

const Photos = () => {
	return (
		<main className={styles.main}>
			<Navbar />
			<Gallery />
			<Footer />
		</main>
	);
}

export default Photos;