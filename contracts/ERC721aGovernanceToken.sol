// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/governance/utils/Votes.sol";
import "@openzeppelin/contracts/governance/utils/IVotes.sol";

// Abstract contract that other contracts can inherit to create ERC721a tokens with governance features
abstract contract ERC721aGovernanceToken is ERC721A, EIP712, Votes {
    constructor(
        string memory name_,
        string memory symbol_,
        string memory version_
    ) ERC721A(name_, symbol_) EIP712(name_, version_) {}

    // The following functions can be overridden by inheriting contracts as needed

    /**
     * @dev See {ERC721-_afterTokenTransfer}. Adjusts votes when tokens are transferred.
     * @dev Instead of {_afterTokenTransfer} that is used in ERC721, ERC721A uses {_afterTokenTransfers} (with an 's')
     * Emits a {IVotes-DelegateVotesChanged} event.
     */
    function _afterTokenTransfers(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override {
        _transferVotingUnits(from, to, batchSize);
        super._afterTokenTransfers(from, to, firstTokenId, batchSize);
    }

    /**
     * @dev Returns the balance of `account`.
     *
     * WARNING: Overriding this function will likely result in incorrect vote tracking.
     */
    function _getVotingUnits(
        address account
    ) internal view virtual override returns (uint256) {
        return balanceOf(account);
    }

    /*
     * @dev ERC721a Governance Token Interface Support
     * @dev Implements the interface support check for ERC721a Governance Token
     * @notice Checks if the contract implements an interface you query for, including ERC721A and Votes interfaces
     * @param interfaceId The interface identifier, as specified in ERC-165
     * @return True if the contract implements `interfaceId` or if `interfaceId` is the ERC-165 interface
     */
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC721A) returns (bool) {
        return
            interfaceId == type(IVotes).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
