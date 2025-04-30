import React from 'react';
import SpotifyIcon from "../components/Icons/SpotifyIcon.png";
import Google from "../components/Icons/Google.png";
import Facebook from "../components/Icons/Facebook.png";
import Apple from "../components/Icons/Apple.png";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center px-4 py-6 sm:px-6 md:px-12 lg:px-20">
      <img src={SpotifyIcon} alt="Spotify" className="w-12 filter invert mb-6" />
      <h2 className="text-white text-center text-3xl sm:text-4xl font-semibold mb-8">
        Sign up to <br /> start listening
      </h2>

      <form className="w-full flex flex-col items-center">
        <div className="flex flex-col gap-5 mb-6 w-full max-w-md">
          <div className="flex flex-col text-white">
            <label htmlFor="email" className="font-semibold text-sm mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@domain.com"
              className="w-full bg-[#121212] border border-gray-500 text-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1ed760] py-3 px-10 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Next
          </button>
        </div>
      </form>

      <div className="flex items-center gap-4 w-full max-w-md my-6 text-white">
        <hr className="flex-grow border-gray-600" />
        <p className="text-sm">or</p>
        <hr className="flex-grow border-gray-600" />
      </div>

      <div className="flex flex-col gap-3 w-full max-w-md mb-6">
        {[{ img: Google, text: "Continue with Google", size: "w-[30px]" },
          { img: Facebook, text: "Continue with Facebook", size: "w-[37px]" },
          { img: Apple, text: "Continue with Apple", size: "w-[26px] pb-1" }
        ].map(({ img, text, size }, i) => (
          <button
            key={i}
            className="flex items-center justify-center border border-gray-500 text-white rounded-full py-3 px-6 hover:border-white transition-all"
          >
            <div className="flex items-center gap-4">
              <img src={img} alt="" className={size} />
              <p className="m-0 text-sm font-semibold">{text}</p>
            </div>
          </button>
        ))}
      </div>

      <hr className="w-full max-w-sm border-gray-600 my-4" />

      <div className="flex gap-2 items-center text-sm font-medium mb-4">
        <p className="text-gray-400 m-0">Already have an account?</p>
        <a href="#" className="text-white hover:underline">Log in here</a>
      </div>

      <div className="text-center text-[13px] max-w-md px-2 text-gray-400">
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="underline text-gray-400 hover:text-white">Privacy Policy</a> and{" "}
          <a href="#" className="underline text-gray-400 hover:text-white">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
