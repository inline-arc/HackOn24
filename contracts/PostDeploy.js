const hre = require("hardhat");

async function main() {
    const deployedContract = await hre.ethers.deployContract("Post");
    await deployedContract.waitForDeployment();
    console.log(
        `Post contract deployed to https://cardona-zkevm.polygonscan.com/address/${deployedContract.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
