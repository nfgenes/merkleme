import { documentationPage } from "../data/documentPage";
import styles from "../styles/documentation.module.css";
import Image from "next/image";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import NavBar from "../components/navbar";
import { useEffect } from "react";

export default function Documentation() {
    useEffect(() => {
        const highlight = async () => {
            await Prism.highlightAll();
        }

        highlight();
    });

    return (
        <div>
            {/* Navbar Section */}
            <nav className={styles.documentationNavbar}>
                <div className={styles.treeImgContain}>
                <Image
                src={documentationPage.treeImg}
                width="50px"
                height="69px"
                className={styles.tree}
                alt="tree"
                />
            </div>
            <NavBar />
            </nav>

            {/* Main Section */}
            <section>
                <h1>Documentation</h1>

                <h3>API Reference</h3>
                <p>
                    The MerkleMe API is open source via the GPL-3.0 License and the public repo can be found <a href="https://github.com/nfgenes/merkleme_api" target="_blank" rel="noreferrer"><b>here</b></a>.
                </p>
                <p>
                    While the API consists of two endpoints, you will only need to use one of them to generate Merkle proofs.
                </p>

                <h4>Generating a Merkle Proof</h4>

                <p>
                    ENDPOINT: https://merklemeapi.vincanger.repl.co/verify/proof
                </p>

                <p>
                    After submitting your entire whitelist via the MerkleMe homepage, your frontend client will need to provide your Solidity Contract with a way of verifying that the connected user&#39;s wallet address is a part of this whitelist.
                </p>
                <p>
                    The MerkleMe API provides your frontend with the &#34;proof&#34; (i.e. &#34;key&#34;) that your contract needs.
                </p>
                <p>
                    In order to generate the correct proof, you need to pass the correct JSON data to the endpoint:
                </p>
                <ul>
                    <li>
                        &#34;whitelist&#34;: IPFS link to list of data, e.g. the original &#34;whitelist&#34; of user&#39;s wallet addresses. This was provided to you by the MerkleMe client when you submitted your data.
                    </li>
                    <li>
                        &#34;leafToVerify&#34;: Leaf, e.g. the wallet address of the user to be verified. This is the currently connected user&#39;s wallet address.
                    </li>
                </ul>

                <h4>Axios Example</h4>


                
            </section>
        </div>
    )
}