import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersAPI from "../services/usersAPI";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading:false, 
    error: null,
}

console.log(initialState.user);

export const signin = createAsyncThunk("auth/signin", async (values)=> {
    try {
        const data = await usersAPI.signin(values);
        localStorage.setItem("user", JSON.stringify(data.content));
        console.log(data.content);
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

const authSlice = createSlice({name:"auth",
initialState,
reducers:{
    logout: (state,action) => {
        localStorage.removeItem("user");
        return {...state, user:null};
    }
},
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
export const {logout} = authSlice.actions;
export default authSlice.reducer;