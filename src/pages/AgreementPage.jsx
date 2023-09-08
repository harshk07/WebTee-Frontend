import React, { useContext, useState ,useEffect} from "react";
import { Nft } from "../components/Nft";
import Navbar2 from "../components/Navbar2";
import { Footer2 } from "../layout/Footer2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WalletIDMainContext from "../context/walletID/WalletIDMainContext";
export const AgreementPage = () => {
  const location = useLocation();
  const { state } = location; 
  const{fetchedWalletAddress}=useContext(WalletIDMainContext)
  const [agreed,setAgreed]=useState(false)
  const navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };
  useEffect(() => {
    // Scroll the window to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const handleMintMerch = () => {
    if (agreed) {
      console.log("Minting merchandise...");
      navigate("/Loader")
    } else {
      
      alert("Please agree to the terms and conditions.");
    }
  };
  return (
    <div className='bg-black'>
      <Navbar2 value={fetchedWalletAddress} />
      <section className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <div className=" pb-[45px]">
          <div className=" text-white flex mt-10 mb-[-8rem] pt-[45px]">
            <span>
              <h3 className="text-3xl font-semibold ">
                Intellectual Property Agreement
              </h3>
              <br />
              <ol>
                <li>
                  <strong>1. Definitions</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      1.1. "Blockright," "we," "us," or "our" refers to the
                      Blockright website and its operators.
                    </li>
                    <li>
                      1.2. "Web3 Merchandise" refers to any digital artwork,
                      collectibles, or any other creative assets minted on our
                      platform using blockchain technology.
                    </li>
                    <li>
                      1.3. "Customer," "user," "you," or "your" refers to any
                      individual or entity using our services to create or
                      purchase Web3 merchandise.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>2. Web3 Merchandise Creation</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      2.1. You, as a customer, agree that all Web3 merchandise
                      created through our platform will comply with our
                      guidelines and policies. This includes adhering to
                      copyright laws and avoiding the use of offensive, illegal,
                      or harmful content.
                    </li>
                    <li>
                      2.2. You understand that all Web3 merchandise created will
                      be stored on the blockchain and cannot be altered or
                      modified once minted.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>3. Licensing and Ownership</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      3.1. As a customer, you retain full ownership and
                      copyright of the original content used in the creation of
                      Web3 merchandise. However, by minting your Web3
                      merchandise on our platform, you grant Blockright a
                      non-exclusive, worldwide, royalty-free license to display,
                      reproduce, and distribute your Web3 merchandise for
                      promotional purposes.
                    </li>
                    <li>
                      3.2. Blockright does not claim ownership of your Web3
                      merchandise or its underlying intellectual property.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>4. Payment and Royalties</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      4.1. Customers understand that minting Web3 merchandise on
                      our platform may involve payment of fees and royalties.
                    </li>
                    <li>
                      4.2. Customers agree to provide accurate and up-to-date
                      payment information for any transactions conducted on our
                      platform.
                    </li>
                    <li>
                      4.3. Customers will be entitled to receive royalties from
                      sales of their Web3 merchandise according to the terms
                      specified on our website.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>5. Code of Conduct</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      5.1. Customers shall use our services responsibly and
                      refrain from engaging in any activities that may disrupt
                      or harm the platform or other users.
                    </li>
                    <li>
                      5.2. Customers agree not to engage in any fraudulent,
                      illegal, or unauthorized activities while using our
                      platform.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>6. Termination</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      6.1. Blockright reserves the right to terminate or suspend
                      the accounts of customers who violate these terms and
                      conditions or engage in any inappropriate behavior.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>7. Disclaimer</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      7.1. Blockright makes no warranties or guarantees
                      regarding the success, sales, or popularity of Web3
                      merchandise minted on our platform.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>8. Modifications</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      8.1. Blockright reserves the right to update or modify
                      these terms and conditions at any time. Continued use of
                      our services after such changes will constitute your
                      acceptance of the revised terms.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>9. Governing Law and Jurisdiction</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      9.1. These terms and conditions shall be governed by and
                      construed in accordance with the laws of [Jurisdiction],
                      without regard to its conflict of law principles.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  <strong>10. Contact Information</strong>
                  <br />
                  <ol className="text-[13px]">
                    <li>
                      10.1. If you have any questions or concerns about these
                      terms and conditions or our services, please contact us at
                      [Contact Email].
                    </li>
                  </ol>
                </li>
                <br />
              </ol>

              <label>
                <input
                  style={{ width: "17px", height: "17px" }}
                  type="checkbox"
                  id="termsCheckbox"
                  required
                  onChange={handleCheckboxChange}
                />
                <span style={{ margin: "7px" }}>I agree to the</span>
                <a href="terms.html" target="_blank" style={{"color":"blue"}}>
                  terms and conditions
                </a>
              </label>
              <div className="flex my-10">
               
               <button 
               className="btn w-54 font-semibold text-xl rounded-none border=1 border-blue"
               onClick={handleMintMerch}>
                  Mint Merch
                </button>
              </div>
            </span>

            <span className="flex w-fit ml-auto mr-20">
              <Nft
                imgSource={state.data.imgSource}
                name={state.data.name}
                price={state.data.price}
              />
            </span>
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
};
