import React, { useState } from 'react';
import { WrapperComponent } from '../layout/WrapperComponent';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { IoMdArrowBack } from 'react-icons/io';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { DeleteUserAccount } from '../utils/userApiCall';
import { useSelector } from 'react-redux';

const DeleteAccount = () => {
  const [oldPasswordShow, setOldPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');
  const authUser = useSelector((state) => state.user.authUser);
  const navigate = useNavigate('');
  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    if (!password.length) {
      toast.error('Enter Password', {
        position: 'top-center',
      });
    } else {
      //   console.log(authUser?.id);
      setLoading(true);
      const res = await DeleteUserAccount(password, authUser?._id);
      //   console.log(res);
      setLoading(false);
      if (res.status == 'error') {
        toast.error(res.data, {
          position: 'top-center',
        });
      } else {
        toast.success('Account deleted successfully', {
          position: 'top-center',
        });
        localStorage.removeItem('chatit');
        localStorage.removeItem('chatit_darkmode');
        navigate('/login');
        window.location.reload();
      }
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {loading && (
        <div className="w-full flex justify-center fixed top-3 left-0 z-50">
          <span className=" py-1 px-3 flex justify-center items-center gap-x-2 shadow-md border bg-white rounded-md">
            <span className="loading loading-spinner loading-md"></span>
            Deleting...
          </span>
        </div>
      )}
      <div className="w-full md:h-screen py-3 md:py-0 flex justify-center md:items-center lg:items-center  bg-slate-100 border border-slate-200 ">
        {/* <p>Hello</p> */}
        <div className="w-[100%] md:w-[80%] lg:w-[55%] bg-white flex flex-col md:flex-row lg:flex-row shadow-md ">
          <div className="w-[100%] md:w-[70%] lg:w-[50%] py-10 flex flex-col justify-center items-center relative">
            <div className="w-full hidden md:flex justify-start absolute top-0 left-0 m-5">
              <div className="w-[15%]">
                <img src="/images/logo.png" alt="logo" className="w-full" />
              </div>
            </div>
            <h2
              className={`text-2xl md:text-xl lg:text-2xl text-blue-500 font-semibold`}
            >
              Delete Your Account
            </h2>
            <p className={`text-xs md:text-xs lg:text-base my-2`}>
              {/* When you delete your account, you won't be able to retrieve the
              data */}
              Delete account permanently, cannot be undone.
            </p>
            <form action="" className="w-[80%] flex flex-col gap-y-2">
              <FormControl
                //   sx={{ m: 1, width: '25ch' }}
                className="w-full text-base"
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={oldPasswordShow ? 'text' : 'password'}
                  name="password"
                  onChange={handleInputChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setOldPasswordShow(!oldPasswordShow)}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {oldPasswordShow ? (
                          <IoMdEye className="text-xl text-gray-400" />
                        ) : (
                          <IoMdEyeOff className="text-xl text-gray-400" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <span className="text-xs md:text-xs lg:text-base">
                {/* Your password */}
              </span>

              <div className="w-full flex justify-between mt-4">
                <NavLink
                  to={'/'}
                  className={`flex items-center justify-center gap-x-1 border border-blue-500 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md text-blue-500`}
                >
                  {/* Cancel */}
                  <IoMdArrowBack />
                  Back
                </NavLink>

                {loading ? (
                  <span className="flex items-center gap-x-2 bg-red-500 text-white px-3 py-1 rounded-md ">
                    <span className="loading loading-spinner loading-md"></span>
                    Deleting...
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleDeleteAccount}
                    className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded-md "
                  >
                    Delete Account
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="w-[100%] md:w-[60%] lg:w-[50%] flex items-center">
            <img src="/images/delete_account.png" alt="picture" />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default WrapperComponent()(DeleteAccount);
