import NavBar from "../components/navbar";
import DocumentationAPIReference from "../components/documentationAPIReference";
import DocumentationSampleContract from "../components/documentationSampleContract";
import styles from "../styles/documentation.module.css";

export default function Documentation() {
    return (
        <div>
            <NavBar />
            <h1 className={styles.documentationHeading}>Documentation</h1>
                <div className={styles.documentationContainer}>
                    <DocumentationAPIReference />
                </div>
            <div className={styles.documentationContainer}>
                <DocumentationSampleContract />
            </div>
        </div>
    )
}