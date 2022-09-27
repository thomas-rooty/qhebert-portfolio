import Head from 'next/head'
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Q. HEBERT | Photographe</title>
        <meta name="description" content="" />
	      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default Home;