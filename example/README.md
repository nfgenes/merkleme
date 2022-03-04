# Sample ERC721 Contract Implementation

This example uses a standard ERC721 minting contract that imports the [OpenZeppelin MerkleProof](https://docs.openzeppelin.com/contracts/3.x/api/cryptography#MerkleProof ) utility to verify Merkle proofs.

**DISCLAIMER: THIS EXAMPLE IS NOT INTENDED TO BE USED FOR A PRODUCTION IMPLEMENTATION. IT IS A VERY BASIC EXAMPLE THAT IS MISSING A NUMBER OF OTHER FEATURES. THIS EXAMPLE USES THE MINIMUM CODE NECESSARY TO PROVIDE A SAMPLE FOR HOW ONE COULD IMPLEMENT THE OZ MERKLE PROOF UTITLITY IN A MINTING CONTRACT.**

The OZ Merkle Proof utility has a single function that requires three arguments:

* Proof
    - A bytes32 array of addresses
    - The MerkleMe API will provide this to your front end via a post request
* Root
    - A bytes32 representation of the root hash
    - The MerkleMe API will provide a IPFS link to access your root hash once your submit your whitelist
* Leaf
    - A bytes32 representation of the address that you wish to verify
    - This will be any arbitrary address that you wish to submit for verifying against your Merkle Tree
    - *Note that while it is possible to submit a transaction to verify a proof for an invalid address, the MerkleMe API will return a warning that if the submitted address is not contained within the whitelist, thus preventing the need to submit a blockchain transaction.

The sample contract can be viewed and deployed on [This Remix Instance](https://remix.ethereum.org/#url=https://github.com/nfgenes/merkleme/blob/main/example/sampleContract.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.4+commit.c7e474f2.js)

# Step by Step Example Implementation

## Sample Whitelist

```
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
```

## Sample Merkle Proof for first address in list above ("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4")

```
 [
    "0x947839edeb5b3ee9a2dee69954b24aeb3f91b8ff4c608efd90618351fe77152f",
    "0x645008222d03b9de61b00e5186ebeb9e4c1d6e689cffcfef6ec90aa0e049d83e",
    "0x7f83937ed8660e9c57c5b1ccade041d8fb05f99de98185d7aa016bf7e2586feb",
    "0xf62211165bc6d689018cd34b7394a39e7e2a25477a2da14092295428b898d9de"
]
```

## Deploy your minting contract

In this example minting contract, the root hash is stored in state. The contract initializes the root hash in the constructor on contract deployment.

```
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
```

1. Select the minting contract
2. Deploy the contract while providing a root hash (which is provided to you by the MerkleMe API)

![Deploy](https://github.com/nfgenes/merkleme/blob/main/example/doc/sample_implementation_deploy.png)

## Review the contract instance

Once the contract deploys, you can use the public getter functions to verify that the root hash is correct.

![Expand the contract methods](https://github.com/nfgenes/merkleme/blob/main/example/doc/sample_implementation_expand.png)

![Check the root hash](https://github.com/nfgenes/merkleme/blob/main/example/doc/sample_implementation_rootHash.png)

If the root hash is not correct, or if it needs to be changed, you can modify it via the modifyRootHash() method. Simply supply a new root hash and submit the contract transaction

## Verify a Proof

Call the mintMyToken() method in the contract and supply the proof provided above as the required argument.

![Mint](https://github.com/nfgenes/merkleme/blob/main/example/doc/sample_implementation_mint.png)

This should result in a successful validation and subsequent minting.

```
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
```