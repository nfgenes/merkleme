import { addressPage } from "../data/addresspage";
import Image from "next/image";
import styles from "../styles/address.module.css";

export default function Address() {
    
    return (
        <div>
            <nav className={styles.addressNav}>
                <div className={ styles.treeImgContainer}>
                <Image src={addressPage.treeImgAsset} width="50px" height="69px" alt="treeImg" className={styles.treeImgAsset} />
                </div>
                <div className={styles.title}>
                    {addressPage.merkleTitle}
                </div>
            </nav>
        </div>
    )
}