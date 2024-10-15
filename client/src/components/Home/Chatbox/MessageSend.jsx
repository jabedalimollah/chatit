import { IoMdSend } from 'react-icons/io';
import { useSelector } from 'react-redux';

const MessageSend = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  return (
    // <div className="h-[8vh] flex items-center w-full space-x-1 ">
    <div
      className={`h-[10vh] w-full flex justify-center items-center ${darkMode ? 'bg-slate-900' : 'bg-gray-200'}  `}
    >
      <form
        action=""
        className={`w-[90%] md:w-[80%] lg:w-[70%]  flex justify-between items-center ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full shadow`}
      >
        <div className="w-[90%] ml-4 mr-2 my-2 ">
          <input
            type="text"
            placeholder="Message"
            className={`outline-none py-1 px-2 rounded w-full bg-transparent`}
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
