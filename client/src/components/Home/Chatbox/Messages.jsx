import { useDispatch, useSelector } from 'react-redux';
import MessageLoader from '../../Loader/MessageLoader';
import SingleMessage from './SingleMessage';
import { useEffect, useState } from 'react';
import { GetSelectedUserMessages } from '../../../utils/messageApiCall';
import { toast, ToastContainer } from 'react-toastify';
import { setMessage } from '../../../Redux/features/message/messageSlice';

const Messages = () => {
  const [loading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const messages = useSelector((state) => state.message.messages);
  const loadingMessages = useSelector((state) => state.message.loadingMessages);
  const dispatch = useDispatch();

  return (
    <>
      {/* <div className="" style={{ minHeight: "calc(91vh - 8vh)" }}> */}
      <div
        className={`pt-3 ${darkMode ? 'bg-slate-900' : 'bg-gray-200'}  `}
        style={{ minHeight: 'calc(89vh - 10vh)' }}
        // style={{ minHeight: 'calc(91vh - 10vh)' }}
      >
        {loadingMessages ? (
          <>
            <MessageLoader />
          </>
        ) : (
          <>
            {messages.length <= 0 ? (
              <div className="w-full h-60  flex items-center justify-center">
                <p className="text-base md:text-xl lg:text-2xl">
                  Say! Hi to start the conversation
                </p>
              </div>
            ) : (
              messages.map((item, index) => (
                <SingleMessage key={index} data={item} />
              ))
            )}
            {/* <SingleMessage /> */}
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Messages;
