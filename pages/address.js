import { addressPage } from "../data/addresspage";
import Image from "next/image";
import styles from "../styles/address.module.css";

export default function Address() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.treeImgContain}>
          <Image
            src={addressPage.treeImgAsset}
            width="50px"
            height="69px"
            alt="treeImg"
            className={styles.treeImg}
          />
        </div>
        <div className={styles.title}>{addressPage.merkleTitle}</div>
      </nav>

      <section className={styles.addressSection}>
        <div className={styles.heading}>{addressPage.addressHeading}</div>

        <div className={styles.addressFormSection}>
          <textarea
            placeholder={addressPage.placeholderText}
            rows="20"
            cols="40"
            className={styles.textarea}
          ></textarea>

          <div className={styles.buttonWrapper}>
            <button className={styles.nextStyles}>
              {addressPage.merkleButton}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
