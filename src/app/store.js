import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
//The GLOBAL STORE SETUP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
