import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function NavBar() {
    return (
        <>
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
        </>
    )
}