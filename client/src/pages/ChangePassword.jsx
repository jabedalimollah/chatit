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
import { ResetUserPassword } from '../utils/userApiCall';
import { useSelector } from 'react-redux';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
const ChangePassword = () => {
  const [oldPasswordShow, setOldPasswordShow] = useState(false);
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPasswordMessage, setNewPasswordMessage] = useState(false);
  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(false);
  const [data, setData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const authUser = useSelector((state) => state.user.authUser);
  const navigate = useNavigate('');
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!data.password.length) {
      toast.error('Enter Password', {
        position: 'top-center',
      });
    }
    if (data.newPassword.length < 6 && data.password.length < 6) {
      setNewPasswordMessage(true);
    } else {
      setNewPasswordMessage(false);
      if (!(data.newPassword === data.confirmPassword)) {
        setConfirmPasswordMatch(true);
      } else {
        setConfirmPasswordMatch(false);
        setLoading(true);
        const res = await ResetUserPassword(data, authUser?._id);
        // console.log(res);
        setLoading(false);
        if (res.status == 'error') {
          toast.error(res.data, {
            position: 'top-center',
          });
        } else {
          toast.success('Password changed successfully', {
            position: 'top-center',
          });
          navigate('/');
        }
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
            Saving...
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
              Change Password
            </h2>
            <p className={`text-xs md:text-xs lg:text-base my-2`}>
              Enter your current password and your new password
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
                Your password must be at least 6 characters
              </span>
              <FormControl
                //   sx={{ m: 1, width: '25ch' }}
                className="w-full"
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-new-password">
                  New Password
                </InputLabel>
                <Input
                  id="standard-adornment-new-password"
                  type={newPasswordShow ? 'text' : 'password'}
                  name="newPassword"
                  onChange={handleInputChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setNewPasswordShow(!newPasswordShow)}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {newPasswordShow ? (
                          <IoMdEye className="text-xl text-gray-400" />
                        ) : (
                          <IoMdEyeOff className="text-xl text-gray-400" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {newPasswordMessage && (
                  <span className="text-red-400 text-xs md:text-xs lg:text-sm">
                    *New password must be at least 6 characters
                  </span>
                )}
              </FormControl>
              <FormControl
                //   sx={{ m: 1, width: '25ch' }}
                className="w-full"
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-confirm-password">
                  Confirm Password
                </InputLabel>
                <Input
                  id="standard-adornment-confirm-password"
                  type={confirmPasswordShow ? 'text' : 'password'}
                  name="confirmPassword"
                  onChange={handleInputChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setConfirmPasswordShow(!confirmPasswordShow)
                        }
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {confirmPasswordShow ? (
                          <IoMdEye className="text-xl text-gray-400" />
                        ) : (
                          <IoMdEyeOff className="text-xl text-gray-400" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {confirmPasswordMatch && (
                  <span className="text-red-400 text-xs md:text-xs lg:text-sm">
                    *Password do not match
                  </span>
                )}
              </FormControl>

              <div className="w-full flex justify-between mt-4">
                <NavLink
                  to={'/'}
                  className={`flex justify-center items-center gap-x-1 border border-blue-500 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md text-blue-500`}
                >
                  {/* Cancel */}
                  <IoMdArrowBack />
                  Back
                </NavLink>

                {loading ? (
                  <span className="flex items-center gap-x-2 bg-blue-500 text-white px-3 py-1 rounded-md ">
                    <span className="loading loading-spinner loading-md"></span>
                    Saving...
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleChangePassword}
                    className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 rounded-md "
                  >
                    Change Password
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="w-[100%] md:w-[60%] lg:w-[50%] flex items-center">
            <img src="/images/change_password.png" alt="picture" />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default WrapperComponent()(ChangePassword);
