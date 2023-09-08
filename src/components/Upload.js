import React from "react";
import { Link } from "react-router-dom";
// import MintNft from "./MintNft";
import Punk from "./Punk";

const Upload = () => {
  return (
    <>
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <div className="text-white flex  mt-14">
          <div className="flex">
            <Punk />
          </div>

          <div className="w-[25rem] ml-72 mt-">
            <Link to="/NftPage">
              <div className="border-2 border-dashed  rounded-xl text-2xl mb-[2rem] border-cyan-800 hover:bg-slate-600 hover:border-2 hover:border-dashed ml- h-44 flex justify-center items-center">
                <h1>Mint your NFT Merch</h1>
              </div>
            </Link>
            <div className="flex mb-6 gap-7">
              <div className="bg-white w-[12rem] h-[7rem] rounded-xl">
                <p className="text-blue-600 pl-10 font-normal pt-0">Earned</p>
                <p className="text-blue-600 text-6xl font-semibold pl-10 pt-2">
                  $0
                </p>
              </div>
              <div className="bg-white w-[9rem] h-[7rem] rounded-xl">
                <p
                  style={{
                    color: "grey",
                    paddingLeft: "20px",
                    fontSize: "20px",
                  }}
                >
                  Withdrawn
                </p>
                <p
                  style={{
                    color: "orange",
                    fontSize: "3rem",
                    paddingLeft: "20px",
                  }}
                >
                  $0
                </p>
              </div>
            </div>
            <p className="text-white font-bold text-3xl my-3">
              Recent Transaction
            </p>
            <div className="bg-white w-[23rem] h-[24rem] rounded-xl mb-5 flex justify-center items-center">
              <p className="text-gray-500 text-lg">No Sales Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
