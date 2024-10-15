import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { IoCloseSharp } from 'react-icons/io5';
const Search = () => {
  const [search, setSearch] = useState('');
  const darkMode = useSelector((state) => state.darkTheme.value);
  const handleCancelSearchBtn = () => {
    setSearch('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    // console.log(allUsers);
  };
  return (
    <>
      <div className="w-full h-[6vh] md:h-[4vh] lg:h-[6vh] flex justify-center">
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
            onChange={(e) => setSearch(e.target.value)}
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
