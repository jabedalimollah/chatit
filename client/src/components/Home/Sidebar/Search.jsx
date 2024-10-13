import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const Search = () => {
  const [search, setSearch] = useState('');
  const darkMode = useSelector((state) => state.darkTheme.value);
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

        <label
          className={`w-[95%] border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'}  rounded-full px-1 flex items-center font-semibold  `}
        >
          <CiSearch
            className={`text-4xl p-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} `}
          />
          <input
            type="text"
            className="grow outline-none bg-transparent py-2"
            placeholder="Search people"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
