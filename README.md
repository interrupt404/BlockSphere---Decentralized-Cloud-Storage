# BlockShare - Decentralized Cloud Storage

BlockShare is a decentralized cloud storage application built using blockchain technology. It allows users to securely store and share images in a distributed manner.

## Overview

This repository contains the codebase and scripts to deploy and use BlockShare, a decentralized cloud storage system leveraging blockchain for secure image storage and sharing.

## Features

- **Blockchain Integration:** Utilizes blockchain for decentralized file storage.
- **File Encryption:** Ensures security and privacy through file encryption techniques.
- **User Authentication:** Implements secure user authentication for accessing stored files.
- **File Sharing:** Facilitates easy and secure file sharing between users.
- **Smart Contracts:** Utilizes smart contracts for managing file storage and access permissions.

## Smart Contracts

### Overview

BlockShare uses smart contracts written in Solidity to manage file storage and sharing functionalities.

### AccessFile

Checks user permissions and grants access to requested files.

```solidity
function accessFile(address userAddress, bytes32 fileId) public view returns (bool allowed);
```

## User Management

### RegisterUser

Registers new users in the system.

```solidity
function registerUser(address userAddress, string memory userEmail) public returns (bool success);
```
### AuthenticateUser

Authenticates users for file access and management operations.

#### Solidity

```solidity
function authenticateUser(address userAddress) public view returns (bool authenticated);
```
### File Sharing

Allows users to share files with other registered users.

#### Solidity

```solidity
function shareFile(address userAddress, bytes32 fileId, address recipientAddress) public returns (bool success);
```
### Smart Contract Deployment

Deploy contracts to a local blockchain (e.g., Hardhat's built-in network):

#### Development Environment Setup

Ensure Node.js and npm are installed.

```bash
npm install -g hardhat
```
### Compile Contracts

Start Hardhat Node:

```bash
npx hardhat node
```

### Deploy Contracts

Deploy contracts to a local blockchain (e.g., Hardhat's built-in network):

```bash
npx hardhat run --network localhost scripts/deploy.js
```

## Getting Started

### Prerequisites
Ensure you have the following prerequisites installed:
- Node.js
- Hardhat
- Ganache CLI or Ganache GUI
- Metamask (or other Ethereum wallet)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/blockshare.git
cd blockshare
```

## Install dependencies

```bash
npm install
```

## Usage

### 1. To start the local blockchain using Hardhat:

```bash
npx hardhat node
```
### 2. Deploy Smart Contracts

To deploy the smart contracts to a local blockchain (e.g., Hardhat's built-in network):

```bash
npx hardhat run --network localhost scripts/deploy.js
```

### 3. Start the Development Server

To start the frontend and backend servers:

```bash
cd client
npm start
``` 
## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or a pull request. To contribute to BlockShare, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

