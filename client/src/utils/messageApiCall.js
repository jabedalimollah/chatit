import axios from 'axios';
import { apiRoutes } from './apiRoutes';
const token = localStorage.getItem('chatit');
// ==================== Get Selected User Messages =======================
const GetSelectedUserMessages = async (id) => {
  try {
    const response = await axios.get(
      `${apiRoutes.selectedUserMessages}/${id}`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};
// ==================== Send Messages =======================
const SendMessages = async (message, id) => {
  try {
    const response = await axios.post(
      `${apiRoutes.sendMessages}/${id}`,
      {
        message: message,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};
export { GetSelectedUserMessages, SendMessages };
