import { IoMdSend } from "react-icons/io";

const MessageSend = () => {
  return (
    // <div className="h-[8vh] flex items-center w-full space-x-1 ">
    <div className="h-[10vh] w-full flex justify-center items-center  bg-gray-200 ">
      <form
        action=""
        className="w-[70%]  flex justify-between items-center bg-white rounded-full shadow"
      >
        <div className="w-[90%] ml-4 mr-2 my-2 ">
          <input
            type="text"
            placeholder="Message"
            className="outline-none py-1 px-2 rounded w-full "
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 rounded-full text-white p-2 mx-1">
          <IoMdSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default MessageSend;
