import { configureStore } from '@reduxjs/toolkit';
import showProfileReducer from '../features/profileBtn/profileBtnSlice';
import showSelectedUserBtnReducer from '../features/selectedUser/selectedUserBtnSlice';
import darkThemeReducer from '../features/darkTheme/darkThemeSlice';
export const store = configureStore({
  reducer: {
    showProfileBtn: showProfileReducer,
    showSelectedBtn: showSelectedUserBtnReducer,
    darkTheme: darkThemeReducer,
  },
});
