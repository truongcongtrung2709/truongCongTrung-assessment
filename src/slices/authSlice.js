import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
  accessToken: JSON.parse(localStorage.getItem("accessToken")) || null,
  loading: false,
  error: null,
};

export const signin = createAsyncThunk("auth/signin", async (values) => {
  try {
    const data = await authAPI.signin(values);
    localStorage.setItem(
      "accessToken",
      JSON.stringify(data.content.accessToken)
    );
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("accessToken");
      return { ...state, accessToken: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state, action) => {
      return { ...state, loading: true, error: null };
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        accessToken: action.payload.content.accessToken,
        error: null,
      };
    });
    builder.addCase(signin.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
