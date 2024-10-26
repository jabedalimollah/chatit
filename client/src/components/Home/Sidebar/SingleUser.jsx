import { useDispatch, useSelector } from 'react-redux';
import { showSelectedUser } from '../../../Redux/features/selectedUser/selectedUserBtnSlice';
import { setSelectedUsers } from '../../../Redux/features/user/userSlice';
import { useSocketContext } from '../../../context/SocketContext';
// import { toast, ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import { GetSelectedUserMessages } from '../../../utils/messageApiCall';
import {
  setLoadingMessages,
  setMessage,
} from '../../../Redux/features/message/messageSlice';
import { useEffect, useState } from 'react';
import { setSelectAi } from '../../../Redux/features/Ai/aiSlice';
// import { useGetSocketMessage } from '../../../context/useGetSocketMessage';

const SingleUser = ({ data }) => {
  const [message, setMessage] = useState([]);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(data._id);
  const dispatch = useDispatch();
  // useGetSocketMessage();
  const handleSelectedUser = async () => {
    dispatch(showSelectedUser(true));
    dispatch(setSelectedUsers(data));
    dispatch(setSelectAi(false));
    // await getUserMessage();
  };
  const getUserMessage = async () => {
    // setLoading(true);
    // const res = await GetSelectedUserMessages('6708a08103f2615b13f08904');

    dispatch(setLoadingMessages(true));
    const res = await GetSelectedUserMessages(data?._id);
    // console.log(res.data.data);
    // setLoading(false)
    dispatch(setLoadingMessages(false));
    if (res.status == 'error') {
      toast.error(res.data, {
        position: 'top-center',
      });
    } else {
      setMessage(res.data.data);
      // dispatch(setMessage(res.data.data));
    }
  };
  useEffect(() => {
    getUserMessage();
  }, []);
  return (
    <>
      <div
        className={`flex space-x-4 px-3 py-3 ${darkMode ? (selectedUser?._id == data?._id ? 'bg-slate-700' : 'bg-slate-900 hover:bg-slate-700') : selectedUser?._id == data?._id ? 'bg-slate-200' : ' bg-white hover:bg-slate-200'} rounded-md my-2`}
        onClick={handleSelectedUser}
      >
        <div className={`avatar ${isOnline && 'online'}`}>
          <div className="w-12 rounded-full">
            <img
              src={data?.profilePic || './images/default_profile.png'}
              alt="profile"
            />
          </div>
        </div>
        <div className="text-sm w-full truncate">
          <h1>{data?.name}</h1>

          {message.length === 0 ? (
            <span>@{data?.username}</span>
          ) : (
            <span> {message[message.length - 1].message}</span>
          )}

          {/* <span>@{data?.username}</span> */}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SingleUser;
