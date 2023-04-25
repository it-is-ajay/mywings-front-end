import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:{
        user:null,
        token:null
    },reducers:{
        setToken:(state,action)=>{
            state.token = action.payload;
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    }
});
export const{setToken,setUser} = slice.actions
export default slice.reducer;