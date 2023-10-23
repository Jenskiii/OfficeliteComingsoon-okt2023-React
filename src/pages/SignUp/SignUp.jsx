import { Timer } from "../../components/Timer/timer"
import { Form } from "../../components/Form/Form";
import { Link } from "react-router-dom";
// images
import Logo from "../../assets/shared/logo.svg";
// css
import styles from "./signup.module.css";

export function SignUp() {
  return (
    <>
      <div className={styles.grid}>
        <header className={styles.header}>
          <div className={styles["background-pattern"]}></div>
          <div className={`container | ${styles.hero}`}>
            <Link to="/">
              <img
                className={styles["company-logo"]}
                src={Logo}
                alt="officelite logo"
              />
            </Link>
            <div className="flow-medium">
              <h1 className="heading-1">Work smarter. Save time.</h1>
              <p>
                Easily manage your projects. Get on the list and receive in-app
                perks available only to early subscribers. We are moving into
                final development and getting ready for official launch soon.
              </p>
            </div>
          </div>
        </header>

        <section className={styles.timer}>
          <div className="container">
            <Timer theme={"light"} />
          </div>
        </section>

        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.form}>
              <Form />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
