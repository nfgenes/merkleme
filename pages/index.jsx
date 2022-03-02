import Head from "next/head";
import Image from "next/image";
import { landingPageData } from "../data/landingpage";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.home}>
      <nav className={styles.navBar}>
        <div className={styles.treeImgContain}>
          <Image
            src={landingPageData.treeImg}
            width="50px"
            height="69px"
            className={styles.tree}
            alt="tree"
          />
        </div>
        <div className={styles.title}>{landingPageData.title}</div>
      </nav>

      {/* Beginning of hero section */}
      <main className={styles.main}>
        <section className={styles.leftSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroHeading}>
              {landingPageData.heroHeading}
            </div>
          </div>
          <div className={styles.heroSubheading}>
            {landingPageData.heroSubheading}
          </div>
          <Link href="/form">
          <button className={styles.ctaBtn}>{landingPageData.ctaBtn}</button>
          </Link>
        </section>

        <section className={styles.rightSection}>
          <div className={styles.handcraftImgContainer}>
          <Image
            src={landingPageData.handcraftImg}
            width="344.27px"
            height="460.82px"
            className={styles.handcraftImg}
            alt="handcraftImg"
          />
          </div>
        </section>
      </main>
    </div>
  );
}
