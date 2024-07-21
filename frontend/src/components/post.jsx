import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contractData from "../reclaim/NewsApp.json"; // Use correct import based on ABI file structure

const contractABI = contractData.abi || contractData; // Adjust based on ABI structure

export default function Post() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setWeb3(web3);
        setAccount(accounts[0]);

        const contractAddress = "0xd09e109edd9540e5c9576d02d71a6b64409b7dd1";
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        setContract(contract);
      } else {
        alert("Please install MetaMask!");
      }
    };

    initWeb3();
  }, []);

  const handleMint = async () => {
    if (!contract || !account || !content) return;

    try {
      const transaction = await contract.methods.mint(content).send({ from: account });
      alert("Minting successful!");
    } catch (error) {
      console.error("Minting failed:", error);
      alert("Minting failed. Please try again.");
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-black p-4">
        <div className="flex items-center">
          <img
            src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc"
            alt="Logo with side text"
            className="h-12 mr-2"
          />
          <span className="text-white hero text-2xl">Newsblock</span>
        </div>
        <button
          className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-8 font-semibold text-neutral-950"
          onClick={handleMint}
        >
          <span>Mint</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20"></div>
          </div>
        </button>
      </nav>
      <div className="w-full h-screen [background:radial-gradient(130%_300%_at_50%_10%,#000_30%,#63e_100%)]">
        <div className="flex flex-col items-start justify-center pt-20 mx-20 gap-4 px-10">
          <textarea
            className="w-full resize-none bg-transparent focus:outline-none text-3xl text-white"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <textarea
            className="post resize-none bg-transparent border-none focus:outline-none text-xl text-white justify-normal"
            placeholder="Write your post here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}
