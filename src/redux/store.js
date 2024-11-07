import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./reduser/lang";
import bannerSlice from "./reduser/banner";

export const store = configureStore({
  reducer: {
    langReducer: langSlice,
    banner: bannerSlice,
  },
});
