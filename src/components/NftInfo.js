import React, { useEffect, useState, useContext } from "react";
import axios from "axios"; // For making HTTP requests
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";

function NFTInfo() {
  // const { fetchedWalletAddress } = useContext(WalletIDMainContext);
  const [walletAddress, setWalletAddress] = useState("");
  const [chain, setChain] = useState("");
  const [nftInfoMetaData, setNFTInfoMetaData] = useState({});
  const [backendResponse, setBackendResponse] = useState(null);
  /* 
    0x2238c8b16c36628b8f1f36486675c1e2a30debf1//done
    0xa25803ab86a327786bb59395fc0164d826b98298//done
    0x577ebc5de943e35cdf9ecb5bbe1f7d7cb6c7c647//done
    0x69021ae8769586d56791d29615959997c2012b99//done
    0xf68e4d63c8ea83083d1cb9858210cf2b03d8266b//done
    0x1544D2de126e3A4b194Cfad2a5C6966b3460ebE3//done
    */

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: "white" }}>Enter Wallet Address:</label>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Wallet address"
            style={{ marginLeft: "5px", width: "400px" }}
          />
        </div>
        <div>
          <label style={{ color: "white" }}>Select Chain:</label>
          <input
            type="text"
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            placeholder="Chain"
            style={{ marginLeft: "5px", width: "100px" }}
          />
        </div>
        <button style={{ background: "white" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NFTInfo;
