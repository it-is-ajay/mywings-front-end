import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import userPostSlice from "./userPostSlice";
const store = configureStore({
    reducer : {
        user : userSlice,
        posts : postSlice,
        userPosts : userPostSlice
    }
})
export default store;
