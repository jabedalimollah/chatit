import axios from 'axios';
import { apiRoutes } from './apiRoutes';
const token = localStorage.getItem('chatit');

// ==================== Ai  =======================
const GetAiResult = async (message) => {
  try {
    const response = await axios.post(
      `${apiRoutes.aiURI}`,
      { message },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return await { status: 'success', data: response.data };
  } catch (error) {
    return { status: 'error', data: error.response?.data?.message };
  }
};
export { GetAiResult };
