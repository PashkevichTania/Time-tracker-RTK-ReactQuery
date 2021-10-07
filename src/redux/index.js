import {configureStore} from "@reduxjs/toolkit";
import popupReducer from "redux/popupSlice";
import userReducer from "redux/userSlice";


const store = configureStore({
  reducer: {
    popup: popupReducer,
    user:  userReducer
  }
})

export default store;
