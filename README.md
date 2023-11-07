# ERC721a Governance Token
## An ERC721a token with voting rights
[![codecov](https://codecov.io/gh/SpiralOutDotEu/ERC721aGovernanceToken/graph/badge.svg?token=IPH9AJXRLC)](https://codecov.io/gh/SpiralOutDotEu/ERC721aGovernanceToken)

`ERC721aGovernanceToken` is a Solidity library that equips `ERC721A` tokens with `Open Zeppelin` governance capabilities. It leverages the ERC721A implementation for efficient batch minting, significantly reducing gas costs. This makes it ideal for projects requiring NFTs with voting powers and an emphasis on cost-efficient minting.

## Features

- **Low Gas Batch Minting**: Utilizes ERC721A for gas-efficient batch minting of NFTs.
- **Governance Ready**: Integrates OpenZeppelin's Votes extension for token-based voting and delegation.

## Installation

Install the package with npm:

```sh
npm install erc721a-governance-token
```
Or with yarn:
```
yarn add erc721a-governance-token
```

# Usage

To use this library in your project, import it into your Solidity contract:
```js
import "erc721a-governance-token/contracts/ERC721aGovernanceToken.sol";

contract YourContract is ERC721aGovernanceToken {
  // your contract code
}
```
Follow Open Zeppelin's guide on [HOW TO SET UP ON-CHAIN GOVERNANCE](https://docs.openzeppelin.com/contracts/5.x/governance#governor) for instructions on how to proceed from here and build your DAO.

# Running Tests
To run tests, clone the repository and run:
```sh
npm install
npm run test
```

# Linting
Run the linter with:
```sh
npm run lint
```

# Contributing
Contributions are welcome! Please submit an issue or a PR.

# License

This project is licensed under the [MIT License](https://github.com/SpiralOutDotEu/ERC721aGovernanceToken/blob/master/LICENCE).

# Acknowledgements

* [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)
* [ERC721A](https://github.com/chiru-labs/ERC721A)