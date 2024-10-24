import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectAi: false,
  aiData: [],
};

export const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {
    setSelectAi: (state, action) => {
      state.selectAi = action.payload;
    },
    setAiData: (state, action) => {
      state.aiData = action.payload;
    },
    setAiPreviousValue: (state, action) => {
      state.aiData = [...state.aiData, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectAi, setAiData, setAiPreviousValue } = aiSlice.actions;

export default aiSlice.reducer;
