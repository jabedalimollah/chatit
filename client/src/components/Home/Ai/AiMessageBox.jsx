import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowBack } from 'react-icons/io';
import { IoMdSend } from 'react-icons/io';
import {
  setAiData,
  setAiPreviousValue,
  setSelectAi,
} from '../../../Redux/features/Ai/aiSlice';
import { GetAiResult } from '../../../utils/aiApiCall';
import toast, { Toaster } from 'react-hot-toast';

// =============== For bold format ==============
const BoldText = ({ text }) => {
  // Replace **text** with <strong>text</strong>
  const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  return <p dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

const AiMessageBox = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const showSelectedUserBtn = useSelector(
    (state) => state.showSelectedBtn.value
  );
  const messages = useSelector((state) => state.ai.aiData);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const authUser = useSelector((state) => state.user.authUser);
  const selectAi = useSelector((state) => state.ai.selectAi);
  const dispatch = useDispatch();
  const scroll = useRef();

  const handleProfileBackBtn = () => {
    // dispatch(showSelectedUser(false));
    dispatch(setSelectAi(false));
    // setShowChatUser(false);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    dispatch(
      setAiData([...messages, { name: authUser?.name, message: message }])
    );

    setLoading(true);

    const res = await GetAiResult(message);

    setMessage('');
    setLoading(false);
    if (res.status === 'error') {
      toast.error(res.data, {
        position: 'top-center',
      });
    } else {
      dispatch(
        setAiPreviousValue({ name: 'chatit ai', message: res?.data.data })
      );
    }
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <>
      <div
        className={`w-[100%] h-screen ${darkMode ? 'bg-slate-900' : 'bg-slate-100'} ${selectAi ? 'inline-block' : 'hidden'} md:inline-block  md:w-[60%] lg:w-[76%]`}
      >
        <div
          className={`sh-[11vh] h-fit md:h-[9vh] lg:h-[11vh] w-full p-3 md:p-0 flex items-center ${darkMode ? 'bg-slate-950 border-l-2 border-gray-700' : 'border-none bg-white'} fixed top-0 z-10  md:static md:z-0 md:top-0 lg:static lg:z-0 lg:top-0`}
        >
          <button
            className={`flex justify-center items-center md:hidden lg:hidden p-3 ${darkMode ? 'bg-blue-950' : 'bg-gray-200'} rounded-full ml-2 text-xl `}
            onClick={handleProfileBackBtn}
          >
            <IoMdArrowBack />
          </button>
          <div
            className={`w-[100%] md:w-[60%] lg:w-[30%] h-[80%] mx-3 flex justify-centers px-3 py-2 items-center space-x-3 border ${darkMode ? 'bg-slate-900 hover:bg-slate-800  border-gray-700' : 'bg-gray-100 hover:bg-gray-200  border-gray-300'} rounded-md `}
          >
            <div className={`avatar`}>
              <div className="w-12 rounded-full">
                <img
                  src={
                    darkMode ? './images/ai_dark.jpg' : './images/ai_light.jpg'
                  }
                  alt="profile"
                />
              </div>
            </div>
            <div>
              <h1 className="text-base">Chatit AI</h1>

              <span
                className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Ask anything
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto hide_scrollbar max-h-[79vh] md:max-h-[81vh] lg:max-h-[79vh] mt-20 md:mt-0 lg:mt-0">
          <div
            className={`pt-3 ${darkMode ? 'bg-slate-900' : 'bg-gray-200'}  `}
            style={{ minHeight: 'calc(89vh - 10vh)' }}
            // style={{ minHeight: 'calc(91vh - 10vh)' }}
          >
            {messages.length <= 0 ? (
              <div className="w-full h-[70vh] flex flex-col items-center justify-center">
                <p className="text-4xl md:text-xl lg:text-4xl">Chatit AI</p>
                <span>Ask anything</span>
                <div className="h-[50%]">
                  <img
                    src="./images/chatit.png"
                    alt="logo"
                    className="h-[20%] opacity-25"
                  />
                </div>
              </div>
            ) : (
              messages.map((item, index) => (
                <div ref={scroll} key={index}>
                  <div
                    className={`chat ${!(item?.name === 'chatit ai') ? 'chat-end' : 'chat-start'}`}
                  >
                    <div
                      className={`chat-bubble ${!(item?.name === 'chatit ai') ? 'bg-blue-500 text-white' : darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-md `}
                    >
                      {/* {item?.message} */}
                      <BoldText text={item?.message} />
                    </div>
                    <div className="chat-footer"></div>
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className={`chat chat-start`}>
                <div
                  className={`chat-bubble  ${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-md `}
                >
                  <span className="loading loading-dots loading-md"></span>
                </div>
                <div className="chat-footer"></div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full fixed bottom-0 md:static md:bottom-0 lg:static lg:z-0 ">
          <div
            className={`h-[10vh] w-full flex justify-center items-center ${darkMode ? 'bg-slate-900' : 'bg-gray-200'}  `}
          >
            <form
              action=""
              className={`w-[90%] md:w-[80%] lg:w-[70%]  flex justify-between items-center ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full shadow`}
            >
              <div className="w-[90%] ml-0 mr-2 my-2 ">
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className={`outline-none py-1 px-5 rounded w-full bg-transparent`}
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
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AiMessageBox;
