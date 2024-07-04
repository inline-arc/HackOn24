require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhad: {
      forking: {
        url: "https://api-cardona-zkevm.polygonscan.com/api",
    },
  }
}};
