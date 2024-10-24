import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectAi } from '../../../Redux/features/Ai/aiSlice';

const AIButton = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`flex space-x-4 px-3 py-3 ${darkMode ? 'bg-slate-900 hover:bg-slate-700' : ' bg-white hover:bg-slate-200'} rounded-md my-2`}
        onClick={() => dispatch(setSelectAi(true))}
      >
        <div className={`avatar `}>
          <div className="w-12 rounded-full">
            <img src={'./images/Jabed_Ali.jpg'} alt="profile" />
            {/* <img src="./images/profile.png" /> */}
            {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
          </div>
        </div>
        <div className="text-sm">
          <h1>Chatit Ai</h1>
          <span>Ask anything</span>
          {/* {message.length === 0 ? (
            <span>@{data?.username}</span>
          ) : (
            <span> {message[message.length - 1].message}</span>
          )} */}

          {/* <span>@{data?.username}</span> */}
        </div>
      </div>
    </>
  );
};

export default AIButton;
