const apiRoutes = {
  signupURI: `${import.meta.env.VITE_APP_API_KEY}/user/signup`,
  loginURI: `${import.meta.env.VITE_APP_API_KEY}/user/login`,
  resetpasswordURI: `${import.meta.env.VITE_APP_API_KEY}/user/resetpassword`,
  userprofileURI: `${import.meta.env.VITE_APP_API_KEY}/user/userprofile`,
  updateUserProfileURI: `${import.meta.env.VITE_APP_API_KEY}/user/updateuser`,
  deleteUserProfileURI: `${import.meta.env.VITE_APP_API_KEY}/user/deleteuser`,
};

export { apiRoutes };
