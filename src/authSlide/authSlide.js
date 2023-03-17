import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersAPI from "../services/usersAPI";

const initialState = {
    user:null || JSON.parse(localStorage.getItem('user')),
    loading:false, 
    error: null,
}

export const signin = createAsyncThunk("auth/signin", async (values)=> {
    try {
        const data = await usersAPI.signin(values);
        localStorage.setItem("user", JSON.stringify(data.content));
        return data;
        
    } catch (error) {
        console.log(error);
        throw error;
    
    }
})

export const update = createAsyncThunk("auth/update", async (values) => {
    try {
        const data = await usersAPI.update(values);
        localStorage.setItem("user", JSON.stringify(data.content));
        return data;
    } catch (error) {
        console.log(error);
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
        return{...state, loading:false, user: action.payload.content}
    })
    builder.addCase(signin.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      })
      builder.addCase(update.pending, (state,action) => {
        return{...state,loading:true}
    });
    builder.addCase(update.fulfilled, (state,action) =>{
        return{...state, loading:false, user: action.payload.content}
    })
    builder.addCase(update.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      })
    
},

})

export default authSlide.reducer;