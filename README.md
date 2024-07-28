# ETH-PROOF-ADVANCE-EVM


1. Token Vesting DApp

This project is a decentralized application (DApp) that allows an organization to create a vesting schedule for their tokens. Depending on the tokenomics model of a web3 organization, they can have various vesting schedules for different stakeholders such as community members, investors, pre-sale buyers, founders, etc.

* Features
  
a)Organization Registration:

- Organizations can register themselves and their token.
- A new contract is spun off for each ERC20 token managed by the organization.

b) Stakeholder Management:

- Organizations can add stakeholders with specific vesting periods (timelock).
- Organizations can whitelist addresses for certain stakeholders (e.g., founders, investors).

c) Token Claiming:

- Whitelisted addresses can claim their tokens after the vesting period.
- Organization admins can withdraw tokens if they are not claimed by stakeholders.

2. Technology Stack

- Solidity: For writing smart contracts.
- OpenZeppelin Contracts: For standard and secure contract patterns.
- React: For the front-end interface.
- Ethers.js: For interacting with the Ethereum blockchain.
- Hardhat: For deployment and testing of smart contracts.
- Web3Modal: For connecting to different wallet providers.

3. Getting Started

Prerequisites

- Node.js: Ensure you have Node.js installed.
- Ethereum Wallet: MetaMask or any other Ethereum wallet for interacting with the DApp.

4. Front-End Structure:
The front end is a React application that allows users to:

- Connect their Ethereum wallet.
- Organization admins can register their organization and add stakeholders with vesting details.
- Users can claim their vested tokens if they are whitelisted.

5. Testing
   
- Ensure you have test tokens for the ERC20 token address you used.
- Fund the deployed contract with some tokens.
- Interact with the DApp by adding stakeholders and testing the token claim functionality.

7. Usage

* Admin Panel:

- Connect your wallet.
- Register your organization and token.
- Add stakeholders with the specified vesting details.

* User Interaction:

- Connect your wallet.
- If you are whitelisted and the vesting period has ended, claim your tokens.
- If you are the organization admin, withdraw unclaimed tokens if necessary.

7. Testing on Testnet

We recommend testing the DApp on a testnet like Ropsten or Rinkeby before deploying it to the mainnet. This helps in ensuring the functionality and security of the smart contracts and the front-end application.

8. Conclusion

This DApp provides a comprehensive solution for organizations to manage their token vesting schedules securely and efficiently. By leveraging the Ethereum blockchain and smart contracts, it ensures transparency and trust among stakeholders.
