import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Webapi/api";
import axios from "axios";

export const fetchPost = createAsyncThunk("fetchPost",async ()=>{
    let response = await axios.get(api.getpost);
    return response.data.result
})

const slice = createSlice({
    name : "post",
    initialState:{
        postList : [],
        isLoading : false,
        error : null
    },
    reducers:{
        setPosts:(state,action)=>{
            state.postList = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchPost.fulfilled,(state,action)=>{
            state.postList = action.payload;
            state.isLoading = false;
        }).addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
})
export const {setPosts} = slice.actions;
export default slice.reducer;