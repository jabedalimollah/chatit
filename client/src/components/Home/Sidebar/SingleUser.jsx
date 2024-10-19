import { useDispatch, useSelector } from 'react-redux';
import { showSelectedUser } from '../../../Redux/features/selectedUser/selectedUserBtnSlice';
import { setSelectedUsers } from '../../../Redux/features/user/userSlice';
// import { toast, ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import { GetSelectedUserMessages } from '../../../utils/messageApiCall';
import {
  setLoadingMessages,
  setMessage,
} from '../../../Redux/features/message/messageSlice';

const SingleUser = ({ data }) => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  const dispatch = useDispatch();
  const handleSelectedUser = async () => {
    dispatch(showSelectedUser(true));
    dispatch(setSelectedUsers(data));
    await getUserMessage();
  };
  const getUserMessage = async () => {
    // setLoading(true);
    // const res = await GetSelectedUserMessages('6708a08103f2615b13f08904');
    dispatch(setLoadingMessages(true));
    const res = await GetSelectedUserMessages(data?._id);
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

  return (
    <>
      <div
        className={`flex space-x-4 px-3 py-3 ${darkMode ? 'bg-slate-900 hover:bg-slate-700' : ' bg-white hover:bg-slate-200'} rounded-md my-2`}
        onClick={handleSelectedUser}
      >
        <div className={`avatar online`}>
          <div className="w-12 rounded-full">
            <img
              src={data?.profilePic || './images/default_profile.png'}
              alt="profile"
            />
            {/* <img src="./images/profile.png" /> */}
            {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
          </div>
        </div>
        <div className="text-sm">
          <h1>{data?.name}</h1>
          <span>@{data?.username}</span>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SingleUser;
