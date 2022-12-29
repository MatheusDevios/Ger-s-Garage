import { createSlice } from "@reduxjs/toolkit";

const authRedux = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAdmin: null,
    name: null,
    phone: null,
    email: null,
    userId: null,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      state.token = null;
      state.isAdmin = null;
      state.userId = null;
      state.name = null;
      state.phone = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authRedux.actions;

export default authRedux;
