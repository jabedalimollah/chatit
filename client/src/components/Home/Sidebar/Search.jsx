import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { IoCloseSharp } from 'react-icons/io5';
import { setOtherUsers } from '../../../Redux/features/user/userSlice';
const Search = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const otherUsers = useSelector((state) => state.user.otherUsers);
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    // console.log(otherUsers);
    let newData = [];
    newData = data.filter((item) => {
      return (
        !(
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1
        ) ||
        !(item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1)
      );
    });
    dispatch(setOtherUsers(newData));
    if (!e.target.value.length) {
      dispatch(setOtherUsers(data));
    }
    // console.log(e.target.value);
  };
  const handleCancelSearchBtn = () => {
    setSearch('');
    dispatch(setOtherUsers(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    // console.log(allUsers);
  };
  useEffect(() => {
    setData(otherUsers);
  }, []);
  return (
    <>
      <div className="w-full sh-[6vh] h-fit md:h-[4vh] lg:h-[6vh] flex justify-center">
        {/* <h1 className="py-2 font-bold text-blue-600">Chatit</h1> */}
        {/* <form action="" className="mb-2" onSubmit={handleSubmit}> */}

        {/* ============================ Bottom Line Search Bar ============================= */}
        {/* <label
          className={`w-[95%] border-b-2 bg-transparent ${darkMode ? ' border-gray-600' : ' border-gray-300'}   px-1 flex  items-center font-semibold  `}
        > */}
        {/* ========================= Rounded Search Bar ======================= */}
        {/* <label
          className={`w-[95%] border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-gray-200 border-gray-300'}  rounded-full px-1 flex items-center font-semibold  `}
        > */}
        {/* ========================= Rounded Search Bar ======================= */}
        <label
          className={`w-[95%] border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300'}  rounded-full px-1 flex items-center font-semibold `}
        >
          {/* ========================= Medium Rounded Search Bar ======================= */}
          {/* <label
          className={`w-[95%] border-b-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-gray-200 border-gray-300'} rounded rounded-fulls px-1 flex items-center font-semibold  `}
        > */}
          <input
            type="text"
            className="grow outline-none bg-transparent py-2 pl-4"
            // className="grow outline-none bg-transparent py-2 px-2"
            placeholder="Search people"
            value={search}
            onChange={handleSearchInput}
          />
          {search.length ? (
            <button
              className={` p-2 ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-700 ' : 'text-slate-700 hover:text-white hover:bg-slate-400 '} rounded-full `}
              onClick={handleCancelSearchBtn}
            >
              <IoCloseSharp />
            </button>
          ) : (
            <CiSearch
              className={`text-4xl p-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} `}
            />
          )}
        </label>
        {/* <button className="">
                <CiSearch className="text-4xl hover:bg-blue-400 p-2 hover:rounded-full hover:text-white" />
              </button> */}

        {/* </form> */}
      </div>
    </>
  );
};

export default Search;
