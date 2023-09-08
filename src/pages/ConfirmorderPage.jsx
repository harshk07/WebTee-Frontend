import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import { Carousel1 } from "../components/Carousel1";
import { Dropdown } from "../components/Dropdown";
import { Country } from "../components/Country";


export const ConfirmorderPage = () => {
  const [numberOfPieces, setNumberOfPieces] = useState(1);

  const handleIncreasePieces = () => {
    setNumberOfPieces((prev) => prev + 1);
  };

  const handleDecreasePieces = () => {
    if (numberOfPieces > 1) {
      setNumberOfPieces((prev) => prev - 1);
    }
  };

  return (
    <div className='bg-black'>
      <Navbar />

      <section className="ml-10 mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <div className="container mx-auto flex  my-20 md:flex-row flex-col items-center ">
          <div className="">
            <Carousel1 />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-3">
            <div className="bg-white rounded-xl mb-5 overflow-hidden mx-3">
              <div className="mx-3">
                
                  <div  className="flex b bg-white mb-4">
                    <div className="w-24 h-28 mt-8 ">
                      <img
                        className="w-24 h-28"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLwGb3KPeGRFGXJuTQIBwU1RA-taAyI-5r3Td5EYCBWz0YlyKFmrvTsl6ExLT5Xfwj-8&usqp=CAU"
                        alt="cloth img"
                      />
                      <div className="flex mt-2 items-baseline">
                        <button
                          onClick={handleDecreasePieces}
                          className="font-semibold w-5 h-5 rounded-full text-white bg-red-500 absolute"
                        >
                          -
                        </button>
                        {/* <p className="text-black inline ml-9">1</p> */}
                        <button
                          onClick={handleIncreasePieces}
                          className="font-semibold w-5 h-5 rounded-full text-white bg-red-500 absolute ml-16 mb-10 inline"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col pl-2 mt-7 items-baseline gap-1">
                      <div className="flex gap-20">
                        <p className="font-bold">Monkey T-shirt</p>
                        <p className="font-bold">$456</p>
                      </div>
                      {Array.from({ length: numberOfPieces }).map((_, index) => (
                      <div key={index} className="flex gap-[8rem] ">
                        <p className="font-normal">
                          <input
                            type="number"
                            placeholder="0"
                            max={10}
                            min={1}
                            className="w-6 outline-none"
                          />
                          piece
                        </p>
                        <Dropdown
                          size="Size"
                          size1="X"
                          size2="XL"
                          size3="XXL"
                          size4="XXXL"
                        />
                      </div> ))}
                    </div>
                  </div>
               
              </div>
              <div className=" flex justify-end gap-2 mx-3">
                <Country />
                {/* <City /> */}
              </div>
              <div className="border-b border-1 border-slate-800 mt-6 mx-3"></div>
              <div className="my-2 flex gap-60 text-end mx-3">
                <div className="text-black text-lg font-normal">
                  Subtotal <br />
                  Shipping
                </div>
                <div className="text-black font-semibold text-lg">
                  8449~<br />
                  800
                </div>
              </div>
              <div className="border-b border-1 border-slate-800 mx-3"></div>
              <div className="w-[23rem] flex items-baseline mt-4 mx-3">
                <p className="text-black text-xl font-medium">Total</p>
                <p className="text-black text-xs ml-[14rem] ">EUR</p>
                <p className="text-black text-xl font-semibold ml-1">386,00</p>
              </div>
              <div className="text-center items-center w-auto py-5 ">
                <button className="text-white bg-black hover:bg-slate-600 rounded-lg w-[23rem] text-lg py-1 px-4">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConfirmorderPage;
