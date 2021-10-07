import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isPopupOpened: false,
  isInfoPopupOpened: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isPopupOpened = true
    },
    closePopup: (state) => {
      state.isPopupOpened = false
    },
    openPopupMessage: (state) => {
      state.isInfoPopupOpened = true
    },
    closePopupMessage: (state) => {
      state.isInfoPopupOpened = false
    },

  },
})


export const { openPopup, closePopup, openPopupMessage, closePopupMessage } = popupSlice.actions

export default popupSlice.reducer
