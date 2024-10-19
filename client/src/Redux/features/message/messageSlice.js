import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  loadingMessages: false,
};

export const selectUserSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.messages = action.payload;
    },
    sendMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    setLoadingMessages: (state, action) => {
      state.loadingMessages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMessage, sendMessages, setLoadingMessages } =
  selectUserSlice.actions;

export default selectUserSlice.reducer;
