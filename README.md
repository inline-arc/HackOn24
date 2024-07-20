

  <img src="https://github.com/user-attachments/assets/e819698b-81d9-4176-87ce-892c1ec8502b" height="100" align="left">   
  
  # **NewsBlock = Future of News and Media**
<br><br/>
<p align="center">
 <img src="https://github.com/user-attachments/assets/7305f693-be14-4e5e-96d4-9bdf8c30166a">
  <p>

### Installing 

First, we need to clone the repository and change the working directory. Then, we must set up environment variables for the project. Make sure to add ```.env``` to ```.gitignore```.

```bash
git clone https://github.com/ayush-that/HackOn24.git
cd HackOn24
```

Use the node version manager [(nvm)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) and set up the project to use Node v16 for seamless installation. Now install the dependencies.

```node
nvm install 16
nvm use 16
npm i
```

In the ```.env```, add the following environment variables. Get the ```PRIVATE_KEY``` from your MetaMask account. For Polygon zkEVM (ETH):

```env
PRIVATE_KEY="METAMASK_PRIVATE_KEY"
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
URL=https://rpc.cardona.zkevm-rpc.com
NEXT_PUBLIC_RPC_URL=https://rpc.cardona.zkevm-rpc.com
```

To get the value of ```NEXT_PUBLIC_CONTRACT_ADDRESS```, In the root directory of the project run the following commands. This will compile and deploy the smart contract.

```node
npx hardhat compile
npx hardhat run scripts/deploy.js --network polygonZkEvmTestnet
```

Now, run ```npm run dev``` or ```yarn dev``` to start the live deployment server. You can use Vercel to deploy it too. See the [Live](https://desinft.vercel.app/) site here.
