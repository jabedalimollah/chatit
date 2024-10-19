import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Home/Sidebar/Sidebar';
import Chatbox from '../components/Home/Chatbox/Chatbox';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserData } from '../utils/userApiCall';
import { setAuthUser } from '../Redux/features/user/userSlice';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const dispatch = useDispatch();
  const userApiCall = async () => {
    setLoading(true);
    const res = await GetUserData();
    setLoading(false);
    if (res.status == 'error') {
      toast.error(res.data);
    } else {
      dispatch(setAuthUser(res.data.data));
    }
  };

  useEffect(() => {
    userApiCall();
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-gray-200 flex justify-center items-start pt-10  ">
          <span className="flex justify-center items-center gap-x-2  bg-white text-blue-700 shadow-md px-3 py-2 rounded-md">
            <span className="loading loading-spinner"></span>
            Loading...
          </span>
        </div>
      ) : (
        <div
          className={`h-screen flex ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-black'}`}
          data-theme={darkMode ? 'dark' : 'light'}
        >
          <Sidebar />
          <Chatbox />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Home;
