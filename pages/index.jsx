import Head from "next/head";
import Image from "next/image";
import { landingPageData } from "../data/landingpage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
    <nav className={styles.navBar}>
      <Image src={landingPageData.treeImg} width="76px" height="69px" className={styles.tree} /> 
      <h1 className={styles.title}>{landingPageData.title}</h1>
    </nav>

    {/* Beginning of hero section */}
    <div className={styles.heroContainer}>
      <h1 className={styles.heroHeading}>{landingPageData.heroHeading}</h1>
    </div>
    </div>
  );
}
