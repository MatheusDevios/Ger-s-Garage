import { configureStore } from "@reduxjs/toolkit";

import authRedux from "./authRedux";
import cartRedux from "./cartRedux";

export const store = configureStore({
  reducer: {
    auth: authRedux.reducer,
    cart: cartRedux.reducer,
  },
});
