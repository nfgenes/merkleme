import { documentationPage } from "../data/documentPage";
import styles from "../styles/documentation.module.css";
import Image from "next/image";

import NavBar from "../components/navbar";

export default function Documentation() {

    return (
        <div>
            {/* Navbar Section */}
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
            <NavBar />
            </nav>

            {/* Main Section */}
            <section>
                <h1>Documentation</h1>
                <h3>MerkleMe Overview</h3>
                <Image
                    src="/../public/assets/merkleme_overview.png"
                    alt="MerkleMe Overview"
                    width={600}
                    height={400}
                />
            </section>
        </div>
    )
}