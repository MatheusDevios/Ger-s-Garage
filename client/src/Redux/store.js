import { configureStore } from "@reduxjs/toolkit";

import authRedux from "./authRedux";
// import photosSlice from "./photos-slice";
// import servicesSlice from "./services-slice";

export const store = configureStore({
  reducer: {
    auth: authRedux.reducer,
    // services: servicesSlice.reducer,
    // photos: photosSlice.reducer,
  },
});
