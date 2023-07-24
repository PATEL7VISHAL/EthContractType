import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as contractABI from './abi.json'
import { AbiType } from './abiType';
import { ethers } from 'ethers'
import { Abi__factory } from './types/ethers-contracts/factories/Abi__factory'


function App() {
  // Ethereum wallet connection
  const infuraUrl = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID";
  const provider = new ethers.JsonRpcProvider(infuraUrl);
  const contractAddress = "0xSMART_CONTRACT_ADDRESS";
  const contract = Abi__factory.connect(contractAddress, provider)
  // contract.transfer(); //got type

  const getTotalSupply = async () => {
    const totalSupply = await contract.totalSupply(); //totalSupply also get the type
    return totalSupply;
  }

  return (
    <div>
      <button>
        HI
      </button>
    </div>
  );
}

export default App;
