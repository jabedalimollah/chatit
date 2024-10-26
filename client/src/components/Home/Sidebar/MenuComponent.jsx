import React, { useEffect, useRef, useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { RiSettings2Line } from 'react-icons/ri';
import { RiMoonClearLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { showProfile } from '../../../Redux/features/profileBtn/profileBtnSlice';
import { setTheme } from '../../../Redux/features/darkTheme/darkThemeSlice';
import { NavLink, useNavigate } from 'react-router-dom';
const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const darkMode = useSelector((state) => state.darkTheme.value);
  const authUser = useSelector((state) => state.user.authUser);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuBtn = () => {
    setOpen(!open);
  };

  const handleAccountBtn = () => {
    setOpen(false);
    dispatch(showProfile(true));
  };
  const handleDarkMode = (e) => {
    // setDarkMode(e.target.checked);
    localStorage.setItem('chatit_darkmode', e.target.checked);
    // const isDark = localStorage.getItem('chatit_darkmode');
    // console.log(isDark);
    // dispatch(setTheme(Boolean(isDark)));

    dispatch(setTheme(e.target.checked));

    // console.log(e.target.checked);
  };
  const handleLogOutBtn = () => {
    setOpen(false);
    document.getElementById('my_modal_1').showModal();
  };
  const handleLogOutConfirmBtn = () => {
    localStorage.removeItem('chatit');
    localStorage.removeItem('chatit_darkmode');
    dispatch(setTheme(false));
    navigate('/login');
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
          className={` mx-4 p-2 ${darkMode ? 'hover:bg-gray-800' : ' hover:bg-gray-200'} rounded-full`}
          onClick={menuBtn}
          //   onClick={() => setOpen(!open)}
        >
          {/* {open ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <LuMenu className="text-2xl" />
          )} */}

          {/* <BsThreeDotsVertical className="text-2xl" /> */}
          <LuMenu className="text-2xl" />
        </button>

        {open && (
          <div
            className={`w-72 absolute top-11 right-8 md:left-1 lg:left-0 ${darkMode ? 'bg-slate-800 ' : ' bg-white shadow-gray-400'} p-2 shadow-2xl  rounded-md z-50 `}
          >
            <div
              className={`w-full p-4 ${darkMode ? 'border-b-2 border-b-slate-700' : 'border-b-2'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg">{authUser?.name}</h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
              >
                {authUser?.email}
              </p>
            </div>
            <ul
              className={`flex flex-col ${darkMode ? 'text-white' : ' text-black'} py-2`}
            >
              <li
                ref={menuRef}
                onClick={handleAccountBtn}
                className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
              >
                <RiSettings2Line className="text-sm" />
                My Account
              </li>

              <li>
                <label
                  htmlFor="darkmode"
                  onClick={(e) => e.stopPropagation()}
                  className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} flex items-center justify-between text-base px-4 py-2 rounded cursor-pointer`}
                >
                  <span className="flex items-center gap-x-2">
                    <RiMoonClearLine className="text-sm" />
                    Dark Mode
                  </span>

                  <input
                    type="checkbox"
                    className={`toggle border-none bg-white ${
                      darkMode ? '[--tglbg:#126aff]' : '[--tglbg:#d2d2d2]'
                    } hover:bg-white`}
                    checked={darkMode}
                    id="darkmode"
                    onChange={handleDarkMode}
                  />
                </label>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  ref={menuRef}
                  onClick={() => setOpen(false)}
                  className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
                >
                  <FiInfo className="text-sm" />
                  About
                </NavLink>
              </li>
              <li
                ref={menuRef}
                onClick={handleLogOutBtn}
                className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
              >
                <BiLogOut className="text-sm" />
                Log out
              </li>
            </ul>
            <div
              className={`w-full flex justify-center py-3 ${darkMode ? 'border-t-2 border-t-slate-700' : 'border-t-2'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm">
                ©️ Copyright by{' '}
                <a
                  href="https://jabedalimollah.netlify.app/"
                  target="_blank"
                  className={`${darkMode ? 'text-blue-500' : 'text-blue-700'}`}
                >
                  Jabed Ali Mollah
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg">Log out?</h3>
          <p className="py-4">Are you sure you want to log out?</p>

          <div className="modal-action w-full flex justify-around">
            <button onClick={handleLogOutConfirmBtn}>Yes</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-blue-600">No</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MenuComponent;
