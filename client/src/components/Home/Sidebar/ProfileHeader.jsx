import React, { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import MenuComponent from './MenuComponent';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { showProfile } from '../../../Redux/features/profileBtn/profileBtnSlice';
const ProfileHeader = () => {
  // const [profileBtn, setProfileBtn] = useState(false);
  const profileBtn = useSelector((state) => state.showProfileBtn.value);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const authUser = useSelector((state) => state.user.authUser);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex py-2 sh-[13vh] h-fit relative">
      {profileBtn ? (
        <Profile />
      ) : (
        <div className="w-[100%] flex flex-row-reverse items-center py-3  ">
          {/* <button className="w-[10%] mx-4 border border-black rounded-full"> */}
          {/* <button className=" mx-4 p-2 hover:bg-gray-200 rounded-full">
          <LuMenu className="text-2xl" />
        </button> */}

          <MenuComponent />
          <div
            className={` w-[75%] md:w-[70%] lg:w-[73%] p-2 flex justify-center items-center gap-x-2 border ${darkMode ? 'bg-slate-900 hover:bg-slate-800 border-gray-700' : ' bg-gray-100 hover:bg-gray-200 border-gray-300 '} rounded-md  `}
            // onClick={() => setProfileBtn(true)}
            onClick={() => dispatch(showProfile(true))}
          >
            <div
              className="w-[20%] h-12 md:h-10 lg:h-12 rounded-full"
              style={{
                backgroundImage: `url(${authUser?.profilePic || './images/default_profile.png'})`,
                backgroundSize: 'cover', // Cover the entire container
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent tiling
              }}
            >
              {/* <img
                src={authUser?.profilePic || './images/default_profile.png'}
                alt="profile"
                srcSet=""
                className="w-full rounded-full"
              /> */}
              {/* <div className="w-[20%] rounded-full">
              <img
                src={authUser?.profilePic || './images/default_profile.png'}
                alt="profile"
                srcSet=""
                className="w-full rounded-full"
              /> */}
            </div>
            <div className="w-[80%] truncate">
              <h3 className="truncate">{authUser?.name}</h3>
              {/* <h3>Jabed Ali</h3> */}
              <p
                className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                @{authUser?.username}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* <div className="w-[40%] flex justify-end">
        <button className="flex justify-center items-center mx-2">
          <BiLogOut />
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default ProfileHeader;
{
  /* <div className="w-full flex py-2">
<div className="w-[60%] flex justify-between">
  <button className="w-[20%] mx-4">
    <LuMenu className="text-2xl" />
  </button>
  <div className="w-[80%]  p-2  flex justify-center items-center gap-x-2 bg-gray-100  shadow-sm shadow-black rounded-md">
    <div className="w-[40%] rounded-full">
      <img
        src="./images/signup1.png"
        alt=""
        srcSet=""
        className="w-full rounded-full"
      />
    </div>
    <div className="w-[60%]">
      <h3>Jabed Ali</h3>
      <p className="text-sm text-gray-600">@jabedali</p>
    </div>
  </div>
</div>
<div className="w-[40%] flex justify-end">
  <button className="flex justify-center items-center mx-2">
    <BiLogOut />
    Logout
  </button>
</div>
</div> */
}
