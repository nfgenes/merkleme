import NavBar from "../components/navbar";
import styles from "../styles/about.module.css";

export default function About() {
    
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <div className={styles.Container}>
            <h1 className={styles.headingStyles}>What is Merkle Me?</h1>
                <p className={styles.paragraphStyles}>
                It is common for web apps to want to grant access or privileges to a certain set of users only. Typically, web2 technologies rely on usernames and passwords stored in a centralised database. So how do you verify which users can or cannot access your web3 dApp or product in a decentralised manner? 
                </p>
            </div>
        </div>
    )
}