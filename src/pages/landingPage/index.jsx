import React from "react";
import styles from "../landingPage/index.module.css";
import PP from "../../assets/PP.png";
import Border from "../../assets/border.svg";
import Camera from "../../assets/camera.jpg";
import Mac from "../../assets/mac.jpg";
import Navbar from "../../components/navbar";
export default function Page1() {
	return (
		<>
			<section className={styles.landingPage}>
				<header className={styles.header}>
					<nav className={styles.navbar}>
						<ul className={styles.logoSection}>
							<li className={styles.logo}>
								<a href="/" className={styles.navContent}>
									MNA
								</a>
							</li>
						</ul>
						<ul className={styles.hamburger}>
							<li className={styles.hamburger}>
								<Navbar />
							</li>
						</ul>
						<ul className={styles.navList}>
							<li>
								<a href="/" className={styles.navContent}>
									About
								</a>
							</li>
							<li>
								<a href="/" className={styles.navContent}>
									Career
								</a>
							</li>
							<li>
								<a href="/" className={styles.navContent}>
									Education
								</a>
							</li>
							<li>
								<a href="/" className={styles.navContent}>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className={styles.landingPageContainer}>
					<div>
						<img className={styles.landingPagePicture} src={PP} alt="profpic" />
					</div>
					<div className={styles.landingPageContentContainer}>
						<div className={styles.landingPageContentName}>
							<img
								className={styles.landingPageBorder}
								src={Border}
								alt="border"
							/>
							<h1>
								Hello <br /> i'm Muhammad Nabil Amran
							</h1>{" "}
							<img
								className={styles.landingPageBorder}
								src={Border}
								alt="border"
							/>
						</div>
						<div className={styles.workContainer}>
							<h1 className={styles.workTittle}>i'm an</h1>
							<div className={styles.imageArtist}>
								<img className={styles.camera} src={Camera} alt="camera" />
								<h1 className={styles.jobName}>Image Artist</h1>
							</div>
							<div className={styles.imageArtist}>
								<img className={styles.camera} src={Mac} alt="camera" />
								<h1 className={styles.jobName}>Front End Developer</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.about}>
				<div className={styles.aboutContainer}>
					<div className={styles.aboutName}>
						<h1 className={styles.Name}>
							About <br /> Muhammad Nabil Amran
						</h1>
					</div>
					<div className={styles.aboutParagraf}>
						<p className={styles.Paragraf}>
							Hello, i am Muhammad Nabil Amran i am an Image Artist and Front
							End Developer i was born in Jakarta, 17th January 1996 and little
							bit about me “work hard and work smart“ is my middle name.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.career}></section>
		</>
	);
}
