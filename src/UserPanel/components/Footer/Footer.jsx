import React from "react";
import FooterItemsContainer from "./Footeritemscontainer";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="px-10 py-6 md:flex md:justify-between md:items-center sm:px-12 bg-Purple">
        {/* <BrandSection /> */}
        <h1 className="text-3xl font-semibold text-gray-400 lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5">
          Get the <span className="text-white">Best Offers!</span>
        </h1>

        <div>
          <input
            type="text"
            placeholder="Any Queries?"
            className="w-full px-4 py-2 text-black rounded sm:w-72 sm:mr-5 lg:focus-outline-visible"
          ></input>

          <button
            className="bg-gray-500 hover:bg-gray-400  duration-100 px-6 py-2 font-[poppins] 
                rounded-md text-white md:w-auto w-full"
          >
            Contact
          </button>
        </div>
      </div>
      <FooterItemsContainer />
      <hr></hr>

      <div className="p-4 text-center text-gray-800 text-wrap">
        2024 . Copyrights Resrved . Terms & Conditions Apply
      </div>
    </footer>
  );
};

export default Footer;
