import { useSelector } from 'react-redux';
import AllUserLoader from '../../Loader/AllUserLoader';
import SingleUser from './SingleUser';

const AllUsers = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  return (
    <>
      {/* <div className=""> */}
      <h1
        className={`px-4 py-2 text-lg bold border-ts border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} `}
      >
        Chats
      </h1>
      <div
        className={` overflow-y-auto hide_scrollbar px-3 max-h-[74vh] md:max-h-[78vh] lg:max-h-[74vh] ${false ? '' : darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
        // style={{ maxHeight: 'calc(84vh - 10vh)' }}
      >
        {/* ===================== Loading Component ============== */}
        {false ? (
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
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
          </>
        )}

        {/* <SingleUser /> */}
        {/* <SingleUser />
       
        <SingleUser /> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default AllUsers;
