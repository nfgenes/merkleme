import React from "react";
import useGlobalState from "../store/global";
import { successPageData } from "../data/successpage";
import styles from "../styles/success.module.css";
import Image from "next/image";
import Link from "next/link";

function Success() {
  const { merkleProof } = useGlobalState();
  console.log(merkleProof);

  return (
    <div>
      <main className={styles.mainContainer}>
        <div className={styles.checkContainer}>
          <Image
            src={successPageData.checkImg}
            width="66px"
            height="69px"
            alt="treeImg"
            className={styles.check}
          />
        </div>
        <h1 className={styles.successHeading}>{successPageData.successTitle}</h1>
        <hr className={styles.lineColor}></hr>
        <h2 className={styles.subHeading}>{successPageData.successSubHeading}</h2>
        <h4 className={styles.warningMessage}>{successPageData.successWarning}</h4>
      </main>

      {/* <h1>
        whitelist: <a href={merkleProof.whitelist}>{merkleProof.whitelist}</a>
      </h1>
      <h1>
        rootHash: <a href={merkleProof.rootHash}>{merkleProof.rootHash}</a>
      </h1>
      <h1>
        treeSummary:{" "}
        <a href={merkleProof.treeSummary}>{merkleProof.treeSummary}</a>
      </h1> */}
    <h3 className={styles.linkClass}>
      Your Whitelist: <a className={styles.anchorStyles} rel="noreferrer" target="_blank" href={merkleProof.whitelist}>{merkleProof.whitelist}</a>
    </h3>
    <h3 className={styles.rootLink}>
      Your RootHash: <a className={styles.anchorStyles} rel="noreferrer" target="_blank" href={merkleProof.rootHash}>{merkleProof.rootHash}</a>
    </h3>
    <h3 className={styles.treeLink}>
      Your Tree Summary:{" "}
      <a className={styles.anchorStyles} rel="noreferrer" target="_blank" href={merkleProof.treeSummary}>{merkleProof.treeSummary}</a>
    </h3>
    <hr className={styles.lineTwoColor}></hr>
    <div className={styles.headingFourWrapper}>
      <h4 className={styles.demoHeadingStyles}>{successPageData.demoHeading}</h4>
    </div>
      <Link href="/demo">
        <button className={styles.demoButtonStyles}>{successPageData.demoButton}</button>
      </Link>
    </div>
  );
}

export default Success;
