import React from "react";
import styles from "../landingPage/index.module.css";
import PP from "../../assets/PP.png";
import Stage from "../../assets/stage.jpg"
import ReactPict from "../../assets/react.png"
import Djempol from "../../assets/jempol.png"
import Border from "../../assets/border.svg"

export default function Page1() {
  return (
    <>
      <section className={styles.root}>
        <div className={styles.landingContent}>
          <div className={styles.landing}>
            <nav className={styles.navbar}>
              <a className={styles.navContent} href="#career">
                Career
              </a>
              <a className={styles.navContent} href="#portofolio">
                What i can do for you?
              </a>
            </nav>
            <div className={styles.profileContent}>
              <img className={styles.Profile} src={PP} alt="profile" />
              <h1 className={styles.identity}>
                hello, I am Abi <br /> Welcome to my Page
              </h1>
              <button className={styles.button1}>Click to profile Page</button>
            </div>
            <div className={styles.profileIdentity}>
              <p className={styles.paragrafIdentity}>
                Hey Visitor! my Full Name is{" "}
                <strong>Muhammad Nabil Amran</strong> but you can call me Abi{" "}
                <br /> I was born in Jakarta 17th January 1996 i was officialy{" "}
                <strong> Graduated </strong> from Bina Nusantara University at
                2018. 2019 i do Internship at{" "}
                <strong>
                  Embassy of Republic Indonesia at Seoul, South Korea.
                </strong>{" "}
                but in 2020 i was decided to be a Photographer until 2022. at
                2022 i choose my path to be a Front End Engineer.{" "}
              </p>
            </div>
          </div>
          <div className={styles.flipCardPage1}>
            <h1 className={styles.contentTittle}>
              Where did i learn the things?
            </h1>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <h3 className={styles.h3}>
                    {" "}
                    Bina Nusantara University <br /> Jakarta, Indonesia <br />{" "}
                    2014 - 2018
                  </h3>
                </div>
                <div className={styles.flipCardBack}>
                  <h1>What i Learn?</h1>
                  <p className={styles.caption}>
                    - Business and Organizations - <br /> <br />
                    - Human Resource Management - <br /> <br />
                    - Operational Management - <br /> <br />- Performance
                    Management -
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <h3 className={styles.h3}>
                    {" "}
                    Binar Academy
                    <br /> Jakarta, Indonesia <br /> 2022
                  </h3>
                </div>
                <div className={styles.flipCardBack}>
                  <h1>What i Learn?</h1>
                  <p className={styles.caption}>
                    HTML, CSS, React Js, Next Js, <br /> Node Js, Mongo DB,
                    Postgre SQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="career" className={styles.careerPage}>
        <h1 className={styles.careerTittle}>My Career :</h1>
        <div className={styles.careerPageContainer}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3 className={styles.h3}>
                  Internship <br /> Bank Syariah Mandiri <br /> August 2017 -
                  December 2017
                </h3>
              </div>
              <div className={styles.flipCardBack}>
                <h1>What i do?</h1>
                <p className={styles.caption}>
                  - Marketing Team <br />
                  Sell the Bank Product <br /> <br />- Back Office <br /> Mail
                  Administration
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3 className={styles.h3}>
                  Internship <br /> Embassy of Republic of Indonesia Seoul,
                  South Korea. <br /> February 2019 - May 2019
                </h3>
              </div>
              <div className={styles.flipCardBack}>
                <h1>What i do?</h1>
                <p className={styles.caption}>
                  - Economic Function <br />
                  News Analyst
                  <br /> <br />- Documentation Team <br /> Many events of <br />{" "}
                  Embassy of Republic of Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3 className={styles.h3}>Photographer</h3>
                <h4>
                  Freelance <br /> 2019 - present{" "}
                </h4>
              </div>
              <div className={styles.flipCardBack}>
                <h1>What i do?</h1>
                <p className={styles.caption}>
                  - Pre Wedding - <br /> <br />- Fashion - <br /> Reyd Muslim
                  Wear <br /> <br /> - Stage - <br /> Marcell Siahaan <br />{" "}
                  Satu Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.portofolio} id="portofolio">
        <h1 className={styles.careerTittle}>What can i do?</h1>
        <div className={styles.portofolioPageContainer}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img className="" src={Stage} alt="stage" />
                <h3 className={styles.h3}>Photography</h3>
              </div>
              <div className={styles.flipCardBack}>
                <h1>What i do?</h1>
                <p className={styles.caption}>
                  - Pre Wedding - <br /> <br />- Fashion - <br /> <br /> - Stage
                  Photo - <br />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img className="" src={ReactPict} alt="stage" />
                <h3 className={styles.h3}>Front End Developer</h3>
              </div>
              <div className={styles.flipCardBack}>
                <h1>What i do?</h1>
                <p className={styles.caption}>
                  - HTML - <br /> <br />- ReactJs - <br /> <br /> - CSS - <br /> <br /> - Styled Components CSS -
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img className="" src={Djempol} alt="stage" />
                <h3 className={styles.h3}>Want to know me more?</h3>
              </div>
              <div className={styles.flipCardBack}>
                <h1>What i do?</h1>
                <img width={'100px'} src={PP} alt="pp" />
                <p className={styles.caption}>
                  JUST ASK ME PLEEEAAASSEEEEE!!!
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.endPage}>
        <h1 className={styles.endPageContent}>Thankyou for coming to my <span className={styles.spanContent}>Portofolio Page</span>. <br />  I hope we can do work together in the near future. <br /><br /><br />Don't forget to<span className={styles.spanContent}> HOVER </span> the contents <br /><br /> Warm Regards,<br />Muhammad Nabil Amran</h1>
      </section>
      <section className={styles.footer}>
      <div className={styles.content}>
          <div className={styles.content1}>
          </div>
          <div className={styles.content2}>
            <img
              className={styles.border}
              src={Border}
              alt="border"
            />
          </div>
          <div className={styles.content3}>
            <h1 className={styles.contents31}>
              {" "}
              © this page all made by Muhammad Nabil Amran and <br /> he did not get help from any one except the prayer from his mother!
            </h1>
          </div>
        </div>

      </section>
    </>
  );
}
