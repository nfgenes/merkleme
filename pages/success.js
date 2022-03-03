import React from "react";
import useGlobalState from "../store/global";

function Success() {
  const { merkleProof } = useGlobalState();

  return (
    <div>
      <h1>
        whitelist: <a href={merkleProof.whitelist}>{merkleProof.whitelist}</a>
      </h1>
      <h1>
        rootHash: <a href={merkleProof.rootHash}>{merkleProof.rootHash}</a>
      </h1>
      <h1>
        treeSummary:{" "}
        <a href={merkleProof.treeSummary}>{merkleProof.treeSummary}</a>
      </h1>
    </div>
  );
}

export default Success;
