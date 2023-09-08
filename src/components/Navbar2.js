import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/blockright-logo.png"
import { useContext } from 'react';
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";


const Navbar2 = (props) => {

  const [myValue, setMyValue] = useState(localStorage.getItem('myValue') || props.value);
  const { fetchedWalletAddress } = useContext(WalletIDMainContext);

  useEffect(() => {
    // Update the state with the fetchedWalletAddress
    setMyValue(fetchedWalletAddress);
  }, [fetchedWalletAddress]);

  useEffect(() => {
    // Store myValue in localStorage whenever it changes
    localStorage.setItem('myValue', myValue);
  }, [myValue]);

  return (
    <div className='bg-black'>
      <div className="gap-[35rem] flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <Link className="mr-40 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
          <img src={logo} alt='logo blockright' />
        </Link>
        {/* ... Your other JSX ... */}
        <button className="font-semibold lg:inline-flex mr-20 items-center bg-blue-600 text-white border-2 border-blue-900 py-2 px-3 hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hidden">
          <p>{myValue}</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar2;
