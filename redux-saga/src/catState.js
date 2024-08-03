import { createSlice } from "@reduxjs/toolkit";

export const cateSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatsFailure: (state) => {
      console.log({ state });
      state.isLoading = false;
    },
  },
});

export const { getCatsFailure, getCatsFetch, getCatsSuccess } =
  cateSlice.actions;

export default cateSlice.reducer;
