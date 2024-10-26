import { useState } from 'react';
import ChatUserProfile from './ChatUserProfile';
import { IoMdArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { showSelectedUser } from '../../../Redux/features/selectedUser/selectedUserBtnSlice';
import { useSocketContext } from '../../../context/SocketContext';
const ChatUser = () => {
  const [showChatUser, setShowChatUser] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedUser._id);
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
      <div
        // className={`h-[11vh] md:h-[9vh] lg:h-[11vh] w-full  flex items-center ${darkMode ? 'border-l-2 border-gray-700' : 'border-none'} `}
        className={`sh-[11vh] h-fit md:h-[9vh] lg:h-[11vh] w-full p-3 md:p-0 flex items-center ${darkMode ? 'bg-slate-950  border-l-0 md:border-l-2 border-gray-700' : 'border-none bg-white'} fixed top-0 z-10  md:static md:z-0 md:top-0 lg:static lg:z-0 lg:top-0`}
        // className={`h-[11vh] md:h-[9vh] lg:h-[11vh] w-full  flex items-center ${darkMode ? 'bg-slate-950 border-l-2 border-gray-700' : 'border-none bg-white'} fixed top-0 z-10  md:relative md:z-0 md:top-0 lg:relative lg:z-0 lg:top-0`}
      >
        {/* <div className="h-[8vh] w-full shadow-md shadow-gray-300"> */}
        <button
          className={`flex justify-center items-center md:hidden lg:hidden p-3 ${darkMode ? 'bg-blue-950' : 'bg-gray-200'} rounded-full ml-2 text-xl `}
          onClick={handleProfileBackBtn}
          // onClick={() => dispatch(showSelectedUser(false))}
        >
          <IoMdArrowBack />
        </button>
        <div
          className={`w-[100%] md:w-[60%] lg:w-[30%] h-[80%] mx-3 flex justify-centers px-3 py-2 items-center space-x-3 border ${darkMode ? 'bg-slate-900 hover:bg-slate-800  border-gray-700' : 'bg-gray-100 hover:bg-gray-200  border-gray-300'} rounded-md `}
          onClick={() => setShowChatUser(!showChatUser)}
          // onClick={() => setShowChatUser(true)}
        >
          {/* <div className="h-[8vh] flex justify-centers px-3 py-2 items-center space-x-3 bg-blue-100 "> */}

          <div className={`avatar ${isOnline && 'online'}`}>
            <div className="w-12 rounded-full">
              <img
                src={selectedUser?.profilePic || './images/default_profile.png'}
                alt="profile"
              />
            </div>
          </div>
          <div>
            <h1 className="text-base">{selectedUser.name}</h1>

            <span
              className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {/* {onlineUsers.includes(selectedUser?._id) ? "online" : "offline"} */}

              {isOnline ? 'Online' : 'Offline'}
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
