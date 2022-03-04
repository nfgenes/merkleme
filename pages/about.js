import { aboutPageData } from "../data/aboutpage";
import styles from "../styles/about.module.css";
import Image from "next/image";
import NavBar from "../components/navbar";

export default function About() {
    
    return (
        <div>
            <nav className={styles.aboutNav}>
                <div className={styles.treeContainer}>
                    {/* <Image 
                    src={aboutPageData.treeImg}
                    width="60px"
                    height="69px"
                    alt="treeImg"
                    className={styles.treeImg} /> */}
                    <NavBar />
                </div>
            </nav>
        </div>
    )
}