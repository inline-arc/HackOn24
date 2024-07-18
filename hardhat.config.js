require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: "0.8.24",
paths: {
    artifacts: "./src",
},
networks: {
    zkEVM: {
    url: `https://rpc.ankr.com/polygon_zkevm_cardona`,
    accounts: [process.env.PRIVATE_KEY],
    },
},
};
