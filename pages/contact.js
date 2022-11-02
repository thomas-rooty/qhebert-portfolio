import styles from "../styles/Contact.module.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";

const Contact = () => {
	return (
		<div>
			<Head>
				<title>Q. HEBERT | Photographe</title>
				<meta name="description" content=""/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				<Navbar/>
				<Footer/>
			</main>
		</div>
	);
}

export default Contact;