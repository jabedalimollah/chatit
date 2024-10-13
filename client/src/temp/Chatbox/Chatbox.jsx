import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import MessageSend from "./MessageSend";

const Chatbox = () => {
  return (
    <>
      <div className="w-[76%] ">
        <ChatUser />
        <div
          className="overflow-y-auto hide_scrollbar "
          // style={{ maxHeight: "calc(91vh - 8vh)" }}
          // style={{ maxHeight: "calc(91vh - 10vh)" }}
          style={{ maxHeight: "calc(89vh - 10vh)" }}
        >
          <Messages />
        </div>

        <MessageSend />
      </div>
    </>
  );
};

export default Chatbox;
