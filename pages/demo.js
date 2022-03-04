import { demoPageData } from "../data/demopage";
import styles from "../styles/demo.module.css";
import Image from "next/image";

export default function Demo() {

    return (
        <div>
            <main>
                <nav className={styles.demoNavbar}>
                    <div className={styles.demoTreeContainer}>
                        <Image
                        src={demoPageData.treeImg}
                        width="50px"
                        height="69px"
                        className={styles.demoTree}
                        alt="tree"
                        />
                    </div>
                        <div className={styles.demoTitle}>
                            {demoPageData.title}
                        </div>
                </nav>
            </main>

            {/* Main section */}
            <section>
                <h1 className={styles.demoHeadingStyles}>{demoPageData.demoHeading}</h1>
                <form className={styles.formSection}>
                    <div className={styles.formStyles}>
                        <label className={styles.demoLabel} 
                            htmlFor="Whitelist link">{demoPageData.whitelistInput}
                        </label>
                            <div className={styles.demoLabelWrapper}>
                                <input className={styles.whitelistStyles} type="text" name="Whitelist link"></input>
                            </div>
                        <label className={styles.addressStyles} 
                            htmlFor="Whitelist link">{demoPageData.verifyInput}
                        </label>
                            <div className={styles.verifyAddress}>
                                <input className={styles.addressInput} type="text" name="Address to verify"></input>
                            </div>
                    </div>
                    <div className={styles.demoButtonWrapper}>
                        <button className={styles.generateButtonStyles}>
                            {demoPageData.generateButton}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}