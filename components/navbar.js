import Link from "next/link";
import styles from '../styles/navbar.module.css';
import Image from "next/image";
import { landingPageData } from "../data/landingpage";

export default function NavBar() {
    return (
        <>
        <nav className={styles.navBar}>
        <div className={styles.treeImgContain}>
          <Image
            src={landingPageData.treeImg}
            width="60px"
            height="69px"
            className={styles.tree}
            alt="tree"
          />
        </div>
        <Link href="/">
                <div className={styles.title}>MerkleMe</div>
            </Link>
            <Link href="/about">
                <div className={styles.aboutStyle}>About</div>
            </Link>
            <Link href="/team">
                <div className={styles.teamStyle}>Team</div>
            </Link>
            <Link href="/documentation">
                <div className={styles.documentationStyle}>Documentation</div>
            </Link>
            <Link href="/demo">
                <div className={styles.documentationStyle}>Demo</div>
            </Link>
        </nav>
        </>
    )
}