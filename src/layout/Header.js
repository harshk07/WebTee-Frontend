import React from "react";
import { Card1 } from '../components/Card1';
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      {/* Tailblock */}
      {/* <Navbar/> */}
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto" >
        <section className=" body-font box-border  ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-4">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-extrabold text-white ">
              Mint your NFTs into fashionable
                {/* <br className="hidden lg:inline-block" /> */}
                 <span className="text-orange-500"> Web3 merch</span> 
              </h1>
              <p className="mb-8 leading-relaxed text-white font-semibold">
              Unleash your NFTs in real world with authentic web3 merchs. Our innovation empowers NFT holders to transform their digital masterpieces into tangible expressions of art, fashion, and innovation. Discover, purchase, and embrace Web3 merchandise that transcends the digital realm. 
                <br />
              </p>
              <div className="flex justify-center gap-4">
                <button className="inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
                  <a href="/">Mint Merchs</a>
                </button>
                <button className="gap-1 inline-flex text-white bg-sky-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-500 rounded text-lg items-center">
                  <a href="/">Watch Video</a> 
                  <AiFillPlayCircle/>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://i.postimg.cc/wxnsSnVd/hero.png"
              />
            </div>
          </div>
        </section>

        <div className=" mt-[8rem]  flex  items-center justify-between box-border ">
          <div className="text-white  text-5xl font-bold">Explore</div>
          <div>
            <button className="inline-flex text-white bg-sky-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
              <Link to="/Shopping">View All Merchs</Link>
            </button>
          </div>
        </div>

     
        <div className='border-b  border-blue-700  grow-0 mt-3'></div>

        <div className="flex  justify-center mt-20 ">
         <Link to="/Shopping"> <Card1 imgSource="https://dummyimage.com/720x400" title="The Catalyzer" description="Phdoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." comment="999" /> </Link>
          <Link to="/Shopping"> <Card1 imgSource="https://dummyimage.com/720x400" title="The Catalyzer" description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." comment="888" /> </Link>
          <Link to="/Shopping"> <Card1 imgSource="https://dummyimage.com/720x400" title="The Catalyzer" description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." comment="777" /> </Link>
        </div>
      </div>
      {/* <About/>
      <Contact/> */}
    </>
  );
};

export default Header;
