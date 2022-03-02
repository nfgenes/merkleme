import { informationData } from "../data/information";
import Image from "next/image";
import styles from "../styles/Form.module.css";
import Link from "next/link";

export default function Form() {
  return (
    <div className={styles.container}>
      {/* Navbar Section */}
      <nav className={styles.nav}>
        <div className={styles.treeImgContain}>
          <Image
            src={informationData.treeImg}
            width="50px"
            height="69px"
            alt="treeImg"
            className={styles.treeImg}
          />
        </div>
        <div className={styles.title}>{informationData.title}</div>
      </nav>

      {/* Hero Section */}
      <main className={styles.heroMain}>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroHeading}>{informationData.heading}</div>
          </div>

          <section className={styles.formContainer}>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBarOne}></div>
              <div className={styles.progressBarTwo}></div>
            </div>

            {/* Form Section */}
            <section className={styles.formSection}>
              <div className={styles.formStyles}>
                <div>
                  <label className={styles.collectionTitle} htmlFor="name">
                    {informationData.collectionTitle}
                  </label>
                  <div className={styles.labelWrapper}>
                    <input className={styles.collectionForm} />
                  </div>
                </div>
                {/* Tagging for the email form*/}
                <div>
                  <label className={styles.emailStyles} htmlFor="email">
                    {informationData.emailTitle}
                  </label>
                  <div className={styles.labelWrapper}>
                    <input className={styles.emailForm} />
                  </div>
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <Link href="/address" passHref={true}>
                  <button className={styles.nextStyles}>
                    {informationData.nextButton}
                  </button>
                </Link>
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}
