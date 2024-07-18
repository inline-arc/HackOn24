require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: "0.8.24",
networks: {
    zkEVM: {
    url: `https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public`,
    accounts: [process.env.PRIVATE_KEY],
    },
},
};
