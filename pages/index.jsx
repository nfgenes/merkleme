import Head from "next/head";
import Image from "next/image";
import { landingPageData } from "../data/landingpage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>{landingPageData.title}</h1>
    </div>
  );
}
