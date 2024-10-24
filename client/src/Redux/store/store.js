import { configureStore } from '@reduxjs/toolkit';
import showProfileReducer from '../features/profileBtn/profileBtnSlice';
import showSelectedUserBtnReducer from '../features/selectedUser/selectedUserBtnSlice';
import darkThemeReducer from '../features/darkTheme/darkThemeSlice';
import userReducer from '../features/user/userSlice';
import messageReducer from '../features/message/messageSlice';
import aiReducer from '../features/Ai/aiSlice';
export const store = configureStore({
  reducer: {
    showProfileBtn: showProfileReducer,
    showSelectedBtn: showSelectedUserBtnReducer,
    darkTheme: darkThemeReducer,
    user: userReducer,
    message: messageReducer,
    ai: aiReducer,
  },
});
