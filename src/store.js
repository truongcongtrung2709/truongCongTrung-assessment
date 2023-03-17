import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import user from "./slices/userSlice";
const store = configureStore({
  reducer: {
    auth,
    user,
  },
});
export default store;
