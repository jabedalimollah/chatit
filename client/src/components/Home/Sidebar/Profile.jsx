import React, { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { showProfile } from '../../../Redux/features/profileBtn/profileBtnSlice';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import ProfileView from './ProfileView';
const Profile = () => {
  const [nameBtn, setNameBtn] = useState(false);
  const [usernameBtn, setUserName] = useState(false);
  const [bioBtn, setBioBtn] = useState(false);
  const [profileView, setProfileView] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const dispatch = useDispatch();
  const handleProfileView = (data) => {
    setProfileView(data);
  };
  return (
    <>
      <div
        className={`w-full absolute h-dvh z-50 top-0 left-0 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
      >
        <div
          className={`w-full h-[8vh] ${darkMode ? 'bg-slate-900' : 'bg-gray-200'} flex items-center px-5 gap-x-5 text-lg font-bold`}
        >
          <button
            className={` ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} p-3 rounded-full`}
            onClick={() => dispatch(showProfile(false))}
            // onClick={() => handleProfile(false)}
          >
            <IoArrowBackOutline />
          </button>
          <p className="">Profile</p>
        </div>
        <div className="h-[92vh] w-full flex flex-col gap-y-4 overflow-y-auto py-3">
          <div className="w-full flex items-center justify-center">
            <div className="w-[60%] my-10 rounded-full relative shadow shadow-gray-700 outline outline-2 outline-blue-600">
              <img
                src="./images/profile.png"
                alt="profile"
                srcSet=""
                className="w-full rounded-full "
                onClick={() => handleProfileView(true)}
              />
              {/* The button to open modal */}
              <label
                htmlFor="my_modal_7"
                className={`absolute right-0 bottom-5 z-10 bg-blue-600 hover:bg-blue-800 shadow ${darkMode ? 'shadow-none' : 'shadow-gray-500'} p-3 text-white rounded-full`}
              >
                <FaPlus />
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box w-[80%] md:w-[40%] lg:w-[23%]">
                  <h3 className="text-lg font-bold my-3 text-center">
                    Select your profile picture
                  </h3>
                  <ul className="w-full flex flex-col gap-y-2">
                    <li>
                      <label
                        htmlFor="profilePicture"
                        className={`flex items-center gap-x-1 text-blue-500 ${darkMode ? 'border border-slate-700 bg-slate-800 hover:bg-slate-900' : 'border border-slate-300 bg-slate-100 hover:bg-slate-200'} rounded-md p-2`}
                      >
                        <input
                          type="file"
                          name=""
                          id="profilePicture"
                          className="hidden"
                        />
                        <MdOutlineCameraAlt className="text-xl" />
                        Upload photo
                      </label>
                    </li>
                    <li>
                      <button
                        className={`w-full flex items-center gap-x-1 text-red-500 ${darkMode ? 'border border-slate-700 bg-slate-800 hover:bg-slate-900' : 'border border-slate-300 bg-slate-100 hover:bg-slate-200'}  rounded-md p-2`}
                      >
                        <RiDeleteBin6Line className="text-xl" /> Remove photo
                      </button>
                    </li>
                  </ul>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
              {/* <label
                htmlFor="picture"
                className={`absolute right-0 bottom-5 z-10 bg-blue-600 hover:bg-blue-800 shadow ${darkMode ? 'shadow-none' : 'shadow-gray-500'} p-3 text-white rounded-full`}
              >
                <input type="file" name="" id="picture" className="hidden" />

                <FaPlus />
              </label> */}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%] border-b border-slate-500 py-2">
              <h3 className="flex items-center gap-x-1 text-xl text-slate-400 font-semibold">
                <FaUserEdit /> Profile info
              </h3>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-[80%]">
              <div className="w-full flex justify-between items-center text-blue-600 font-bold">
                <p className="text-sm">Name</p>
                <button
                  className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-full text-xl`}
                  onClick={() => setNameBtn(!nameBtn)}
                >
                  {nameBtn ? <FaCheck /> : <AiOutlineEdit className="" />}
                </button>
              </div>
              <div>
                {nameBtn ? (
                  <div className="w-full flex flex-col justify-between">
                    <div className="w-full flex justify-between">
                      <input
                        type="text"
                        defaultValue={'Jabed Ali'}
                        className={`w-[100%] outline-none ${darkMode ? 'bg-slate-800' : ' bg-gray-100'} p-2 rounded-md border-b-2 border-blue-700`}
                      />
                      <span className="p-2 text-xs text-blue-700 font-semibold">
                        30
                      </span>
                    </div>
                    <p className="text-sm text-blue-600">checking...</p>
                  </div>
                ) : (
                  <p
                    className={`text-base ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    Jabed Ali
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%]">
              <div className="w-full flex justify-between items-center text-blue-600 font-bold">
                <p className="text-sm">Username</p>
                <button
                  className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-full text-xl`}
                  onClick={() => setUserName(!usernameBtn)}
                >
                  {usernameBtn ? <FaCheck /> : <AiOutlineEdit className="" />}
                </button>
              </div>
              <div>
                {usernameBtn ? (
                  <div className="w-full flex flex-col justify-between">
                    <div className="w-full flex justify-between">
                      <input
                        type="text"
                        defaultValue={'jabedali'}
                        className={`w-[100%] outline-none ${darkMode ? 'bg-slate-800' : ' bg-gray-100'} p-2 rounded-md border-b-2 border-blue-700`}
                      />
                      <span className="p-2 text-xs text-blue-700 font-semibold">
                        30
                      </span>
                    </div>
                    <p className="text-sm text-blue-600">checking...</p>
                  </div>
                ) : (
                  <p
                    className={`text-base ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    @Jabed Ali
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%]">
              <div className="w-full flex justify-between items-center text-blue-600 font-bold">
                <p className="text-sm">Bio</p>
                <button
                  className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-full text-xl`}
                  onClick={() => setBioBtn(!bioBtn)}
                >
                  {bioBtn ? <FaCheck /> : <AiOutlineEdit className="" />}
                </button>
              </div>
              <div>
                {bioBtn ? (
                  <div className="w-full flex flex-col justify-between">
                    <div className="w-full flex justify-between">
                      <input
                        type="text"
                        defaultValue={'hey there I am using Chatit'}
                        className={`w-[100%] outline-none ${darkMode ? 'bg-slate-800' : ' bg-gray-100'} p-2 rounded-md border-b-2 border-blue-700`}
                      />
                      <span className="p-2 text-xs text-blue-700 font-semibold">
                        30
                      </span>
                    </div>
                    <p className="text-sm text-blue-600">checking...</p>
                  </div>
                ) : (
                  <p
                    className={`text-base ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    hey there I am using Chatit
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%] flex flex-col gap-y-2">
              <h3 className="text-sm text-blue-600 font-bold">Email</h3>
              <p>jabed@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%] border-b border-slate-500 py-2">
              <h3 className="flex items-center gap-x-1 text-xl text-slate-400 font-semibold">
                <IoMdSettings /> Settings
              </h3>
            </div>
          </div>

          <div className="w-full flex justify-center ">
            <div className="w-[80%]">
              <button
                className={`bg-blue-700  shadow-md  ${darkMode ? 'shadow-none hover:bg-blue-900' : 'shadow-gray-300 hover:bg-blue-800'} text-white px-3 py-2 rounded-md w-full `}
              >
                Change password
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center pb-5">
            <div className="w-[80%]">
              <button
                className={`bg-red-700  shadow-md  ${darkMode ? 'shadow-none hover:bg-red-900' : 'shadow-gray-300 hover:bg-red-800'} text-white px-3 py-2 rounded-md w-full `}
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
      {profileView && <ProfileView handleProfileView={handleProfileView} />}
    </>
  );
};

export default Profile;
