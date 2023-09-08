import React, { useState, useContext, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import { ethers } from "ethers";
import axios from "axios";

import image1 from "../Images/coinbase.png";
import image2 from "../Images/metamask.png";
import image3 from "../Images/trust-wallet.png";
import image4 from "../Images/wallet-connect.png";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ConnectWallet = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [chain, setChain] = useState("");
  const [nftInfoMetaData, setNFTInfoMetaData] = useState({});
  const [backendResponse, setBackendResponse] = useState(null);
  const {
    fetchedWalletAddress,
    setFetchedWalletAddress,
    fetchedWalletId,
    setFetchedWalletId,
    fetchedWalletType,
    setFetchedWalletType,
  } = useContext(WalletIDMainContext);
  const navigate = useNavigate(); // Hook for programmatic navigation


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `https://api.nftport.xyz/v0/accounts/${walletAddress}?chain=ethereum`; // You may adjust the 'chain' parameter as needed
      const api_key = "b7fb531b-40ef-4855-bcb0-56ff6374948f";

      const headers = {
        Authorization: api_key,
        "Content-Type": "application/json",
      };

      const response = await axios.get(url, { headers });
      const nftData = response.data;

      // Filter NFTs with non-null cached_file_url
      const filteredNFTs = nftData.nfts.filter(
        (nft) => nft.cached_file_url !== null
      );

      // Update state with filtered NFTs
      setNFTInfoMetaData({
        ...nftData,
        nfts: filteredNFTs,
      });

      console.log("Third-party API response:", nftData);
      console.log("Third-party API response:", filteredNFTs);
    } catch (error) {
      console.error("Error fetching NFT info:", error);
    }
  };

  useEffect(() => {
    if (Object.keys(nftInfoMetaData).length > 0) {
      const options = {
        method: "POST",
        url: "http://127.0.0.1:8000/nft/dummy",
        headers: { "Content-Type": "application/json" },
        data: {
          userID: "",
          walletAddress: "",
          nftMetaData: nftInfoMetaData,
          rightAllocated: {
            cap: "",
            hoodie: "",
            tshirt: "",
          },
          lastSyncedOn: new Date().toISOString(),
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setBackendResponse(response.data);
          console.log("Backend API response:", response.data);
        })
        .catch(function (error) {
          console.error("Error sending data to backend API:", error);
        });
    }
  }, [walletAddress, nftInfoMetaData]);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log(result);
          accountChangeHandler(result[0]);

          // Get the selected wallet type based on the button clicked
          let walletType = "";
          if (document.activeElement.textContent === "MetaMask") {
            walletType = "metamask";
            setFetchedWalletType("metamask");
          } else if (document.activeElement.textContent === "Coinbase") {
            walletType = "coinbase";
            setFetchedWalletType("coinbase");
          } else if (document.activeElement.textContent === "Trust Wallet") {
            walletType = "trust wallet";
            setFetchedWalletType("trust wallet");
          } else if (document.activeElement.textContent === "Wallet Connect") {
            walletType = "wallet connect";
            setFetchedWalletType("wallet connect");
          }

          const dataToSave = {
            walletAddress: result[0],
            walletType: walletType,
            totalRefferal: ["saluh"],
          };

          axios
            .post("http://127.0.0.1:8000/user/login", dataToSave)
            .then(function (response) {
              console.log(response.data);
              // setFetchedWalletAddress(response.walletId);
              setFetchedWalletId(response.data.response.walletId.toString());
              console.log(response.data.response.walletId.toString());
              // Handle the response from the server if needed
            })
            .catch(function (error) {
              console.log(error);
              // Handle any error that occurred during the request
            });
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage("Wallet connect nahi ho raha");
        });
    } else {
      setErrorMessage("Metamask install karo ya sahi ethereum use karo");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    setFetchedWalletAddress(newAccount);
    getUserBalance(newAccount);
    setIsLoggedIn(true); // Set the login status to true
    navigate("/Dashboard"); // Redirect to /Dashboard
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="border-b border-blue-700 mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto"></div>
      <div className="flex flex-col items-center justify-center text-center mt-[3rem] mx-[7rem] overflow-hidden">
        <div className="text-white">
          <h1 className="font-bold text-3xl">Connect Your Wallet.</h1>
          <p className="font-semibold mt-2">
            Connect with one of our available wallet integrations
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <button
            onClick={connectWalletHandler}
            className="cursor-pointer w-60 rounded-lg p-2 my-1.5 flex text-black bg-white font-medium "
            disabled={!window.ethereum}
          >
            <span className="w-fit ml-[12rem] absolute z-10">
              <img className="w-[30px]" src={image2} alt="Wallet" />
            </span>
            MetaMask
          </button>
          <button
            onClick={connectWalletHandler}
            className="cursor-pointer w-60 flex text-black rounded-lg p-2 my-1.5 bg-white font-medium"
            disabled={!window.ethereum}
          >
            <span className="w-fit ml-[12rem] absolute z-10">
              <img className="w-[30px]" src={image1} alt="Wallet" />
            </span>
            Coinbase
          </button>
          <button
            onClick={connectWalletHandler}
            className="cursor-pointer w-60 flex text-black rounded-lg p-2 my-1.5 bg-white font-medium"
            disabled={!window.ethereum}
          >
            <span className="cursor-pointer w-fit ml-[12rem] absolute z-10">
              <img className="w-[30px]" src={image3} alt="Wallet" />
            </span>
            Trust Wallet
          </button>
          <button
            onClick={connectWalletHandler}
            className="cursor-pointer w-60 flex text-black rounded-lg p-2 my-1.5 bg-white font-medium"
            disabled={!window.ethereum}
          >
            <span className="cursor-pointer w-fit ml-[12rem] absolute z-10">
              <img className="w-[30px]" src={image4} alt="Wallet" />
            </span>
            Wallet Connect
          </button>
        </div>
        <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
          <div className="text-white items-start justify-start text-left  mt-[6rem]">
            Disclaimer : <br />
            <p className="text-sm">
              Blockright seeks wallet verification with the sole purpose of
              gathering public address information from the user to retrieve
              details of non-fungible tokens (NFTs) held in a specific wallet
              from the blockchain. It is important to note that Blockright does
              not request, acquire, or seek ownership, transfer, authentication,
              or custody of any NFTs. We advise users to exercise caution when
              connecting their wallet and signing any transaction. Be vigilant
              and mindful of potential risks, such as phishing attempts or
              suspicious transactions. By using our services, you acknowledge
              and agree to the terms and conditions stated in this legal
              disclaimer.
              <br /> If you do not agree with any part of this disclaimer,
              please refrain from using our website and services. If you have
              any questions or concerns regarding this legal disclaimer or our
              services, please contact us at support@blockright.org
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConnectWallet;
