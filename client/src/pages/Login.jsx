import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";

import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/loginSchema";
import WrapperComponent from "../layout/WrapperComponent";
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="w-full h-auto md:h-dvh flex items-center justify-center bg-blue-100 mt-12 md:mt-0">
        <div className="bg-white w-full md:w-10/12 lg:w-6/12 flex flex-col md:flex-row items-center rounded shadow-md ">
          {/* ================== Login Input Fields ================== */}
          <div className="p-4 px-8 flex flex-col">
            <h3 className="text-2xl font-bold text-blue-900">Log in</h3>
            <p className="text-sm text-gray-400">
              Welcome user, please Log in to continue
            </p>

            <form
              action=""
              className="flex flex-col gap-y-1"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-y-1">
                <TextField
                  id="standard-basic"
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
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
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
              <span className="flex justify-end">
                <NavLink
                  className={`text-right text-gray-500 text-sm underline `}
                  to="/forgot_password"
                >
                  Forgot password?
                </NavLink>
              </span>

              <button
                className="bg-blue-500 text-white py-1 rounded font-bold hover:bg-blue-700 mt-3"
                type="submit"
              >
                Log in
              </button>
            </form>

            <span className="text-gray-400 py-2 text-sm">
              Doesn't have an account yet?{" "}
              <NavLink to="/signup" className={`text-blue-600`}>
                Sign up
              </NavLink>
            </span>
          </div>

          {/* ================== Side picture ====================== */}
          <div className="w-10/12 md:w-6/12 flex items-center ">
            <div className="w-full">
              <img src="./images/login.png" alt="login" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapperComponent()(Login);
