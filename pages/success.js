import React from "react";
import useGlobalState from "../store/global";
import { successPageData } from "../data/successpage";
import styles from "../styles/success.module.css";

function Success() {
  const { merkleProof } = useGlobalState();
  console.log(merkleProof);

  return (
    <div>
      <main className={styles.mainContainer}>
        <h1 className={styles.successHeading}>{successPageData.successTitle}</h1>
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
      whitelist: <a target="_blank" href={merkleProof.whitelist}>{merkleProof.whitelist}</a>
    </h3>
    <h3>
      rootHash: <a target="_blank" href={merkleProof.rootHash}>{merkleProof.rootHash}</a>
    </h3>
    <h3>
      treeSummary:{" "}
      <a target="_blank" href={merkleProof.treeSummary}>{merkleProof.treeSummary}</a>
    </h3>

    </div>
  );
}

export default Success;
