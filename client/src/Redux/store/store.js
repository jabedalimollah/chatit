import { configureStore } from '@reduxjs/toolkit';
import showProfileReducer from '../features/profileBtn/profileBtnSlice';
import showSelectedUserBtnReducer from '../features/selectedUser/selectedUserBtnSlice';
export const store = configureStore({
  reducer: {
    showProfileBtn: showProfileReducer,
    showSelectedBtn: showSelectedUserBtnReducer,
  },
});
