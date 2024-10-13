import React, { useEffect, useRef, useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { RiSettings2Line } from 'react-icons/ri';
import { RiMoonClearLine } from 'react-icons/ri';
import { FiInfo } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { showProfile } from '../../../Redux/features/profileBtn/profileBtnSlice';
const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const menuBtn = () => {
    setOpen(!open);
  };

  const handleAccountBtn = () => {
    setOpen(false);
    dispatch(showProfile(true));
  };
  const handleDarkMode = (e) => {
    setDarkMode(e.target.checked);
    // console.log(e.target.checked);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && btnRef.current) {
        if (
          !menuRef.current.contains(e.target) &&
          !btnRef.current.contains(e.target)
        ) {
          setOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <button
          ref={btnRef}
          className=" mx-4 p-2 hover:bg-gray-200 rounded-full"
          onClick={menuBtn}
          //   onClick={() => setOpen(!open)}
        >
          {/* {open ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <LuMenu className="text-2xl" />
          )} */}

          <LuMenu className="text-2xl" />
        </button>
        {open && (
          <div className="w-72 absolute left-8  bg-white p-2 shadow-2xl shadow-gray-400 rounded-md z-50">
            <div
              className="w-full p-4 border-b-2"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg">Jabed Ali</h3>
              <p className="text-sm text-gray-500">jabed@gmail.com</p>
            </div>
            <ul className="flex flex-col text-black py-2">
              <li
                ref={menuRef}
                onClick={handleAccountBtn}
                className="hover:bg-gray-100 flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer"
              >
                <RiSettings2Line className="text-sm" />
                My Account
              </li>
              {/* <li className="hover:bg-gray-200 ">Dark Mode</li> */}
              <li>
                <label
                  // ref={menuRef}
                  // onClick={() => setOpen(true)}
                  htmlFor="darkmode"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:bg-gray-100 flex items-center justify-between text-base px-4 py-2 rounded cursor-pointer"
                >
                  <span className="flex items-center gap-x-2">
                    <RiMoonClearLine className="text-sm" />
                    Dark Mode
                  </span>

                  <input
                    type="checkbox"
                    className={`toggle border-none bg-white ${
                      darkMode ? '[--tglbg:#5b97fd]' : '[--tglbg:#d2d2d2]'
                    } hover:bg-white`}
                    checked={darkMode}
                    // className={`toggle border-blue-500 bg-white ${
                    //   darkMode ? "[--tglbg:blue]" : "[--tglbg:gray]"
                    // } hover:bg-white`}
                    // defaultChecked
                    id="darkmode"
                    onChange={handleDarkMode}
                  />
                </label>
              </li>
              <li
                ref={menuRef}
                onClick={() => setOpen(false)}
                className="hover:bg-gray-100 flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer"
              >
                <FiInfo className="text-sm" />
                About
              </li>
              <li
                ref={menuRef}
                onClick={() => setOpen(false)}
                className="hover:bg-gray-100 flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer"
              >
                <BiLogOut className="text-sm" />
                Log out
              </li>
            </ul>
            <div
              className="w-full flex justify-center py-3 border-t-2"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm">
                ©️ Copyright by{' '}
                <a
                  href="https://jabedalimollah.netlify.app/"
                  target="_blank"
                  className="text-blue-700"
                >
                  Jabed Ali Mollah
                </a>
              </p>
              {/* <div className="w-[20%]">
                <img src="./images/logo.png" alt="logo" srcSet="" />
              </div> */}
              {/* <p>Chatit</p> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuComponent;
