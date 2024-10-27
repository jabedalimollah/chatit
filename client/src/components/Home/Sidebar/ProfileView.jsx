import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
const ProfileView = ({ handleProfileView, profileImage }) => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  const authUser = useSelector((state) => state.user.authUser);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  return (
    <div
      className={`w-full flex justify-center items-center h-screen fixed top-0 left-0 z-50 ${darkMode ? 'bg-slate-800' : ' bg-blue-100'} bg-opacity-85`}
    >
      <div
        className={`w-[80%] md:w-[50%] lg:w-[20%] h-1/2 flex flex-col items-start border border-blue-600 p-3 rounded-md shadow-md  ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
      >
        <button
          className=" h-[10%] md:h-[8%] lg:h-[10%] px-3 py-1 flex gap-x-2 items-center hover:text-white rounded-md hover:bg-red-600 my-2"
          onClick={() => handleProfileView(false)}
        >
          <IoMdArrowBack /> Back
        </button>
        {/* <div className="w-full"> */}
        <div className="w-full h-[80%] flex justify-center items-center">
          <img
            src={profileImage?.profilePic || './images/default_profile.png'}
            alt="profile"
            // srcSet=""
            className=" h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
