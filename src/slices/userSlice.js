import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersAPI from "../services/userAPI";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk("user/getUser", async (values) => {
  try {
    const data = await usersAPI.getUser();
    return data;
  } catch (error) {
    throw error;
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      return { ...state, loading: true, error: null };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload.content,
        error: null,
      };
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    });
  },
});
export default userSlice.reducer;
