import {SET_IS_MESSAGE_POPUP_OPENED, SET_IS_POPUP_OPENED} from "./types";

const initialState = {
    isPopupOpened: false,
    isInfoPopupOpened: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_POPUP_OPENED:
            return {
                ...state,
                isPopupOpened: action.payload,
            };
        case SET_IS_MESSAGE_POPUP_OPENED:
            return {
                ...state,
                isInfoPopupOpened: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;