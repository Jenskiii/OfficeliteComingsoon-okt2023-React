import { PricePlan } from "../../components/PricePlan/PricePlan";
import { Timer } from "../../components/Timer/timer";
import { Link } from "react-router-dom"
// images
import Logo from "../../assets/shared/logo.svg";
import Hero from "../../assets/home/illustration-charts.svg";
// css
import styles from "./home.module.css";

export function Home() {
  return (
    <>
      
        <header className={styles.header}>
          <div className={styles["background__pattern"]}></div>
          <div className={`container | ${styles.container}`}>
           <Link to="/home"><img
              className={styles["company-logo"]}
              src={Logo}
              alt="officelite logo"
            /></Link>

            <div className={styles.hero}>
              <div className="even-columns">
                <div className={styles["hero__img"]}>
                  <img src={Hero} alt="illustration charts" />
                </div>
                <div className="flow-medium">
                  <h1 className="heading-1">
                    A simple solution to complex tasks is coming soon
                  </h1>
                  <p>
                    Say goodbye to inefficient juggling of multiple apps, teams,
                    and projects. Officelite is the new collaboration platform
                    built with an intuitive interface to improve productivity.
                  </p>
                  <Link to="/signup" className="button" datatype="primary">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className={styles["price-plan"]}>
            <div className={`container | ${styles["price-plan__wrapper"]}`}>
              <PricePlan />
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={`container | ${styles["footer__wrapper"]}`}>
            <Timer theme={"dark"} />
            <Link to="/signup" className={`button ${styles["footer__button"]}`} datatype="primary">
              Get Started
            </Link>
          </div>
        </footer>
     
    </>
  );
}
