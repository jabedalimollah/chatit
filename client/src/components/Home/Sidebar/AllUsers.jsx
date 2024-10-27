import { useDispatch, useSelector } from 'react-redux';
import AllUserLoader from '../../Loader/AllUserLoader';
import SingleUser from './SingleUser';
import { useEffect, useState } from 'react';
import { GetAllUserData } from '../../../utils/userApiCall';
import { setOtherUsers } from '../../../Redux/features/user/userSlice';
import AIButton from '../Ai/AIButton';

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const otherUsers = useSelector((state) => state.user.otherUsers);
  const dispatch = useDispatch();
  const getAllUser = async () => {
    setLoading(true);
    const res = await GetAllUserData();
    setLoading(false);
    if (res?.status == 'error') {
      dispatch(setOtherUsers([]));
    } else {
      dispatch(setOtherUsers(res?.data.data));
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      {/* <div className=""> */}
      <h1
        className={`px-4 py-2 text-lg bold border-ts border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} `}
      >
        Chats
      </h1>

      <div
        className={` overflow-y-auto hide_scrollbar px-3 max-h-[73vh] md:max-h-[78vh] lg:max-h-[72vh] ${false ? '' : darkMode ? 'bg-slate-950' : 'bg-slate-100'}`}
        // className={` overflow-y-auto hide_scrollbar px-3 max-h-[74vh] md:max-h-[78vh] lg:max-h-[74vh] ${false ? '' : darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
        // style={{ maxHeight: 'calc(84vh - 10vh)' }}
      >
        {/* ===================== Loading Component ============== */}
        {loading ? (
          <>
            <AllUserLoader />
            <AllUserLoader />
            <AllUserLoader />
            <AllUserLoader />
            <AllUserLoader />
            <div className="hidden md:block lg:hidden">
              <AllUserLoader />
              <AllUserLoader />
              <AllUserLoader />
            </div>
          </>
        ) : (
          <>
            {/* <SingleUser /> */}
            <AIButton />
            {otherUsers?.map((item, index) => (
              <SingleUser data={item} key={index} />
            ))}
          </>
        )}

        {/* </div> */}
      </div>
      {/* </div> */}
      {otherUsers.length == 0 && (
        <div className="w-full h-36 flex justify-center items-center ">
          <p>No user found</p>
        </div>
      )}
    </>
  );
};

export default AllUsers;
