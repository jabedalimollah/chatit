import React, { useEffect, useState } from 'react';
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
// import ProfileView from './ProfileView';
import { UpdateUserData } from '../../../utils/userApiCall';
// import { ToastContainer, toast } from 'react-toastify';
import { setAuthUser } from '../../../Redux/features/user/userSlice';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
const Profile = () => {
  const [nameBtn, setNameBtn] = useState(false);
  const [usernameBtn, setUserName] = useState(false);
  const [bioBtn, setBioBtn] = useState(false);
  // const [profileView, setProfileView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    username: '',
    about: '',
  });
  const [warning, setWarning] = useState({
    name: '',
    username: '',
    about: '',
  });
  const darkMode = useSelector((state) => state.darkTheme.value);
  const authUser = useSelector((state) => state.user.authUser);
  const dispatch = useDispatch();
  // const handleProfileView = (data) => {
  //   setProfileView(data);
  // };
  const handleInputChange = (e) => {
    // ------------- Edit Name ---------
    if (e.target.name === 'name') {
      if (!(e.target.value.length >= 2 && e.target.value.length <= 20)) {
        setWarning({
          ...warning,
          name: 'name must be min 2 & max 20 characters',
        });
      } else {
        setWarning({ ...warning, name: '' });
      }
      setData({ ...data, [e.target.name]: e.target.value });
    }
    // ------------- Edit Username ---------
    if (e.target.name === 'username') {
      if (!(e.target.value.length >= 2 && e.target.value.length <= 20)) {
        setWarning({
          ...warning,
          username: 'username must be min 2 & max 20 characters',
        });
      } else {
        setWarning({ ...warning, username: '' });
      }
      setData({ ...data, [e.target.name]: e.target.value });
    }
    // ------------- Edit About ---------
    if (e.target.name === 'about') {
      if (!(e.target.value.length <= 100)) {
        setWarning({
          ...warning,
          about: 'about must be max 100 characters',
        });
      } else {
        setWarning({ ...warning, about: '' });
        setData({ ...data, [e.target.name]: e.target.value });
      }
    }
  };

  // ------------- Update Name --------
  const handleNameEditBtn = async () => {
    setNameBtn(!nameBtn);
    if (!(authUser.name === data.name)) {
      setLoading(true);
      const res = await UpdateUserData({ name: data.name });
      setLoading(false);
      if (res.status == 'error') {
        toast.error(res.data, {
          position: 'top-center',
        });
        setData({ ...data, name: authUser?.name });
      } else {
        toast.success('Name update successfully', {
          position: 'top-center',
        });
        dispatch(setAuthUser(res?.data.data));
      }
    }
  };
  // ------------- Update Username --------
  const handleUsernameEditBtn = async () => {
    setUserName(!usernameBtn);
    if (!(authUser.username === data.username)) {
      setLoading(true);
      const res = await UpdateUserData({ username: data.username });
      setLoading(false);
      if (res.status == 'error') {
        toast.error(res.data, {
          position: 'top-center',
        });
        setData({ ...data, username: authUser?.username });
      } else {
        toast.success('Username update successfully', {
          position: 'top-center',
        });
        dispatch(setAuthUser(res?.data.data));
      }
    }
  };
  // ------------- Update About --------
  const handleAboutEditBtn = async () => {
    setBioBtn(!bioBtn);
    if (!(authUser.about === data.about)) {
      setLoading(true);
      const res = await UpdateUserData({ about: data.about });
      setLoading(false);
      if (res.status == 'error') {
        toast.error(res.data, {
          position: 'top-center',
        });
        setData({ ...data, about: authUser?.about });
      } else {
        toast.success('About update successfully', {
          position: 'top-center',
        });
        dispatch(setAuthUser(res?.data.data));
      }
    }
  };
  useEffect(() => {
    setData({
      name: authUser?.name,
      username: authUser?.username,
      about: authUser?.about,
    });
  }, []);
  return (
    <>
      {loading && (
        <div className="w-full flex justify-center items-center  fixed top-5 z-40">
          <span className="flex justify-center items-center gap-x-2  bg-slate-100 text-blue-700 shadow-md px-3 py-2 rounded-md">
            <span className="loading loading-spinner"></span>
            Loading...
          </span>
        </div>
      )}
      <div
        className={`w-full absolute h-dvh z-50 top-0 left-0 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
      >
        <div
          className={`w-full h-[8vh] ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} flex items-center px-5 gap-x-5 text-lg font-bold`}
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
          <ProfilePicture authUser={authUser} />
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
                  onClick={handleNameEditBtn}
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
                        // defaultValue={'Jabed Ali'}
                        value={data.name}
                        name="name"
                        onChange={handleInputChange}
                        className={`w-[100%] outline-none ${darkMode ? 'bg-slate-800' : ' bg-gray-100'} p-2 rounded-md border-b-2 border-blue-700`}
                      />
                      <span className="p-2 text-xs text-blue-700 font-semibold">
                        {/* 30 */}
                        {20 >= data.name.length ? 20 - data.name.length : 0}
                      </span>
                    </div>
                    {warning.name && (
                      <p className="text-sm text-blue-600">{warning.name}</p>
                    )}
                  </div>
                ) : (
                  <p
                    className={`text-base ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    {authUser?.name}
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
                  onClick={handleUsernameEditBtn}
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
                        // defaultValue={'jabedali'}
                        name="username"
                        value={data.username}
                        onChange={handleInputChange}
                        className={`w-[100%] outline-none ${darkMode ? 'bg-slate-800' : ' bg-gray-100'} p-2 rounded-md border-b-2 border-blue-700`}
                      />
                      <span className="p-2 text-xs text-blue-700 font-semibold">
                        {/* 30 */}
                        {20 >= data.username.length
                          ? 20 - data.username.length
                          : 0}
                      </span>
                    </div>
                    {warning.username && (
                      <p className="text-sm text-blue-600">
                        {warning.username}
                      </p>
                    )}
                  </div>
                ) : (
                  <p
                    className={`text-base ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    @{authUser?.username}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%]">
              <div className="w-full flex justify-between items-center text-blue-600 font-bold">
                <p className="text-sm">About</p>
                <button
                  className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-full text-xl`}
                  onClick={handleAboutEditBtn}
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
                        // defaultValue={'hey there I am using Chatit'}
                        name="about"
                        value={data.about}
                        onChange={handleInputChange}
                        className={`w-[100%] outline-none ${darkMode ? 'bg-slate-800' : ' bg-gray-100'} p-2 rounded-md border-b-2 border-blue-700`}
                      />
                      <span className="p-2 text-xs text-blue-700 font-semibold">
                        {/* 30 */}
                        {100 >= data.about.length ? 100 - data.about.length : 0}
                      </span>
                    </div>
                    {warning.about && (
                      <p className="text-sm text-blue-600">{warning.about}</p>
                    )}
                  </div>
                ) : (
                  <p
                    className={`text-base ${darkMode ? 'text-white' : 'text-black'}`}
                  >
                    {/* hey there I am using Chatit */}
                    {authUser?.about}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80%] flex flex-col gap-y-2">
              <h3 className="text-sm text-blue-600 font-bold">Email</h3>
              <p>{authUser?.email}</p>
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
            <div className="w-[80%] flex">
              <NavLink
                to={'/change_password'}
                className={`w-full bg-blue-700  shadow-md  ${darkMode ? 'shadow-none hover:bg-blue-900' : 'shadow-gray-300 hover:bg-blue-800'} text-white px-3 py-2 text-center  rounded-md w-full `}
              >
                Change password
              </NavLink>
            </div>
          </div>
          <div className="w-full flex justify-center pb-5">
            <div className="w-[80%] flex">
              <NavLink
                to={'/delete_account'}
                className={`bg-red-700  shadow-md  ${darkMode ? 'shadow-none hover:bg-red-900' : 'shadow-gray-300 hover:bg-red-800'} text-white px-3 py-2 text-center rounded-md w-full `}
              >
                Delete account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* {profileView && <ProfileView handleProfileView={handleProfileView} />} */}
      {/* <ToastContainer /> */}

      <Toaster />
    </>
  );
};

export default Profile;
