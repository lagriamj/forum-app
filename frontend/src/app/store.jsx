// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postSlice from "@/features/posts/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postSlice,
  },
});
