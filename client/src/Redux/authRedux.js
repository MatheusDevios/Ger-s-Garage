import { createSlice } from "@reduxjs/toolkit";

const authRedux = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userId: null,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authRedux.actions;

export default authRedux;