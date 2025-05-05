import React from "react";
import homelogo from "./Icons/homepage.png";
import SpotifyIcon from "./Icons/SpotifyIcon.png";

function Navbar({ currentPage, setCurrentPage }) {
  const isHome = currentPage === "home";
  return (
    <div className="text-white bg-black px-2 sm:px-3 py-2 flex items-center justify-between">
      {/* Left Section - Spotify Icon */}
      <div className="flex items-center gap-7">
        <img
          onClick={() => setCurrentPage("home")}
          className="w-[38px] invert transition-transform duration-200 hover:scale-110 cursor-pointer"
          src={SpotifyIcon}
          alt="Spotify Icon"
        />
        {/* Search Section */}
        <div className="flex items-center gap-[10px]">
          <div
            onClick={() => setCurrentPage("home")}
            className="flex items-center p-[8px_10px] bg-[#1f1f1f] rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            <img
              src={homelogo}
              className="w-[26px] h-[28px] invert"
              alt="Home Icon"
            />
          </div>
          <input
            type="search"
            placeholder="What do you want to play?"
            className="w-[470px] h-[45px] rounded-[24px] border-none bg-[#1f1f1f] px-4 text-white placeholder:text-gray-300 placeholder:font-normal focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section - Auth Buttons */}
      <div className="flex items-center gap-4">
        {/* Other Links Section */}
        <div className="flex gap-8">
          <div className="flex gap-3">
            <a className="font-bold text-gray-400 hover:text-white" href="">
              Premium
            </a>
            <a className="font-bold text-gray-400 hover:text-white" href="">
              Support
            </a>
            <a className="font-bold text-gray-400 hover:text-white" href="">
              Download
            </a>
          </div>
          <div>
          <p>|</p>
          </div>
          <div>
            <a className="font-bold text-gray-400 hover:text-white" href="">
              Install App
            </a>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage("signup")}
          className="text-gray-500 font-bold text-[15px] rounded-full px-5 py-2 transition-transform duration-200 hover:text-white hover:scale-110 cursor-pointer"
        >
          Sign Up
        </button>
        <button
          onClick={() => setCurrentPage("login")}
          className="text-black bg-white font-bold text-[15px] rounded-full px-8 py-2 transition-all duration-200 hover:bg-white/90 hover:scale-110 cursor-pointer"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
