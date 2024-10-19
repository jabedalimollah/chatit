const apiRoutes = {
  signupURI: `${import.meta.env.VITE_APP_API_KEY}/user/signup`,
  loginURI: `${import.meta.env.VITE_APP_API_KEY}/user/login`,
  resetpasswordURI: `${import.meta.env.VITE_APP_API_KEY}/user/resetpassword`,
  userprofileURI: `${import.meta.env.VITE_APP_API_KEY}/user/userprofile`,
  updateUserProfileURI: `${import.meta.env.VITE_APP_API_KEY}/user/updateuser`,
  getAllUserURI: `${import.meta.env.VITE_APP_API_KEY}/user/alluserprofile`,
  deleteUserProfileURI: `${import.meta.env.VITE_APP_API_KEY}/user/deleteuser`,

  selectedUserMessages: `${import.meta.env.VITE_APP_API_KEY}/message/receive`,
  sendMessages: `${import.meta.env.VITE_APP_API_KEY}/message/send`,
};

export { apiRoutes };
