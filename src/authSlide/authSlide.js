import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersAPI from "../services/usersAPI";

const initialState = {
    user:{},
    loading:false, 
    error: null,
}

export const signin = createAsyncThunk("auth/signin", async (values)=> {
    try {
        const data = await usersAPI.signin(values);
        return data;
    } catch (error) {
        throw error;
    }
})

const authSlide = createSlice({name:"auth",
initialState,
extraReducers:(builder) => {
    builder.addCase(signin.pending, (state,action) => {
        return{...state,loading:true}
    });
    builder.addCase(signin.fulfilled, (state,action) =>{
        return{...state, loading:false, user: action.payload}
    })
    builder.addCase(signin.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      })
}})

export default authSlide.reducer;