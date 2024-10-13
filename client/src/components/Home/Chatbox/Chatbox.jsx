import React from 'react';
import ChatUser from './ChatUser';
import Messages from './Messages';
import MessageSend from './MessageSend';
import { useSelector } from 'react-redux';

const Chatbox = () => {
  const showSelectedUserBtn = useSelector(
    (state) => state.showSelectedBtn.value
  );

  return (
    <>
      <div
        className={`w-[100%] ${showSelectedUserBtn ? 'inline-block' : 'hidden'} md:inline-block  md:w-[60%] lg:w-[76%]`}
      >
        <ChatUser />

        <div
          className="overflow-y-auto hide_scrollbar max-h-[79vh] md:max-h-[81vh] lg:max-h-[79vh]"
          // style={{ maxHeight: 'calc(89vh - 10vh)' }}
        >
          <Messages />
        </div>

        <MessageSend />
      </div>
    </>
  );
};

export default Chatbox;
