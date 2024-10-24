import React from 'react';
import Search from './Search';
import AllUsers from './AllUsers';
import ProfileHeader from './ProfileHeader';
import { useSelector } from 'react-redux';
// import Logout from "./Logout";

const Sidebar = () => {
  const showSelectedUserBtn = useSelector(
    (state) => state.showSelectedBtn.value
  );
  const selectAi = useSelector((state) => state.ai.selectAi);
  const darkMode = useSelector((state) => state.darkTheme.value);
  return (
    <>
      <div
        className={`w-[100%] ${selectAi ? 'hidden' : showSelectedUserBtn ? 'hidden' : 'inline-block'}   md:inline-block md:w-[40%] lg:w-[24%] ${darkMode ? 'shadow-none ' : 'shadow-2xl  shadow-gray-300'} `}
      >
        {/* <h1 className=" px-3 pt-2">Chatit</h1> */}
        <ProfileHeader />
        <Search />
        <div
          className="overflow-y-auto hide_scrollbar "
          style={{ minHeight: '77vh' }}
          // style={{ minHeight: "calc(85vh - 8vh)" }}
        >
          <AllUsers />
        </div>

        {/* <Logout /> */}
      </div>
    </>
  );
};

export default Sidebar;
