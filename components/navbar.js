import { pageData, landingPageData } from "../data/pageData";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className={styles.navBar}>
            <div className={styles.treeImgContain}>
                <Link href="/">
                    <Image 
                        src={pageData.treeImg}
                        width="60px"
                        height="69px"
                        alt="treeImg"
                        className={styles.treeImg}
                    />
                </Link>
            </div>
            <div className={styles.title}>
                <Link href="/" >
                    {pageData.title}
                </Link>
            </div>

            <div className={styles.linkContainer}>
                <Link href="/about">
                    <div className={styles.links}>{landingPageData.aboutTitle}</div>
                </Link>
                <Link href="/team">
                    <div className={styles.links}>{landingPageData.teamTitle}</div>
                </Link>
                <Link href="/documentation">
                    <div className={styles.links}>{landingPageData.documentationTitle}</div>
                </Link>
                <Link href="/demo">
                    <div className={styles.links}>{landingPageData.demoTitle}</div>
                </Link>
            </div>
        </nav> 
    )
}