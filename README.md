# NFT-Minting-Collection-App


 Package                                                   | Version                                                                                                                                       | Desc                                                                      |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`ethers`](packages/types)                     | [![npm](https://img.shields.io/npm/v/ethers/beta.svg)](https://www.npmjs.com/package/ethers/v/beta)                                         |Complete Ethereum library and wallet implementation in JavaScript.|
| [`web3modal`](packages/types)                     | [![npm](https://img.shields.io/npm/v/web3modal.svg)](https://www.npmjs.com/package/web3modal)                                         |A single Web3 / Ethereum provider solution for all Wallets|

   

## Description
```mermaid
sequenceDiagram
Client->>+Wallet: POST
Note over Client,Wallet: RPC Validation
Wallet-->>-Client: Response
Note over Client,Wallet: Success or Exeption Message
Wallet->>+Blockchain Network: 
Blockchain Network->>-Wallet: Response
Note over Blockchain Network,Wallet: Validate the Transaction
Blockchain Network->>+Blockchain: 
Blockchain->>-Blockchain Network: 
Client->>+Infura: GET
Infura->>+IPFS: GET
Note over Client,IPFS: Send Request and Store Images
IPFS-->>-Client: Response
Note over IPFS, Client: Hash
```
