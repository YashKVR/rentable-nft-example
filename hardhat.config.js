require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
      },
      {
        version: '0.6.6',
      },
      {
        version: '0.6.12',
      },
      {
        version: '0.4.19',
      },
    ],
  },
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      //accounts: prepopulated by hardhat node
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
};
