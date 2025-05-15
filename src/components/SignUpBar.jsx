import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpBar = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="mt-2 flex justify-between items-center px-4 py-5 bg-gradient-to-r from-[#ae2a97] to-[#519af4] h-[10vh]">
      <div className="flex flex-col justify-center gap-1 text-white">
        <h6 className="m-0 font-bold text-sm">Preview of Spotify</h6>
        <p className="m-0 text-white text-base">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button
        onClick={handleSignUp}
        className="cursor-pointer bg-white border-none py-3 px-8 rounded-full text-black font-bold"
      >
        Sign up free
      </button>
    </div>
  );
};

export default SignUpBar;
