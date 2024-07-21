require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: "0.8.24",
networks: {
    zkEVM: {
    url: `https://polygonzkevm-cardona.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    accounts: [process.env.PRIVATE_KEY],
    },
},
};
