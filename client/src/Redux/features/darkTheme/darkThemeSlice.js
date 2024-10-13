import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const darkSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = darkSlice.actions;

export default darkSlice.reducer;
