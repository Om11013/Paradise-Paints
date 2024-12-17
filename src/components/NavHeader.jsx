import React from 'react';
import logo from '../assets/logo.jpg';

const NavHeader = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-[#64a8d2] px-5 py-2.5 z-[1000]">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-[30px] w-[30px] mr-2.5" 
          />
          <h1 className="text-white text-xl font-bold">Paradise</h1>
        </div>

        <ul className="flex items-center">
          <li className="ml-5">
            <a 
              href="#" 
              className="text-white text-base px-2.5 py-1.5 transition-colors duration-300 hover:text-[#00bcd4]"
            >
              Home
            </a>
          </li>
          <li className="ml-5">
            <a 
              href="#" 
              className="text-white text-base px-2.5 py-1.5 transition-colors duration-300 hover:text-[#00bcd4]"
            >
              About
            </a>
          </li>
          <li className="ml-5">
            <a 
              href="#" 
              className="text-white text-base px-2.5 py-1.5 transition-colors duration-300 hover:text-[#00bcd4]"
            >
              Services
            </a>
          </li>
          <li className="ml-5">
            <a 
              href="#" 
              className="text-white text-base px-2.5 py-1.5 transition-colors duration-300 hover:text-[#00bcd4]"
            >
              Contact
            </a>
          </li>
          <li className="ml-5">
            <button 
              className="bg-[#00bcd4] text-white border-none rounded-md px-3.5 py-1.5 cursor-pointer 
                         transition-colors duration-300 hover:bg-[#0196a4]"
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
      <div className="pt-[70px]">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default NavHeader;