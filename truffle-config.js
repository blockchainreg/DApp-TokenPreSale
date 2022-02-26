require('truffle-plugin-verify')
require('babel-register');
require('babel-polyfill');
require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');

process.env.MNEMONIC
process.env.INFURA_API_KEY
process.env.ETHERSCAN_API_KEY

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: 5777 // match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC, 
        process.env.INFURA_API_KEY
      ),
    
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
/*     rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4700000
    } */
  },
  compilers: {
    solc: {
      version: "0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
