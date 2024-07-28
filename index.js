
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ethers } from 'ethers';
import TokenVesting from './TokenVesting.json';

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";

function App() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [stakeholders, setStakeholders] = useState([]);
    const [amount, setAmount] = useState('');
    const [releaseTime, setReleaseTime] = useState('');

    useEffect(() => {
        const init = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);

            const signer = provider.getSigner();
            setSigner(signer);

            const contract = new ethers.Contract(CONTRACT_ADDRESS, TokenVesting.abi, signer);
            setContract(contract);

            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
        };

        init();
    }, []);

    const addStakeholder = async () => {
        await contract.addStakeholder(account, ethers.utils.parseEther(amount), releaseTime);
    };

    const claimTokens = async () => {
        await contract.claimTokens();
    };

    return (
        <div>
            <h1>Token Vesting DApp</h1>
            <p>Account: {account}</p>
            <h2>Add Stakeholder</h2>
            <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <input
                type="text"
                placeholder="Release Time (timestamp)"
                value={releaseTime}
                onChange={e => setReleaseTime(e.target.value)}
            />
            <button onClick={addStakeholder}>Add Stakeholder</button>
            <h2>Claim Tokens</h2>
            <button onClick={claimTokens}>Claim Tokens</button>
        </div>
    );
}

/*ReactDOM.render(<App />, document.getElementById('root'));
Deploy the TokenVesting contract to a Testnet (e.g., Ropsten, Rinkeby) using Remix or a deployment script with Hardhat.

Deploy Script (using Hardhat)*/

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TokenVesting = await ethers.getContractFactory("TokenVesting");
    const tokenVesting = await TokenVesting.deploy("YOUR_ERC20_TOKEN_ADDRESS");
    console.log("TokenVesting contract deployed to:", tokenVesting.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

