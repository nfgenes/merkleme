# MerkleMe

This is an exploratory project to build a backend solution for generating Merkle trees for a given list of addresses (a whitelist). Lots of folks are needing whitelists for their NFT projects and typically have to go through the extra steps of generating a Merkle tree and then running a backend to verify proofs on the fly. These steps also require knowledge of Merkle trees to implement them.

The idea behind this project is to abstract away the Merkle tree process and simply provide a front end solution that allows anyone to copy + paste their whitelist into a form and click a button to automagically generate their Merkle Tree.

Once the Merkle tree is created, the developer only needs to add the root hash and the OpenZeppelin [MerkleProof library](https://docs.openzeppelin.com/contracts/3.x/api/cryptography#MerkleProof) to their minting contract. The developer's front end will then be able to grab a user's address (likely from their wallet) and use it to generate a Merkle proof on the fly for that given address via the MerkeMe backend API.

With a Merkle proof in hand, the frontend can then submit a transaction to the minting contract to attempt minting. The OpenZeppelin MerkleProof contract requires the proof, root and leaf:

```
verify(bytes32[] proof, bytes32 root, bytes32 leaf) → bool
```

## MerkleMe Overview

The MerkleMe tool consists of two repos:
1. The frontend web application for generating proofs (found here)
2. The MerkleMe API found here: [MerkeMe API](https://github.com/nfgenes/merkleme_api)

### Upload, generate, publish

![MerkleMe Overview](https://github.com/nfgenes/merkleme/blob/main/public/assets/merkleme_overview1.png)

### Verify

![MerkleMe Overview](https://github.com/nfgenes/merkleme/blob/main/public/assets/merkleme_overview2.png)
