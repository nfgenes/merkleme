// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/*
 * THIS SAMPLE CONTRACT IS NOT A PRODUCTION READY CONTRACT
 * ////////////////////////////////////////////////////////
 * It is provided only to demonstrate a way to implement the
 * OpenZeppelin MerkleProof contract for verifying a proof
 * provide by the MerkleMe backend API
*/

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

    /// @dev before calling '_safeMint', pass the provided proof
    /// into the 'MerkleProof.verify()' function
    function mintMyToken(bytes32[] calldata _proof) public {
        bytes32 _address = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_proof, rootHash, _address), "Invalid Proof");
        safeMint(msg.sender);
    }

    function safeMint(address to) private {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function modifyRootHash(bytes32 _rootHash) public onlyOwner {
        rootHash = _rootHash;
    }
}