# NFT-Minting-Collection-App

# Description

```mermaid
sequenceDiagram
Client->>+Wallet: POST
Note over Client,Wallet: RPC Validation
Wallet-->>-Client: Response
Note over Client,Wallet: Success or Exeption Message
Wallet->>+Blockchain Network: 
BlockchainNetwork->>-Wallet: Response
Note over BlockchainNetwork,Wallet: Validate the Transaction
BlockchainNetwork->>+Blockchain: 
Blockchain->>-BlockchainNetwork: 
Client->>+Infura: GET
Infura->>+IPFS: GET
Note over Client,IPFS: Send Request and Store Images
IPFS-->>-Client: Response
Note over IPFS, Client: Hash
end
```
