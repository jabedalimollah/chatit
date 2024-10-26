import React, { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import ProfileView from '../Sidebar/ProfileView';
import { useSelector } from 'react-redux';
const ChatUserProfile = ({ handleHideChatUser }) => {
  const [profileView, setProfileView] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const handleProfileView = (data) => {
    setProfileView(data);
  };
  return (
    <>
      <div
        className={`w-[84%] md:w-[40%] lg:w-[24%] h-screen fixed top-0 right-0 z-20  shadow-lg ${darkMode ? 'bg-slate-950  shadow-black' : 'bg-white  shadow-gray-600'} `}
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
          <div className="sw-[60%]  w-52 h-52 my-10 rounded-full overflow-hidden relatives shadow shadow-gray-700 outline outline-2 outline-blue-600">
            <div
              className="w-full h-full rounded-fulls"
              style={{
                backgroundImage: `url(${selectedUser?.profilePic || './images/default_profile.png'})`,
                backgroundSize: 'cover', // Cover the entire container
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent tiling
                minHeight: '100%', // Ensures proper height
                minWidth: '100%',
                transform: 'scale(1.1)',
              }}
              onClick={() => handleProfileView(true)}
            ></div>
            {/* <img
            
              src={selectedUser?.profilePic || './images/default_profile.png'}
              alt="profile"
              srcSet=""
              className="w-full rounded-full "
              onClick={() => handleProfileView(true)}
            /> */}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-3">
          <div className="w-[80%] flex flex-col ">
            <span className="text-base text-blue-700 font-bold">Name</span>
            <p className="text-lg font-semibold">{selectedUser?.name}</p>
          </div>
          <div className="w-[80%] flex flex-col ">
            <span className="text-base text-blue-700 font-bold">Username</span>
            <p className="text-lg font-semibold">@{selectedUser?.username}</p>
          </div>
          <div className="w-[80%] flex flex-col ">
            <span className="text-base text-blue-700 font-bold">About</span>
            <p className="text-lg font-semibold">
              {/* Hey There I am using Chatit */}
              {selectedUser?.about}
            </p>
          </div>
        </div>
      </div>
      {profileView && (
        <ProfileView
          handleProfileView={handleProfileView}
          profileImage={selectedUser}
        />
      )}
    </>
  );
};

export default ChatUserProfile;
