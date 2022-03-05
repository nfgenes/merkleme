import NavBar from "../components/navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        const highlight = () => {
            Prism.highlightAll();
        }
        highlight();
    });

    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <div className={styles.Container}>
                <div className={styles.Content}>
                    <h1 className={styles.headingStyles}>What is Merkle Me?</h1>

                    <Image
                        src="/../public/assets/merkleme_overview1.png"
                        width={700}
                        height={650}
                        alt="MerkleMe overview"
                    />
                    
                    <p className={styles.paragraphStyles}>
                        This is an exploratory project to build a backend solution for generating Merkle trees for a given list of addresses 
                        (a whitelist). Lots of folks are needing whitelists for their NFT projects and typically have to go through the extra 
                        steps of generating a Merkle tree and then running a backend to verify proofs on the fly. These steps also require 
                        knowledge of Merkle trees to implement them.  
                    </p>

                    <p className={styles.paragraphStyles}>
                        The idea behind this project is to abstract away the Merkle tree process and simply provide a front end solution that 
                        allows anyone to copy + paste their whitelist into a form and click a button to automagically generate their Merkle Tree.
                    </p>

                    <p className={styles.paragraphStyles}>
                        Once the Merkle tree is created, the developer only needs to add the root hash and the <a href="https://docs.openzeppelin.com/contracts/3.x/api/cryptography#MerkleProof" target="_blank" rel="noreferrer">
                        <b>OpenZeppelin MerkleProof</b></a> utility to their minting contract. The developer's front end will then be able to grab 
                        a user's address (likely from their wallet) and use it to generate a Merkle proof on the fly for that given address via the 
                        MerkeMe backend API.
                    </p>

                    <p className={styles.paragraphStyles}>
                        With a Merkle proof in hand, the frontend can then submit a transaction to the minting contract to attempt minting. The 
                        OpenZeppelin MerkleProof contract requires the proof, root and leaf:
                    </p>

                    <pre className="language-javascript">
                        <code>
                            {`
                                verify(bytes32[] proof, bytes32 root, bytes32 leaf) → bool  
                            `}
                        </code>
                    </pre>

                    <Image
                        src="/../public/assets/merkleme_overview2.png"
                        width={750}
                        height={407}
                        alt="MerkleMe overview"
                    />

                </div>
            </div>
        </div>
    )
}