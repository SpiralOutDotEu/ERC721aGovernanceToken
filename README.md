# ERC721a Governance Token
## An ERC721a token with voting rights
[![codecov](https://codecov.io/gh/SpiralOutDotEu/ERC721aGovernanceToken/graph/badge.svg?token=IPH9AJXRLC)](https://codecov.io/gh/SpiralOutDotEu/ERC721aGovernanceToken)
![Tests](https://github.com/SpiralOutDotEu/ERC721aGovernanceToken/actions/workflows/test.yml/badge.svg)
![slither](https://github.com/SpiralOutDotEu/ERC721aGovernanceToken/actions/workflows/slither_analysis.yml/badge.svg)
[![Open Sample with Remix](https://img.shields.io/badge/Remix-Open%20Sample-blue)](https://remix.ethereum.org/#code=CiAgLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAogIHByYWdtYSBzb2xpZGl0eSBeMC44LjIwOwogIAogIGltcG9ydCAiZXJjNzIxYS1nb3Zlcm5hbmNlLXRva2VuL2NvbnRyYWN0cy9FUkM3MjFhR292ZXJuYW5jZVRva2VuLnNvbCI7CiAgaW1wb3J0ICJAb3BlbnplcHBlbGluL2NvbnRyYWN0cy9hY2Nlc3MvT3duYWJsZS5zb2wiOwogIAogIGNvbnRyYWN0IFNhbXBsZUVSQzcyMWFHb3Zlcm5hbmNlVG9rZW4gaXMgRVJDNzIxYUdvdmVybmFuY2VUb2tlbiwgT3duYWJsZSB7CiAgICAgIHVpbnQxNiBwcml2YXRlIGltbXV0YWJsZSBNQVhfU1VQUExZID0gMTBfMDAwOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uJ3MgbWF4IHN1cHBseQogICAgICB1aW50MTYgcHJpdmF0ZSBpbW11dGFibGUgTUFYX01JTlRfUEVSX0FERFJFU1MgPSA1MDsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgbWF4IG1pbnQgcGVyIGFkZHJlc3MgdmFsdWUKICAgICAgdWludDY0IHByaXZhdGUgaW1tdXRhYmxlIE1JTlRfUFJJQ0UgPSAwLjEgZXRoZXI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIG1pbnQgcHJpY2UKICAgICAgc3RyaW5nIHByaXZhdGUgX2Jhc2VUb2tlblVSSSA9ICAiaXBmczovL1FtWmNINFl2QlZWUkp0ZG40UmRiYXFnc3BGVThnSDZQOXZvbURwQlZwQUwzdTQvIjsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYmFzZSB0b2tlbiBVUkkgZm9sbG93ZWQgYnkgc2xhc2gKICAgICAgCiAgICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MTYpIHB1YmxpYyBhZGRyZXNzTWludGVkQmFsYW5jZTsKICAKICAgICAgY29uc3RydWN0b3Ioc3RyaW5nIG1lbW9yeSBuYW1lLCBzdHJpbmcgbWVtb3J5IHN5bWJvbCwgc3RyaW5nIG1lbW9yeSB2ZXJzaW9uKQogICAgICAgICAgRVJDNzIxYUdvdmVybmFuY2VUb2tlbihuYW1lLCBzeW1ib2wsIHZlcnNpb24pCiAgICAgIE93bmFibGUobXNnLnNlbmRlcil7fQogIAogICAgICAvLyBPdmVycmlkZSBmb3IgZXJjNzIxYSBzbyB0aGF0IHdlIGNhbiBtYWtlIG91ciBjdXN0b20gbWludGluZyBsb2dpYwogICAgICBmdW5jdGlvbiBtaW50KHVpbnQyNTYgcXVhbnRpdHkpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICAgIHJlcXVpcmUodG90YWxTdXBwbHkoKSArIHF1YW50aXR5IDw9IE1BWF9TVVBQTFksICJFeGNlZWRzIG1heCBzdXBwbHkiKTsKICAgICAgICAgIHJlcXVpcmUoYWRkcmVzc01pbnRlZEJhbGFuY2VbbXNnLnNlbmRlcl0gKyBxdWFudGl0eSA8PSBNQVhfTUlOVF9QRVJfQUREUkVTUywgIkV4Y2VlZHMgbWF4IHBlciBhZGRyZXNzIik7CiAgICAgICAgICByZXF1aXJlKG1zZy52YWx1ZSA+PSBNSU5UX1BSSUNFICogcXVhbnRpdHksICJFdGhlciBzZW50IGlzIG5vdCBjb3JyZWN0Iik7CiAgCiAgICAgICAgICBhZGRyZXNzTWludGVkQmFsYW5jZVttc2cuc2VuZGVyXSArPSB1aW50MTYocXVhbnRpdHkpOwogICAgICAgICAgX21pbnQobXNnLnNlbmRlciwgcXVhbnRpdHkpOwogICAgICB9CiAgCiAgICAgIC8vIE92ZXJyaWRlIGZyb20gZXJjNzIxYSBzbyB0aGF0IGl0IGNhbiBiZSBidXJuZWQKICAgICAgZnVuY3Rpb24gYnVybih1aW50MjU2IHRva2VuSWQpIHB1YmxpYyB7CiAgICAgICAgICBfYnVybih0b2tlbklkKTsKICAgICAgfQogIAogICAgICAvLyBPdmVycmlkZSBmcm9tIGVyYzcyMWEgc28gdGhhdCBpdCBjb25zdHVjdCBvdXIgbWV0YWRhdGEKICAgICAgZnVuY3Rpb24gX2Jhc2VVUkkoKSBpbnRlcm5hbCB2aWV3IHZpcnR1YWwgb3ZlcnJpZGUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgICAgcmV0dXJuIF9iYXNlVG9rZW5VUkk7CiAgICAgIH0KICAgICAgCiAgICAgIC8vIFdpdGhkcmF3IGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBvd25lciB0byB3aXRoZHJhdyBmdW5kcyBmcm9tIGNvbnRyYWN0CiAgICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgcHVibGljIG9ubHlPd25lciB7CiAgICAgICAgICB1aW50MjU2IGJhbGFuY2UgPSBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CiAgICAgICAgICByZXF1aXJlKGJhbGFuY2UgPiAwLCAiTm8gZXRoZXIgbGVmdCB0byB3aXRoZHJhdyIpOwogICAgICAgICAgKGJvb2wgc3VjY2VzcywgKSA9IG93bmVyKCkuY2FsbHt2YWx1ZTogYmFsYW5jZX0oIiIpOwogICAgICAgICAgcmVxdWlyZShzdWNjZXNzLCAiVHJhbnNmZXIgZmFpbGVkIik7CiAgICAgIH0KICAgICAgIAogICAgICAgLy8gQmFjayB1cCBmdW5jdGlvbiB0byBjb3JyZWN0IGJhc2UgVVJJCiAgICAgIGZ1bmN0aW9uIHNldEJhc2VVUkkoc3RyaW5nIG1lbW9yeSBuZXdCYXNlVVJJKSBwdWJsaWMgb25seU93bmVyIHsKICAgICAgICAgIF9iYXNlVG9rZW5VUkkgPSBuZXdCYXNlVVJJOwogICAgICB9CiAgfQogIA==)
[![npm version](https://badge.fury.io/js/erc721a-governance-token.svg)](https://badge.fury.io/js/erc721a-governance-token)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)



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
[![Open Sample with Remix](https://img.shields.io/badge/Remix-Open%20Sample-blue)](https://remix.ethereum.org/#code=CiAgLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAogIHByYWdtYSBzb2xpZGl0eSBeMC44LjIwOwogIAogIGltcG9ydCAiZXJjNzIxYS1nb3Zlcm5hbmNlLXRva2VuL2NvbnRyYWN0cy9FUkM3MjFhR292ZXJuYW5jZVRva2VuLnNvbCI7CiAgaW1wb3J0ICJAb3BlbnplcHBlbGluL2NvbnRyYWN0cy9hY2Nlc3MvT3duYWJsZS5zb2wiOwogIAogIGNvbnRyYWN0IFNhbXBsZUVSQzcyMWFHb3Zlcm5hbmNlVG9rZW4gaXMgRVJDNzIxYUdvdmVybmFuY2VUb2tlbiwgT3duYWJsZSB7CiAgICAgIHVpbnQxNiBwcml2YXRlIGltbXV0YWJsZSBNQVhfU1VQUExZID0gMTBfMDAwOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uJ3MgbWF4IHN1cHBseQogICAgICB1aW50MTYgcHJpdmF0ZSBpbW11dGFibGUgTUFYX01JTlRfUEVSX0FERFJFU1MgPSA1MDsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgbWF4IG1pbnQgcGVyIGFkZHJlc3MgdmFsdWUKICAgICAgdWludDY0IHByaXZhdGUgaW1tdXRhYmxlIE1JTlRfUFJJQ0UgPSAwLjEgZXRoZXI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIG1pbnQgcHJpY2UKICAgICAgc3RyaW5nIHByaXZhdGUgX2Jhc2VUb2tlblVSSSA9ICAiaXBmczovL1FtWmNINFl2QlZWUkp0ZG40UmRiYXFnc3BGVThnSDZQOXZvbURwQlZwQUwzdTQvIjsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYmFzZSB0b2tlbiBVUkkgZm9sbG93ZWQgYnkgc2xhc2gKICAgICAgCiAgICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MTYpIHB1YmxpYyBhZGRyZXNzTWludGVkQmFsYW5jZTsKICAKICAgICAgY29uc3RydWN0b3Ioc3RyaW5nIG1lbW9yeSBuYW1lLCBzdHJpbmcgbWVtb3J5IHN5bWJvbCwgc3RyaW5nIG1lbW9yeSB2ZXJzaW9uKQogICAgICAgICAgRVJDNzIxYUdvdmVybmFuY2VUb2tlbihuYW1lLCBzeW1ib2wsIHZlcnNpb24pCiAgICAgIE93bmFibGUobXNnLnNlbmRlcil7fQogIAogICAgICAvLyBPdmVycmlkZSBmb3IgZXJjNzIxYSBzbyB0aGF0IHdlIGNhbiBtYWtlIG91ciBjdXN0b20gbWludGluZyBsb2dpYwogICAgICBmdW5jdGlvbiBtaW50KHVpbnQyNTYgcXVhbnRpdHkpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICAgIHJlcXVpcmUodG90YWxTdXBwbHkoKSArIHF1YW50aXR5IDw9IE1BWF9TVVBQTFksICJFeGNlZWRzIG1heCBzdXBwbHkiKTsKICAgICAgICAgIHJlcXVpcmUoYWRkcmVzc01pbnRlZEJhbGFuY2VbbXNnLnNlbmRlcl0gKyBxdWFudGl0eSA8PSBNQVhfTUlOVF9QRVJfQUREUkVTUywgIkV4Y2VlZHMgbWF4IHBlciBhZGRyZXNzIik7CiAgICAgICAgICByZXF1aXJlKG1zZy52YWx1ZSA+PSBNSU5UX1BSSUNFICogcXVhbnRpdHksICJFdGhlciBzZW50IGlzIG5vdCBjb3JyZWN0Iik7CiAgCiAgICAgICAgICBhZGRyZXNzTWludGVkQmFsYW5jZVttc2cuc2VuZGVyXSArPSB1aW50MTYocXVhbnRpdHkpOwogICAgICAgICAgX21pbnQobXNnLnNlbmRlciwgcXVhbnRpdHkpOwogICAgICB9CiAgCiAgICAgIC8vIE92ZXJyaWRlIGZyb20gZXJjNzIxYSBzbyB0aGF0IGl0IGNhbiBiZSBidXJuZWQKICAgICAgZnVuY3Rpb24gYnVybih1aW50MjU2IHRva2VuSWQpIHB1YmxpYyB7CiAgICAgICAgICBfYnVybih0b2tlbklkKTsKICAgICAgfQogIAogICAgICAvLyBPdmVycmlkZSBmcm9tIGVyYzcyMWEgc28gdGhhdCBpdCBjb25zdHVjdCBvdXIgbWV0YWRhdGEKICAgICAgZnVuY3Rpb24gX2Jhc2VVUkkoKSBpbnRlcm5hbCB2aWV3IHZpcnR1YWwgb3ZlcnJpZGUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgICAgcmV0dXJuIF9iYXNlVG9rZW5VUkk7CiAgICAgIH0KICAgICAgCiAgICAgIC8vIFdpdGhkcmF3IGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBvd25lciB0byB3aXRoZHJhdyBmdW5kcyBmcm9tIGNvbnRyYWN0CiAgICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgcHVibGljIG9ubHlPd25lciB7CiAgICAgICAgICB1aW50MjU2IGJhbGFuY2UgPSBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CiAgICAgICAgICByZXF1aXJlKGJhbGFuY2UgPiAwLCAiTm8gZXRoZXIgbGVmdCB0byB3aXRoZHJhdyIpOwogICAgICAgICAgKGJvb2wgc3VjY2VzcywgKSA9IG93bmVyKCkuY2FsbHt2YWx1ZTogYmFsYW5jZX0oIiIpOwogICAgICAgICAgcmVxdWlyZShzdWNjZXNzLCAiVHJhbnNmZXIgZmFpbGVkIik7CiAgICAgIH0KICAgICAgIAogICAgICAgLy8gQmFjayB1cCBmdW5jdGlvbiB0byBjb3JyZWN0IGJhc2UgVVJJCiAgICAgIGZ1bmN0aW9uIHNldEJhc2VVUkkoc3RyaW5nIG1lbW9yeSBuZXdCYXNlVVJJKSBwdWJsaWMgb25seU93bmVyIHsKICAgICAgICAgIF9iYXNlVG9rZW5VUkkgPSBuZXdCYXNlVVJJOwogICAgICB9CiAgfQogIA==)

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