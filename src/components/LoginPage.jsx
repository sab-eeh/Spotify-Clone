import React from "react";
import SpotifyIcon from "../components/Icons/SpotifyIcon.png";
import Google from "../components/Icons/Google.png";
import Facebook from "../components/Icons/Facebook.png";
import Apple from "../components/Icons/Apple.png";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-4 py-6 bg-gradient-to-b from-[#2e2e2e] via-[#1a1a1a] to-[#0d0d0d]">
        <div className="bg-[#121212] text-white w-full max-w-2xl rounded-lg flex flex-col items-center py-6 px-4 sm:px-8">
          <img src={SpotifyIcon} alt="Spotify" className="w-10 filter invert mb-2" />
          <h2 className="text-xl font-bold mb-4">Log in to Spotify</h2>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-3 py-4 w-full">
            <button className="flex items-center justify-center gap-3 h-12 text-white border border-gray-500 rounded-full hover:border-white transition">
              <img src={Google} alt="Google" className="w-7" />
              <p>Continue with Google</p>
            </button>
            <button className="flex items-center justify-center gap-3 h-12 text-white border border-gray-500 rounded-full hover:border-white transition">
              <img src={Facebook} alt="Facebook" className="w-9" />
              <p>Continue with Facebook</p>
            </button>
            <button className="flex items-center justify-center gap-3 h-12 text-white border border-gray-500 rounded-full hover:border-white transition">
              <img src={Apple} alt="Apple" className="w-6 pb-1" />
              <p>Continue with Apple</p>
            </button>
          </div>

          <hr className="w-[70%] my-6 border-gray-600" />

          {/* Login Form */}
          <form className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col gap-4 w-full items-center">
              <div className="w-full max-w-xs">
                <label htmlFor="email" className="font-semibold text-sm">
                  Email or username
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email or username"
                  className="w-full mt-1 px-3 py-2 bg-[#121212] text-sm text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="w-full max-w-xs">
                <label htmlFor="password" className="font-semibold text-sm">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full mt-1 px-3 py-2 bg-[#121212] text-sm text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <button className="bg-[#1ed760] hover:bg-[#2ddd6b] text-black font-bold py-3 px-20 rounded-full text-sm transition transform hover:scale-105">
              Log In
            </button>

            <div className="pt-4">
              <a href="#" className="text-white font-medium hover:text-[#1ed760] text-sm">
                Forgot your password?
              </a>
            </div>
          </form>

          {/* Sign-up prompt */}
          <div className="flex items-center gap-2 pt-6 text-sm">
            <p className="text-gray-400">Don't have an account?</p>
            <a href="#" className="text-white font-semibold hover:text-[#1ed760]">
              Sign up for Spotify
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#121212] text-center text-xs text-gray-400 py-6 px-8">
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="underline hover:text-white">Privacy Policy</a> and{" "}
          <a href="#" className="underline hover:text-white">Terms of Service</a> apply.
        </p>
      </div>
    </>
  );
};

export default Login;
