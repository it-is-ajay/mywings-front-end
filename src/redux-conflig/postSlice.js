import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchpost=createAsyncThunk("post/getAllPost",async()=>{
    try{
    let response= await axios.get("http://localhost:3000/post/getAllPost");
    console.log(response);
    console.log(response.data)
    return response.data.result;
    }catch(err){
        console.log(err)
    }
})

const postslice=createSlice({
    name:"posts",
    initialState:{
    postlist:[],
    isloading:false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchpost.pending,(state,action)=>{
            state.isloading=true;
        });
        builder.addCase(fetchpost.fulfilled,(state,action)=>{
            state.postlist=action.payload;
        });
    }
})

export default postslice.reducer;