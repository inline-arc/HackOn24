async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const NewsApp = await ethers.getContractFactory("NewsApp");
    const newsApp = await NewsApp.deploy();
    console.log("NewsApp deployed to:", newsApp.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  