import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { SendMessages } from '../../../utils/messageApiCall';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
// import { toast, Toaster } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import { sendMessages } from '../../../Redux/features/message/messageSlice';

const MessageSend = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);
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
        {isPickerVisible && (
          <div className="absolute bottom-20 md:bottom-32 lg:bottom-20 ">
            <Picker
              data={data}
              previewPosition="none"
              onEmojiSelect={(e) => {
                // setCurrentEmoji(e.native);
                setMessage(message + e.native);
              }}
            />
          </div>
        )}
        <form
          action=""
          className={`w-[90%] md:w-[80%] lg:w-[70%]  flex justify-between items-center ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full shadow`}
        >
          <button
            className={`${darkMode ? 'bg-slate-700 hover:bg-slate-900 text-white' : 'bg-slate-100 hover:bg-slate-300'} rounded-full  p-2 mx-1`}
            onClick={() => setPickerVisible(!isPickerVisible)}
            type="button"
          >
            {' '}
            <MdOutlineEmojiEmotions className="text-2xl" />
          </button>

          <div className="w-[90%] ml-0 mr-2 my-2 ">
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
