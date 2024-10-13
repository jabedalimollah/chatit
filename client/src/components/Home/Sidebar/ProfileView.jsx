import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
const ProfileView = ({ handleProfileView }) => {
  return (
    <div className="w-full flex justify-center items-center h-screen fixed top-0 left-0 z-50 bg-blue-100 bg-opacity-85">
      <div className="w-[80%] md:w-[50%] lg:w-[20%] flex flex-col items-start border border-blue-600 p-3 rounded-md shadow-md bg-white">
        <button
          className="px-3 py-1 flex gap-x-2 items-center hover:text-white rounded-md hover:bg-red-600 my-2"
          onClick={() => handleProfileView(false)}
        >
          <IoMdArrowBack /> Back
        </button>
        <div className="w-full">
          <img
            src="./images/profile.png"
            alt="profile"
            srcSet=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;