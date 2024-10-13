import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const selectedUserBtnSlice = createSlice({
  name: 'selectedUserBtn',
  initialState,
  reducers: {
    showSelectedUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showSelectedUser } = selectedUserBtnSlice.actions;

export default selectedUserBtnSlice.reducer;
