import axios from 'axios';
import { apiRoutes } from './apiRoutes';
const token = localStorage.getItem('chatit');
// ================= Sign Up User =================
const SignUpUser = async (sendData) => {
  try {
    const response = await axios.post(apiRoutes.signupURI, sendData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    localStorage.setItem('chatit', response.data.token);
    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};

// ============= Login User =================
const LoginUser = async (sendData) => {
  try {
    const response = await axios.post(apiRoutes.loginURI, sendData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('chatit', response.data.token);
    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};

// ================= Get User Data =================
const GetUserData = async () => {
  try {
    const response = await axios.get(`${apiRoutes.userprofileURI}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await { status: 'success', data: response.data };
  } catch (error) {
    // console.log(error);
    // localStorage.removeItem('chatit');
    return { status: 'error', data: error.response?.data?.message };
  }
};

// ==================== Update User Data =======================
const UpdateUserData = async (updateData, id) => {
  try {
    const response = await axios.put(
      `${apiRoutes.updateUserProfileURI}`,
      updateData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return await { status: 'success', data: response.data };
  } catch (error) {
    // console.log(error);
    // localStorage.removeItem('chatit');
    return { status: 'error', data: error.response?.data?.message };
  }
};
// ==================== Reset User Password  =======================
const ResetUserPassword = async (updateData, id) => {
  try {
    const response = await axios.put(
      `${apiRoutes.resetpasswordURI}/${id}`,
      updateData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};
// ==================== Get All User Data =======================
const GetAllUserData = async () => {
  try {
    const response = await axios.get(
      `${apiRoutes.getAllUserURI}`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};
export {
  SignUpUser,
  LoginUser,
  GetUserData,
  UpdateUserData,
  ResetUserPassword,
  GetAllUserData,
};
