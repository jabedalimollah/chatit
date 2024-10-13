import { useDispatch } from 'react-redux';
import { showSelectedUser } from '../../../Redux/features/selectedUser/selectedUserBtnSlice';

const SingleUser = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex space-x-4 px-3 py-3 hover:bg-slate-300 rounded-md`}
      onClick={() => dispatch(showSelectedUser(true))}
    >
      <div className={`avatar online`}>
        <div className="w-12 rounded-full">
          <img src="./images/profile.png" />
          {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
        </div>
      </div>
      <div className="text-sm">
        <h1>Jabed Ali Mollah</h1>
        {/* <h1>{data.fullname}</h1> */}
        {/* <span>{data.email}</span> */}
        <span>jabed@gmail.com</span>
      </div>
    </div>
  );
};

export default SingleUser;
