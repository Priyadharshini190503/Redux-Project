import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../SlicePage/UsersSlice";  // Import the userReducer from userSlice.js
const store=configureStore({
    reducer:{
         userInfo:userReducer,
    }
})

export default store;