import React from 'react';
import ChatUser from './ChatUser';
import Messages from './Messages';
import MessageSend from './MessageSend';
import { useSelector } from 'react-redux';

const Chatbox = () => {
  const showSelectedUserBtn = useSelector(
    (state) => state.showSelectedBtn.value
  );
  const darkMode = useSelector((state) => state.darkTheme.value);

  return (
    <>
      <div
        className={`w-[100%] h-screen ${darkMode ? 'bg-slate-900' : 'bg-slate-100'} ${showSelectedUserBtn ? 'inline-block' : 'hidden'} md:inline-block  md:w-[60%] lg:w-[76%]`}
      >
        {/* <div className="w-full fixed top-0 z-10 md:relative md:z-0 md:top-0 lg:rel lg:ative lg:z-0 "> */}
        <ChatUser />
        {/* </div> */}

        <div
          // className="overflow-y-auto  max-h-[79vh] md:max-h-[81vh] lg:max-h-[79vh]"
          className="overflow-y-auto hide_scrollbar max-h-[79vh] md:max-h-[81vh] lg:max-h-[79vh] mt-20 md:mt-0 lg:mt-0"
          // className="overflow-y-auto hide_scrollbar max-h-[79vh] md:max-h-[81vh] lg:max-h-[79vh] mt-20 md:mt-0 lg:mt-0 "
          // style={{ maxHeight: 'calc(89vh - 10vh)' }}
        >
          <Messages />
        </div>
        {/* <div className="w-full  "> */}
        <div className="w-full fixed bottom-0 md:static md:bottom-0 lg:static lg:z-0 ">
          <MessageSend />
        </div>
      </div>
    </>
  );
};

export default Chatbox;
