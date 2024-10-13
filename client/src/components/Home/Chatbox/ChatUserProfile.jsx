import React, { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import ProfileView from '../Sidebar/ProfileView';
import { useSelector } from 'react-redux';
const ChatUserProfile = ({ handleHideChatUser }) => {
  const [profileView, setProfileView] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const handleProfileView = (data) => {
    setProfileView(data);
  };
  return (
    <>
      <div
        className={`w-[84%] md:w-[40%] lg:w-[24%] h-screen fixed top-0 right-0 z-10 shadow-lg ${darkMode ? 'bg-slate-950  shadow-black' : 'bg-white  shadow-gray-600'} `}
      >
        <div
          className={`w-full h-[8vh] ${darkMode ? 'bg-slate-900' : 'bg-gray-200'} flex items-center px-3 gap-x-3 text-lg font-bold `}
        >
          <button
            className={`${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-300'} p-3 rounded-full`}
            onClick={() => handleHideChatUser(false)}
            // onClick={() => handleProfile(false)}
          >
            <MdClose className="text-xl" />
          </button>
          <p className="">Profile</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[60%] my-10 rounded-full relative shadow shadow-gray-700 outline outline-2 outline-blue-600">
            <img
              src="./images/profile.png"
              alt="profile"
              srcSet=""
              className="w-full rounded-full "
              onClick={() => handleProfileView(true)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-3">
          <div className="w-[80%] flex flex-col ">
            <span className="text-base text-blue-700 font-bold">Name</span>
            <p className="text-lg font-semibold">Jabed Ali</p>
          </div>
          <div className="w-[80%] flex flex-col ">
            <span className="text-base text-blue-700 font-bold">Username</span>
            <p className="text-lg font-semibold">@jabedali</p>
          </div>
          <div className="w-[80%] flex flex-col ">
            <span className="text-base text-blue-700 font-bold">Bio</span>
            <p className="text-lg font-semibold">Hey There I am using Chatit</p>
          </div>
        </div>
      </div>
      {profileView && <ProfileView handleProfileView={handleProfileView} />}
    </>
  );
};

export default ChatUserProfile;
