import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    alreadyLoggedIn(state, action) {
      return action.payload;
    },
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      localStorage.removeItem("currentUser");
      return null;
    },
    updateUser(state, action) {
      localStorage.removeItem("currentUser");
      const updatedData = { ...state, ...action["payload"] };
      localStorage.setItem("currentUser", JSON.stringify(updatedData));
      return updatedData;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;

export default currentUserSlice;
