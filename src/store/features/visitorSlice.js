// visitorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const visitorSlice = createSlice({
  name: 'visitor',
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    clearData: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
  },
});

export const { setData, setLoading, setError, clearData } = visitorSlice.actions;
export const selectVisitorData = (state) => state.visitor.data;
export default visitorSlice.reducer;
