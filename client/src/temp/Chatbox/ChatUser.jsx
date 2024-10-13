const ChatUser = () => {
  return (
    <>
      <div className="h-[11vh] w-full  flex items-center">
        {/* <div className="h-[8vh] w-full shadow-md shadow-gray-300"> */}
        <div className="w-[30%] h-[80%] mx-3 flex justify-centers px-3 py-2 items-center space-x-3 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300">
          {/* <div className="h-[8vh] flex justify-centers px-3 py-2 items-center space-x-3 bg-blue-100 "> */}

          <div className={`avatar online`}>
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
      </div>
    </>
  );
};

export default ChatUser;
