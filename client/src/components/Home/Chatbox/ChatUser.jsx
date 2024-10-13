import { useState } from 'react';
import ChatUserProfile from './ChatUserProfile';
import { IoMdArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { showSelectedUser } from '../../../Redux/features/selectedUser/selectedUserBtnSlice';
const ChatUser = () => {
  const [showChatUser, setShowChatUser] = useState(false);
  const dispatch = useDispatch();
  const handleHideChatUser = (data) => {
    setShowChatUser(data);
  };
  const handleProfileBackBtn = () => {
    dispatch(showSelectedUser(false));
    setShowChatUser(false);
  };
  return (
    <>
      <div className="h-[11vh] md:h-[9vh] lg:h-[11vh] w-full  flex items-center">
        {/* <div className="h-[8vh] w-full shadow-md shadow-gray-300"> */}
        <button
          className="flex justify-center items-center md:hidden lg:hidden p-3 bg-gray-200 rounded-full ml-2 text-xl "
          onClick={handleProfileBackBtn}
          // onClick={() => dispatch(showSelectedUser(false))}
        >
          <IoMdArrowBack />
        </button>
        <div
          className="w-[100%] md:w-[60%] lg:w-[30%] h-[80%] mx-3 flex justify-centers px-3 py-2 items-center space-x-3 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300"
          onClick={() => setShowChatUser(!showChatUser)}
          // onClick={() => setShowChatUser(true)}
        >
          {/* <div className="h-[8vh] flex justify-centers px-3 py-2 items-center space-x-3 bg-blue-100 "> */}

          <div className={`avatar online`}>
            <div className="w-12 rounded-full">
              {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
              <img src="./images/profile.png" />
            </div>
          </div>
          <div>
            <h1 className="text-base">Jabed Ali Mollah</h1>
            {/* <h1 className="text-base">{selectedUser?.fullname}</h1> */}
            <span className="text-sm text-gray-600">
              {/* {onlineUsers.includes(selectedUser?._id) ? "online" : "offline"} */}
              Offline
            </span>
          </div>
        </div>
        {showChatUser && (
          <ChatUserProfile handleHideChatUser={handleHideChatUser} />
        )}
      </div>
    </>
  );
};

export default ChatUser;
