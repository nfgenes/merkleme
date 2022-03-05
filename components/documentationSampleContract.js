import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/documentation.module.css"

export default function DocumentationSampleContract() {
    useEffect(() => {
        const highlight = () => {
            Prism.highlightAll();
        }
        highlight();
    });

    return (
        <div>
            <h3 className={styles.headingStyles}>Sample ERC721 Contract Implementation</h3>

            <p className={styles.paragraphStyles}>
                This example uses a standard ERC721 minting contract that imports the <a href="https://docs.openzeppelin.com/contracts/3.x/api/cryptography#MerkleProof" target="_blank" rel="noreferrer"><b>OpenZeppelin MerkleProof</b></a> utility to verify Merkle proofs.
            </p>

            <p className={styles.paragraphStyles}>
                DISCLAIMER: THIS EXAMPLE IS NOT INTENDED TO BE USED FOR A PRODUCTION IMPLEMENTATION. 
                IT IS A VERY BASIC EXAMPLE THAT IS MISSING A NUMBER OF OTHER FEATURES. THIS EXAMPLE USES THE MINIMUM CODE NECESSARY 
                TO PROVIDE A SAMPLE FOR HOW ONE COULD IMPLEMENT THE OZ MERKLE PROOF UTITLITY IN A MINTING CONTRACT.
            </p>

            <p className={styles.paragraphStyles}>
                The OpenZeppelin Merkle Proof utility has a single function that requires three arguments:
            </p>

            <ul className={styles.paragraphStyles}>
                <li><b>Proof</b></li>
                    <ul>
                        <li>A bytes32 array of addresses</li>
                        <li>The MerkleMe API will provide this to your front end via a post request</li>
                    </ul>
                    <li>
                        <b>Root</b>
                    </li>
                    <ul>
                        <li>A bytes32 representation of the root hash</li>
                        <li>The MerkleMe API will provide a IPFS link to access your root hash once your submit your whitelist</li>
                    </ul>
                    <li>
                        <b>Leaf</b>
                    </li>
                    <ul>
                        <li>A bytes32 representation of the address that you wish to verify</li>
                        <li>This will be any arbitrary address that you wish to submit for verifying against your Merkle Tree</li>
                        <li>
                            Note that while it is possible to submit a transaction to verify a proof for an invalid address, the MerkleMe 
                            API will return a warning that if the submitted address is not contained within the whitelist, thus preventing 
                            the need to submit a blockchain transaction.
                        </li>
                    </ul>
            </ul>

            <p className={styles.paragraphStyles}>
                The sample contract can be viewed and deployed on 
                <a href="https://remix.ethereum.org/#url=https://github.com/nfgenes/merkleme/blob/main/example/sampleContract.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.4+commit.c7e474f2.js" target="_blank" rel="noreferrer"><b>This Remix Instance</b></a>
            </p>

            <h4 className={styles.headingStyles}>Step by Step Example Implementation</h4>

            <h5 className={styles.headingStyles}>Sample Whitelist</h5>

            <p className={styles.paragraphStyles}>
                This sample whitelist is the array of addresses that are provided by Remix.
            </p>

            <div>
                <pre className="language-javascript">
                    <code>
                        {`
                            [
                                "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
                                "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
                                "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
                                "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
                                "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
                                "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
                                "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678",
                                "0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7",
                                "0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C",
                                "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
                                "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c",
                                "0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C",
                                "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB",
                                "0x583031D1113aD414F02576BD6afaBfb302140225",
                                "0xdD870fA1b7C4700F2BD7f44238821C26f7392148"
                              ]
                        `}
                    </code>
                </pre>
            </div>

            <p className={styles.paragraphStyles}>
                Sample Merkle Proof for first address in list above (&#34;0x5B38Da6a701c568545dCfcB03FcB875f56beddC4&#34;)
            </p>

            <div>
                <pre className="language-javascript">
                    <code>
                        {`
                             [
                                "0x947839edeb5b3ee9a2dee69954b24aeb3f91b8ff4c608efd90618351fe77152f",
                                "0x645008222d03b9de61b00e5186ebeb9e4c1d6e689cffcfef6ec90aa0e049d83e",
                                "0x7f83937ed8660e9c57c5b1ccade041d8fb05f99de98185d7aa016bf7e2586feb",
                                "0xf62211165bc6d689018cd34b7394a39e7e2a25477a2da14092295428b898d9de"
                            ]
                        `}
                    </code>
                </pre>
            </div>
            
            <h5 className={styles.headingStyles}>Deploy your minting contract</h5>

            <p className={styles.paragraphStyles}>
                In this example minting contract, the root hash is stored in state. The contract initializes the 
                root hash in the constructor on contract deployment.
            </p>

            <div>
                <pre className="language-javascript">
                    <code>
                        {`
                            contract MyToken is ERC721, Ownable {
                                using Counters for Counters.Counter;

                                Counters.Counter private _tokenIdCounter;

                                /// @notice store the root hash from the whitelist
                                /// Merkle Tree here for verifying proofs
                                bytes32 public rootHash;

                                constructor(bytes32 _rootHash) ERC721("MyToken", "MTK") {
                                    /// @dev pass in the initial root hash when deploying
                                    rootHash = _rootHash;
                            }
                        `}
                    </code>
                </pre>
            </div>

            <ol className={styles.paragraphStyles}>
                <li>
                    Select the minting contract
                </li>
                <li>
                    Deploy the contract while providing a root hash (which is provided to you by the MerkleMe API)
                </li>
            </ol>
            <div className={styles.imgCenter}>
            <Image
                src="/../public/assets/sample_implementation_deploy.png"
                width="500px"
                height="638px"
                alt="deploy example"
                className={styles.centerImg}
            />

            </div>
            <h5 className={styles.removeInstance}>Review the Contract Instance</h5>
            <div className={styles.imgCenter}>
                <Image
                src="/../public/assets/sample_implementation_expand.png"
                width="327px"
                height="181px"
                alt="deploy example"
                />
                <Image
                src="/../public/assets/sample_implementation_rootHash.png"
                width="284px"
                height="107px"
                alt="deploy example"
                />
            </div>

            <p className={styles.paragraphStyles}>
                If the root hash is not correct, or if it needs to be changed, you can modify it via the 
                modifyRootHash() method. Simply supply a new root hash and submit the contract transaction
            </p>

            <h5 className={styles.headingStyles}>Verify the Proof</h5>

            <p className={styles.paragraphStyles}>
                Call the mintMyToken() method in the contract and supply the proof provided above as the required argument.
            </p>

            <div className={styles.imgCenter}>
                <Image
                src="/../public/assets/sample_implementation_mint.png"
                width="293px"
                height="381px"
                alt="deploy example"
                />
            </div>

            

            <p className={styles.paragraphStyles}>
                This should result in a successful validation and subsequent minting.
            </p>

            <div>
                <pre className="language-javascript">
                    <code>
                        {`
                            status	true Transaction mined and execution succeed
                            transaction hash	0x65e61e151d44766ef8cae3ef647bbcc60cbeb45b223e3480a0aa496ebe266da8
                            from	0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
                            to	MyToken.mintMyToken(bytes32[]) 0xd9145CCE52D386f254917e481eB44e9943F39138
                            gas	80000000 gas
                            transaction cost	99605 gas 
                            execution cost	99605 gas 
                            hash	0x65e61e151d44766ef8cae3ef647bbcc60cbeb45b223e3480a0aa496ebe266da8
                            input	0xf4d...8d9de
                            decoded input	{
                                "bytes32[] _proof": [
                                    "0x947839edeb5b3ee9a2dee69954b24aeb3f91b8ff4c608efd90618351fe77152f",
                                    "0x645008222d03b9de61b00e5186ebeb9e4c1d6e689cffcfef6ec90aa0e049d83e",
                                    "0x7f83937ed8660e9c57c5b1ccade041d8fb05f99de98185d7aa016bf7e2586feb",
                                    "0xf62211165bc6d689018cd34b7394a39e7e2a25477a2da14092295428b898d9de"
                                ]
                            }
                            decoded output	{}
                            logs	[
                                {
                                    "from": "0xd9145CCE52D386f254917e481eB44e9943F39138",
                                    "topic": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                                    "event": "Transfer",
                                    "args": {
                                        "0": "0x0000000000000000000000000000000000000000",
                                        "1": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
                                        "2": "0",
                                        "from": "0x0000000000000000000000000000000000000000",
                                        "to": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
                                        "tokenId": "0"
                                    }
                                }
                            ]
                            val	0 wei
                        `}
                    </code>
                </pre>
            </div>

        </div>
    )
}