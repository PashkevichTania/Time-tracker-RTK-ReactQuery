import {configureStore} from "@reduxjs/toolkit";
import popupReducer from "redux/popupSlice";
import userReducer from "redux/userSlice";
import apiReducer from "redux/apiSlice";


const store = configureStore({
  reducer: {
    popup: popupReducer,
    user:  userReducer,
    api: apiReducer
  }
})

export default store;
