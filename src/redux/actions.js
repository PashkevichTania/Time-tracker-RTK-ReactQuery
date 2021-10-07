import {
    CURRENT_USER,
    FILTER_TRACKED,
    SET_IS_MESSAGE_POPUP_OPENED,
    SET_IS_POPUP_OPENED,
    SET_USERS,
    UPDATE_USER
} from "./types";

export function setIsPopupOpened(value) {
    return {
        type: SET_IS_POPUP_OPENED,
        payload: value,
    };
}

export function setIsMessagePopupOpened(value) {
    return {
        type: SET_IS_MESSAGE_POPUP_OPENED,
        payload: value,
    };
}

export function setUsers(value) {
    return {
        type: SET_USERS,
        payload: value,
    };
}

export function currentUser(value) {
    return {
        type: CURRENT_USER,
        payload: value,
    };
}

export function updateUser(value) {
    return {
        type: UPDATE_USER,
        payload: value,
    };
}

export function isTracked(value) {
    return {
        type: FILTER_TRACKED,
        payload: value,
    };
}