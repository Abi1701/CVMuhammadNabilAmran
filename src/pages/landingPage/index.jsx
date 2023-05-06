import React from "react";
import styles from "../landingPage/index.module.css";
import PP from "../../assets/PP.png";
import Border from "../../assets/border.svg";
import Camera from "../../assets/camera.jpg";
import Mac from "../../assets/mac.jpg";
import Lens from "../../assets/lens.png";
import IMac from "../../assets/imac.png";
import Web from "../../assets/web.png";
import UI from "../../assets/graphic-design.png";
import Mic from "../../assets/microphone.png";
import Dev from "../../assets/programming.png";
import Prewedd from "../../assets/prewedd.jpg";
import Stage from "../../assets/stage.jpg";
import Fashion from "../../assets/Fashion.JPG";
import DiMasjid from "../../assets/DiMasjid.png";
import BinarProject from "../../assets/BinarProject.png";
import Kepanitiaan from "../../assets/KepanitiaanDimasjid.png";
import Navbar from "../../components/navbar";
import { Instagram, LinkedIn, PhoneAndroid } from "@mui/icons-material";
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
								Hello, <br /> I'm Muhammad Nabil Amran
							</h1>{" "}
							<img
								className={styles.landingPageBorder}
								src={Border}
								alt="border"
							/>
						</div>
						<div className={styles.workContainer}>
							<h1 className={styles.workTittle}>I'm an</h1>
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
							Born in Jakarta, 17th January 1996, I pursued a career as Image
							Artist and Front End Developer. I passionate about visual project
							and do a code that's why i pursued my career to be a Front End
							Developer. “work hard and work smart“ is my middle name. Make a
							to-do list is my way to do my code routines.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.career}>
				<div className={styles.careerTittle}>Career</div>
				<div className={styles.careerContainer}>
					<div className={styles.careerContainer1}>
						<h1>Back office and Marketing Internship</h1>
						<p>Bank Syariah Mandiri (2017)</p>
					</div>
					<div className={styles.careerContainer2}>
						<h1>Economic Function Internship</h1>
						<p>Embassy of Republic Indonesia in South Korea (2019)</p>
					</div>
					<div className={styles.careerContainer3}>
						<h1>Front End Developer & UI Designer</h1>
						<p>Freelance at DiMasjid (2023)</p>
					</div>
				</div>
			</section>
			<section className={styles.services}>
				<div className={styles.servicesTittle}>Services</div>
				<div className={styles.servicesContainer}>
					<div className={styles.servicesContainer1}>
						<div className={styles.servicesContent}>
							<img
								className={styles.imageContent}
								width={40}
								src={Lens}
								alt="lensa"
							/>
							Image Artist
						</div>
						<p className={styles.servicesParagraf}>
							Photographer since 2016 and Videographer since 2019. Products of
							my photography and videography are at my Instagram account
							@potretansiabi.
						</p>
					</div>
					<div className={styles.servicesContainer2}>
						<div className={styles.servicesContent2}>
							<img
								className={styles.imageContent}
								width={40}
								src={IMac}
								alt="mac"
							/>
							Front End Developer
						</div>
						<p>
							Front End Developer since 2023 after pursuing a 6-month boot camp
							at Binar Academy. I master ReactJs, Next Js with the
							styled-components.
						</p>
					</div>
					<div className={styles.servicesContainer3}>
						<div className={styles.servicesContent3}>
							<img
								className={styles.imageContent}
								width={40}
								src={Web}
								alt="Website"
							/>
							Responsive Website
						</div>
						<p>
							Developing responsive websites to all platforms such as mobile,
							Ipad and tablets.
						</p>
					</div>
					<div className={styles.servicesContainer4}>
						<div className={styles.servicesContent4}>
							<img
								className={styles.imageContent}
								width={40}
								src={UI}
								alt="UI"
							/>
							Website Design UI
						</div>
						<p>
							Designing websites using Figma that are applicable to all
							platforms. I focus on the UI research and developing.
						</p>
					</div>
					<div className={styles.servicesContainer5}>
						<div className={styles.servicesContent5}>
							<img
								className={styles.imageContent}
								width={40}
								src={Mic}
								alt="mic"
							/>
							Website Branding
						</div>
						<p>
							Graduated from Bina Nusantara University Management Program, I
							focused on Business and Organization. This enhanced my skill on
							branding for people and business.
						</p>
					</div>
					<div className={styles.servicesContainer6}>
						<div className={styles.servicesContent6}>
							<img
								className={styles.imageContent}
								width={40}
								src={Dev}
								alt="dev"
							/>
							Web Development
						</div>
						<p>
							I detect errors and fix Front End Bug as well as developing
							updates from clients.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.portofolio}>
				<h1 className={styles.portofolioTittle}>Image Artist</h1>
				<div className={styles.portofolioContainer}>
					<div className={styles.cardContent}>
						<img src={Prewedd} width={250} alt="prewedd" />
						<div className={styles.cardName}>
							<div className={styles.cardTittle}>Pre Wedding Photo</div>
						</div>
					</div>
					<div className={styles.cardContent}>
						<img src={Stage} width={250} alt="prewedd" />
						<div className={styles.cardName}>
							<div className={styles.cardTittle}>Stage Concert Photo</div>
						</div>
					</div>
					<div className={styles.cardContent}>
						<img src={Fashion} width={250} alt="prewedd" />
						<div className={styles.cardName}>
							<div className={styles.cardTittle}>Fashion Catalogue Photo</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.portofolio}>
				<h1 className={styles.portofolioTittleLong}>
					Front End Developer Portofolio
				</h1>
				<div className={styles.portofolioContainerWebsite}>
					<img
						className={styles.DiMasjidPicture}
						src={DiMasjid}
						alt="dimasjid"
					/>
					<p className={styles.aboutDiMasjid}>
						<h1>About DiMasjid</h1>
						DiMasjid is a website for helping the mosque to more known to
						moeslem people. DiMasjid is built using VueJs for Frontend. I fully
						designed and developed the front end using Figma and implemented by
						CSS.
					</p>
				</div>
				<div className={styles.portofolioContainerWebsite}>
					<img
						className={styles.DiMasjidPicture}
						src={BinarProject}
						alt="dimasjid"
					/>
					<p className={styles.aboutDiMasjid}>
						<h1>About Binar Project</h1>
						Binar Project is the final project of Binar bootcamp students. The
						project is prototype game platform. Built using ReactJS (NextJs) and
						styled with Styled-Components by Redux components.
					</p>
				</div>
				<div className={styles.portofolioContainerWebsite}>
					<img
						className={styles.DiMasjidPicture}
						src={Kepanitiaan}
						alt="dimasjid"
					/>
					<p className={styles.aboutDiMasjid}>
						<h1>
							About <br /> Kepanitiaan DiMasjid
						</h1>
						Kepanitiaan DiMasjid is part of DiMasjid project. It is created for
						mosque community and used for Data Tracking all events held in the
						mosque. It is currently available to track Zakat. The project is
						built using Ruby on Rails and styled with CSS.
					</p>
				</div>
			</section>
			<section className={styles.portofolio2}>
				<h1 className={styles.portofolioTittleLong}>
					Front End Developer Skills
				</h1>
				<div className={styles.portofolioContainer2}>
					<div className={styles.cardName2}>
						<div className={styles.cardTittle2}>HTML</div>
					</div>
					<div className={styles.cardName2}>
						<div className={styles.cardTittle2}>CSS</div>
					</div>
					<div className={styles.cardName2}>
						<div style={{ fontSize: 16 }} className={styles.cardTittle2}>
							Styled Components
						</div>
					</div>
					<div className={styles.cardName2}>
						<div className={styles.cardTittle2}>SCSS</div>
					</div>
					<div className={styles.cardName2}>
						<div className={styles.cardTittle2}>ReactJs</div>
					</div>
					<div className={styles.cardName2}>
						<div className={styles.cardTittle2}>NextJs</div>
					</div>

					<div className={styles.cardName2}>
						<div className={styles.cardTittle2}>Figma</div>
					</div>
				</div>
			</section>
			<section className={styles.contact}>
				<div className={styles.contactContainer}>
					<div className={styles.contactContent}>
						<PhoneAndroid />
						<h1>+6287786888827</h1>
					</div>
					<a
						className={styles.LinkedIn}
						href="https://www.linkedin.com/in/muhammad-nabil-amran-2ab996225/">
						<div className={styles.contactContent}>
							<LinkedIn />
							<h1>Muhammad Nabil Amran</h1>
						</div>
					</a>
					<a
						className={styles.LinkedIn}
						href="https://www.instagram.com/potretansiabi/">
						<div className={styles.contactContent}>
							<Instagram />
							<h1>potretansiabi</h1>
						</div>
					</a>
				</div>
			</section>
		</>
	);
}
