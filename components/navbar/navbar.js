import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__container}>
				<Link href="/">
					<div className={styles.navbar__logo__container}>
						<Image src={"/assets/images/logo.png"} alt="logo" width={60} height={60}/>
						<a className={styles.navbar__logo}>QUENTIN <br/>MAKER</a>
					</div>
				</Link>
				<ul className={styles.navbar__menu}>
					<li className={styles.navbar__item}>
						<Link href="/">
							<a className={styles.navbar__links}>A PROPOS</a>
						</Link>
					</li>
					<li className={styles.navbar__item}>
						<Link href="/photos">
							<a className={styles.navbar__links}>PHOTOS</a>
						</Link>
					</li>
					<li className={styles.navbar__item}>
						<Link href="/">
							<a className={styles.navbar__links}>VIDEOS</a>
						</Link>
					</li>
					<li className={styles.navbar__item}>
						<Link href="/">
							<a className={styles.navbar__links}>CONTACT</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;