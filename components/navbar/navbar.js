import Link from 'next/link';
import Image from "next/future/image";
import Logo from "../../public/assets/images/logo.png";
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__container}>
				<Link href="/">
					<div className={styles.navbar__logo__container}>
						<Image src={Logo} alt="logo" width={60}/>
						<a className={styles.navbar__logo}>QUENTIN <br/>MAKER</a>
					</div>
				</Link>
				<ul className={styles.navbar__menu}>
					<Link href="/">
						<li className={styles.navbar__item}>
							<a className={styles.navbar__links}>A PROPOS</a>
						</li>
					</Link>
					<Link href="/photos">
					<li className={styles.navbar__item}>
							<a className={styles.navbar__links}>PHOTOS</a>
					</li>
					</Link>
					<Link href="/videos">
					<li className={styles.navbar__item}>
							<a className={styles.navbar__links}>VIDEOS</a>
					</li>
					</Link>
					<Link href="/contact">
					<li className={styles.navbar__item}>
							<a className={styles.navbar__links}>CONTACT</a>
					</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;