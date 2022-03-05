import { secondNavigation } from "../data/landingpage";
import styles from "../styles/navbar.module.css";
import Image from "next/image"

export default function secondaryNavbar() {
    return (
            <nav className={styles.navBar}>
                <div className={styles.treeImgContain}>
                <Image 
                    src={secondNavigation.treeImg}
                    width="60px"
                    height="69px"
                    alt="treeImg"
                    className={styles.treeImg}
                />
            </div>
                <div className={styles.title}>
                    {secondNavigation.title}
                </div>
            </nav>
    )
}