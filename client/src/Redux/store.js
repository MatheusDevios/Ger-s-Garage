import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authRedux";
// import photosSlice from "./photos-slice";
// import servicesSlice from "./services-slice";

export const store = configureStore({
  reducer: {
    user: authReducer.reducer,
    // services: servicesSlice.reducer,
    // photos: photosSlice.reducer,
  },
});
