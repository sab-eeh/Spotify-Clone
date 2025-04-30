import React from "react";
import LibraryIcon from "./Svgs/Library.svg";
import PlusIcon from "./Svgs/Plus.svg";

function LeftSection() {
  return (
    <div className="h-[77vh] w-1/4 bg-[#121212] rounded-lg">
      {/* LIBRARY TOP SECTION */}
      <div className="flex items-center justify-between px-5 pt-4 pb-6">
        <div className="flex items-center gap-[10px]">
          <a href="#" className="text-white text-lg font-bold">
            Your Library
          </a>
        </div>
        <div>
          <img className="w-6 h-6 invert p-1  hover:bg-gray-300 rounded-full cursor-pointer" src={PlusIcon} alt="Plus-Icon" />
        </div>
      </div>

      {/* LIBRARY MIDDLE SECTION */}
      <div className="flex flex-col gap-[25px] px-2 pt-1 pb-[30px] h-[29vh] overflow-auto">
        <div className="bg-[#1F1F1F] p-[18px_20px] rounded-lg">
          <div className="flex flex-col gap-4">
            <div>
              <h6 className="font-semibold text-[16px]">
                Create your first playlist
              </h6>
              <p className="text-[14px] font-semibold">
                It's easy, we'll help you
              </p>
            </div>
            <button className="mt-2 bg-white text-black text-sm font-bold py-[6px] px-[18px] rounded-full border-none">
              Create playlist
            </button>
          </div>
        </div>

        <div className="bg-[#1F1F1F] p-[18px_20px] rounded-lg">
          <div className="flex flex-col gap-4">
            <div>
              <h6 className="font-semibold text-[16px]">
                Let's find some podcasts to follow
              </h6>
              <p className="text-[13px] font-semibold">
                We'll keep you updated on new episodes
              </p>
            </div>

            <button className="mt-2 bg-white text-black text-sm font-bold py-[6px] px-[18px] rounded-full border-none">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>

      {/* LIBRARY FOOTER SECTION */}
      <div className="flex flex-col gap-[15px] px-[22px] py-8">
        <div className="flex gap-[20px]">
          <a
            href="https://www.spotify.com/pk-en/legal/end-user-agreement/"
            className="text-gray-400 text-xs no-underline"
          >
            Legal
          </a>
          <a
            href="https://www.spotify.com/pk-en/safetyandprivacy"
            className="text-gray-400 text-xs no-underline"
          >
            Safety & Privacy Center
          </a>
          <a
            href="https://www.spotify.com/pk-en/legal/privacy-policy/"
            className="text-gray-400 text-xs no-underline"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-[20px]">
          <a
            href="https://www.spotify.com/pk-en/legal/cookies-policy/"
            className="text-gray-400 text-xs no-underline"
          >
            Cookies
          </a>
          <a
            href="https://www.spotify.com/pk-en/legal/privacy-policy/#s3"
            className="text-gray-400 text-xs no-underline"
          >
            About Ads
          </a>
          <a
            href="https://www.spotify.com/pk-en/accessibility"
            className="text-gray-400 text-xs no-underline"
          >
            Accessibility
          </a>
        </div>
        <div className="flex gap-[20px]">
          <a
            href="https://www.spotify.com/pk-en/legal/cookies-policy/"
            className="text-gray-400 text-xs no-underline"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
