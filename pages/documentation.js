import { documentationPage } from "../data/documentPage";
import styles from "../styles/documentation.module.css";
import Image from "next/image";

export default function Documentation() {

    return (
        // Navbar Section
        <nav className={styles.documentationNavbar}>
            <div className={styles.treeImgContain}>
            <Image
            src={documentationPage.treeImg}
            width="50px"
            height="69px"
            className={styles.tree}
            alt="tree"
            />
        </div>
        <div className={styles.documentationTitle}>{documentationPage.title}</div>
        </nav>
    )
}