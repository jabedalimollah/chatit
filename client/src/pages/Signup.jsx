import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@mui/material';
import { IoEyeSharp } from 'react-icons/io5';
import { IoEyeOffSharp } from 'react-icons/io5';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/signUpSchema';
import { WrapperComponent } from '../layout/WrapperComponent';
import { SignUpUser } from '../utils/userApiCall';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../Redux/features/user/userSlice';

const initialValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirm_password: '',
};
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setCpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values) => {
        setLoading(true);
        // ------------- Sign Up Api call -------------
        const res = await SignUpUser(values);
        setLoading(false);
        if (res.status == 'error') {
          toast.error(res.data, {
            position: 'top-center',
          });
        } else {
          toast.success('Signup successfully', {
            position: 'top-center',
          });
          navigate('/'); // navigate home page

          dispatch(setAuthUser(res.data.data)); // set Auth User when log in
          window.location.reload();
        }
      },
    });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCPassword = () => setCpassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {loading && (
        <div className="w-full flex justify-center items-center  fixed top-5 z-40">
          <span className="flex justify-center items-center gap-x-2  bg-slate-100 text-blue-700 shadow-md px-3 py-2 rounded-md">
            <span className="loading loading-spinner"></span>
            Loading...
          </span>
        </div>
      )}
      <div className="w-full h-auto md:h-dvh flex  items-center justify-center bg-blue-100">
        <div className="bg-white w-full md:w-10/12 lg:w-6/12 pt-12 md:pt-0 flex flex-col md:flex-row items-center lg:items-start rounded shadow-md ">
          {/* ================== Sign Up Input Fields ================== */}
          <div className="p-4 px-8 flex flex-col">
            <h3 className="text-2xl font-bold text-blue-900">
              Create a New Account
            </h3>
            <p className="text-sm text-gray-400">
              {/* Join our community and start chatting in no time! */}
              Hey enter your details to create your account
            </p>

            <form
              action=""
              className="flex flex-col gap-y-1"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="name"
                  label="Name"
                  variant="standard"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <span className="text-red-400 text-sm">
                  {errors.name && touched.name ? errors.name : null}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="username"
                  label="Username"
                  variant="standard"
                  name="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {errors.username && touched.username ? errors.username : null}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {errors.email && touched.email ? errors.email : null}
                </span>
              </div>

              <div className="flex flex-col gap-y-1">
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <IoEyeOffSharp className="text-base text-gray-400" />
                          ) : (
                            <IoEyeSharp className="text-base text-gray-400" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <span className="text-red-400 text-sm">
                  {errors.password && touched.password ? errors.password : null}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-cpassword">
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-cpassword"
                    type={showCpassword ? 'text' : 'password'}
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showCpassword ? (
                            <IoEyeOffSharp className="text-base text-gray-400" />
                          ) : (
                            <IoEyeSharp className="text-base text-gray-400" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <span className="text-red-400 text-sm">
                  {errors.confirm_password && touched.confirm_password
                    ? errors.confirm_password
                    : null}
                </span>
              </div>
              {loading ? (
                <button
                  className="flex justify-center items-center gap-x-2 bg-blue-500 text-white py-1 rounded font-semibold  mt-3"
                  type="button"
                  disabled="disabled"
                >
                  <span className="loading loading-spinner loading-xs"></span>
                  Loading...
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white py-1 rounded font-bold hover:bg-blue-700 mt-3"
                  type="submit"
                >
                  Sign up
                </button>
              )}
            </form>

            <span className="text-gray-400 py-2 text-sm">
              Already have an account?{' '}
              <NavLink to="/login" className={`text-blue-600`}>
                Log in
              </NavLink>
            </span>
          </div>

          {/* ================== Side picture ====================== */}
          <div className="w-10/12 md:w-7/12 flex items-center pb-4 md:pb-0">
            <div className="w-full">
              <img src="./images/signup1.png" alt="signup" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default WrapperComponent()(Signup);
