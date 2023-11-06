// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../ERC721aGovernanceToken.sol";

contract TestableERC721aGovernanceToken is ERC721aGovernanceToken {
    constructor(
        string memory name,
        string memory symbol,
        string memory version
    ) ERC721aGovernanceToken(name, symbol, version) {}

    function mint(address to, uint256 quantity) public {
        _mint(to, quantity);
    }

    function burn(uint256 tokenId) public {
        _burn(tokenId);
    }
}
