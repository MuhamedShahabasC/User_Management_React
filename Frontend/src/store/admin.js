import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout() {
      return null;
    },
  },
});

export const adminSliceActions = adminSlice.actions;

export default adminSlice;
