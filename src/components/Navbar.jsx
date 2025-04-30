import React from "react";
import homelogo from "./Icons/homepage.png";
import SpotifyIcon from "./Icons/SpotifyIcon.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleHome = () => {
    navigate("/Home");
  };

  return (
    <div className="h-[11vh] text-white bg-black px-2 sm:px-3 py-2 flex items-center justify-between">
      {/* Left Section - Spotify Icon */}
      <div>
        <img
          onClick={handleHome}
          className="w-[38px] invert transition-transform duration-200 hover:scale-110 cursor-pointer"
          src={SpotifyIcon}
          alt="Spotify Icon"
        />
      </div>

      {/* Center Section - Home Button + Search */}
      <div className="flex items-center gap-[10px] pl-[170px]">
        <div
          onClick={handleHome}
          className="flex items-center p-[8px_10px] bg-[#1f1f1f] rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <img
            src={homelogo}
            className="w-[26px] h-[28px] invert"
            alt="Home Icon"
          />
        </div>
        <input
          id="searchbar"
          type="search"
          placeholder="What do you want to play?"
          aria-label="Search"
          className="w-[470px] h-[50px] rounded-[24px] border-none bg-[#1f1f1f] px-4 text-white placeholder:text-gray-400 placeholder:font-medium focus:outline-none"
        />
      </div>

      {/* Right Section - Auth Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSignUp}
          className="text-gray-500 font-bold text-[15px] rounded-full px-5 py-2 transition-transform duration-200 hover:text-white hover:scale-110 cursor-pointer"
        >
          Sign Up
        </button>
        <button
          onClick={handleLogin}
          className="text-black bg-white font-bold text-[15px] rounded-full px-8 py-2 transition-all duration-200 hover:bg-white/90 hover:scale-110 cursor-pointer"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
