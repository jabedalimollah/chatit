import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const profileBtnSlice = createSlice({
  name: 'profileBtn',
  initialState,
  reducers: {
    showProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showProfile } = profileBtnSlice.actions;

export default profileBtnSlice.reducer;
