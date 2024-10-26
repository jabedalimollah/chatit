import { useDispatch, useSelector } from 'react-redux';
import MessageLoader from '../../Loader/MessageLoader';
import SingleMessage from './SingleMessage';
import { useEffect, useState } from 'react';
import { GetSelectedUserMessages } from '../../../utils/messageApiCall';
import toast, { Toaster } from 'react-hot-toast';
import {
  setLoadingMessages,
  setMessage,
} from '../../../Redux/features/message/messageSlice';
import { useGetSocketMessage } from '../../../context/useGetSocketMessage';
// import useGetSocketMessage from '../../../context/useGetSocketMessage';
const Messages = () => {
  const [loading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const messages = useSelector((state) => state.message.messages);
  const loadingMessages = useSelector((state) => state.message.loadingMessages);
  const dispatch = useDispatch();
  useGetSocketMessage();

  const getUserMessage = async () => {
    // setLoading(true);

    dispatch(setLoadingMessages(true));
    const res = await GetSelectedUserMessages(selectedUser?._id);
    // setLoading(false)
    dispatch(setLoadingMessages(false));
    if (res.status == 'error') {
      toast.error(res.data, {
        position: 'top-center',
      });
    } else {
      dispatch(setMessage(res.data.data));
    }
  };
  useEffect(() => {
    getUserMessage();
  }, [selectedUser]);
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
              messages.map((item, index) =>
                selectedUser?._id === item?.senderId ||
                selectedUser?._id === item?.receiverId ? (
                  <SingleMessage key={index} data={item} />
                ) : null
              )
            )}
            {/* <SingleMessage /> */}
          </>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default Messages;
