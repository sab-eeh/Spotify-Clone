import React, { useState } from "react";
import imageData from "./ImageData";
import PlayButton from "./Icons/PlayButton.png";
import MainFooter from "./Footer";

function RightSection({ setCurrentPage }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <>
      {/* Right Section */}
      <div className="h-[77vh] w-[75%] bg-[#121212] rounded-lg overflow-auto">
        <div className="grid grid-cols-6 gap-4 p-2">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="relative p-3 my-5 cursor-pointer hover:bg-[rgba(71,71,71,0.3)] rounded-lg transition"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full rounded-lg shadow-md"
              />
              <div className="my-3">
                <h6 className="text-[14px] font-semibold text-gray-200">
                  {image.title}
                </h6>
                <p className="text-[13px] font-medium text-[#9b9b9b] m-0">
                  {image.description}
                </p>
              </div>
              <div className="play-button-div absolute left-[100px] bottom-[80px] invisible group-hover:visible group-hover:bottom-[100px] transition-all duration-200 ease-linear">
                <button className="bg-[#1ed760] p-3 rounded-full border-none shadow-md">
                  <img src={PlayButton} alt="Play" className="w-[22px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <MainFooter />
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={closeModal}
        >
          <div
            className="w-[810px] max-w-[80%] h-[70vh] bg-gradient-to-b from-[#071e27] to-[#303030] rounded-lg flex items-center px-[60px] gap-[50px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 w-1/2">
              <img
                src={selectedImage?.src}
                alt=""
                className="rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <h3 className="text-white font-bold text-[30px] text-center leading-snug">
                Start listening with a free Spotify account
              </h3>
              <div className="flex flex-col items-center justify-center gap-4 py-6">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setCurrentPage("signup");
                  }}
                  className="bg-[#1ed760] hover:bg-[#4ac575] font-bold text-center py-2 px-8 rounded-full transition transform hover:scale-110"
                >
                  Sign up free
                </button>
                <button className="border border-gray-400 hover:border-white text-white font-semibold py-2 px-8 rounded-full transition transform hover:scale-110">
                  Download app
                </button>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-gray-400 m-0">
                  Already have an account?
                </p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setCurrentPage("login");
                  }}
                  className="text-white font-bold text-sm hover:text-[#1ed760]"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RightSection;
