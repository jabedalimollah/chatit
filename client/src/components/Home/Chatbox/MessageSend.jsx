import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { SendMessages } from '../../../utils/messageApiCall';
// import { toast, Toaster } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import { sendMessages } from '../../../Redux/features/message/messageSlice';

const MessageSend = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.length > 0) {
      setLoading(true);
      const res = await SendMessages(message, selectedUser?._id);
      setLoading(false);

      if (res.status == 'error') {
        toast.error(res.data, {
          position: 'top-center',
        });
      } else {
        // toast.success('message sent successfully', {
        //   position: 'top-center',
        // });
        setMessage('');
        dispatch(sendMessages(res.data.data));
      }
    }
  };

  return (
    // <div className="h-[8vh] flex items-center w-full space-x-1 ">
    <>
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
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className={`outline-none py-1 px-2 rounded w-full bg-transparent`}
            />
          </div>
          {loading ? (
            <span className="flex items-center justify-center bg-blue-600 text-white rounded-full p-2 mx-1">
              <span className="loading loading-spinner"></span>
            </span>
          ) : (
            <button
              className="bg-blue-600 hover:bg-blue-800 rounded-full text-white p-2 mx-1"
              onClick={handleSendMessage}
            >
              <IoMdSend className="text-2xl" />
            </button>
          )}
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default MessageSend;
