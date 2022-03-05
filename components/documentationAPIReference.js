import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from "react";
import styles from "../styles/documentation.module.css"

export default function DocumentationAPIReference() {
    useEffect(() => {
        const highlight = () => {
            Prism.highlightAll();
        }
        highlight();
    });

    return (
        <div className={styles.documentationBorder}>
            <h3 className={styles.headingStyles}>API Reference</h3>
            <p className={styles.paragraphStyles}>
                The MerkleMe API is open source via the GPL-3.0 License and the public repo can be found <a href="https://github.com/nfgenes/merkleme_api" target="_blank" rel="noreferrer"><b>here</b></a>.
            </p>
            <p className={styles.paragraphStyles}>
                While the API consists of two endpoints, you will only need to use one of them to generate Merkle proofs.
            </p>

            <h4 className={styles.headingStyles}>Generating a Merkle Proof</h4>

            <p className={styles.paragraphStyles}>
                ENDPOINT: https://merklemeapi.vincanger.repl.co/verify/proof
            </p>

            <p className={styles.paragraphStyles}>
                After submitting your entire whitelist via the MerkleMe homepage, your frontend client will need to provide your Solidity Contract with a way of verifying that the connected user&#39;s wallet address is a part of this whitelist.
            </p>
            <p className={styles.paragraphStyles}>
                The MerkleMe API provides your frontend with the &#34;proof&#34; (i.e. &#34;key&#34;) that your contract needs.
            </p>
            <p className={styles.paragraphStyles}>
                In order to generate the correct proof, you need to pass the correct JSON data to the endpoint:
            </p>
            <ul className={styles.paragraphStyles}>
                <li>
                    &#34;whitelist&#34;: IPFS link to list of data, e.g. the original &#34;whitelist&#34; of user&#39;s wallet addresses. This was provided to you by the MerkleMe client when you submitted your data.
                </li>
                <li>
                    &#34;leafToVerify&#34;: Leaf, e.g. the wallet address of the user to be verified. This is the currently connected user&#39;s wallet address.
                </li>
            </ul>

            <h4 className={styles.headingStyles}>Axios Example</h4>

            <div>
                <pre className="language-javascript">
                    <code>
                        {`
                            const requestBody = {
                                "whitelist":"https://gateway.pinata.cloud/ipfs/<YourUniqueCID>",
                                "leafToVerify":"0xXXXXXXXXXX..."
                            }
                            
                            const response = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBody);
                            
                            console.log(response) /* expected output:
                            {
                                "leafValue": "0x1D42025CDE94B60e99542E537f8E1eeCE9BB109c",
                                "leafHex": "1d42025cde94b60e99542e537f8e1eece9bb109c",
                                "leafHash": "0x177607c522d091d47ece198401be2eacfaa6ad10f838d3bff8e6de6972a36725",
                                "proof":[
                            "0x1611320f23d814d8102ce1d2a2c1244b6906750b213a2929145378ff827215d5",
                            "0x230c849359d463cdf268de095c2dec065ae5f39c088184e13944aef34939d242",
                            "0x573f6cd8397cd609028b77a9864a284e363514e7b9ae1a991c1b52862329c39a",
                            "0x2885b3b387fa83132c889dff1497c24214d0db3a81015f7a50408809f16c399c"
                                ]
                            }
                            */
                        `}
                    </code>
                </pre>
            </div>

            <div>
                <p className={styles.paragraphStyles}>
                    With your Proof returned, you must send this to your solidity contract, for example:
                </p>

                <pre className="language-javascript">
                    <code>
                        {`
                            const nftTxn = await connectedContract.mintNFT(response.proof);
                        `}
                    </code>
                </pre>

                <p className={styles.paragraphStyles}>
                    To learn what needs to be sent to your Solidity Contract for proper verification, please visit our <a 
                        href="https://github.com/nfgenes/merkleme/tree/main/example"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <b className={styles.paragraphStyles}>Sample Demo NFT Minting Contract</b>
                    </a>
                </p>
            </div>
        </div>
    )
}