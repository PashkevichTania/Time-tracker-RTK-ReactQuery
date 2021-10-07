import {
    CURRENT_USER,
    FILTER_TRACKED,
    SET_USERS,
    UPDATE_USER
} from "./types";

const initialState = {
    users: [],
    currentUser: {},
    tableFilter: {
        tracked: false,
    },
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UPDATE_USER:
            const userArrayIndex = action.payload.indexArray;
            const users = state.users;
            const userUpdates = action.payload;
            users.splice(userArrayIndex, 1, userUpdates);
            return {
                ...state,
                currentUser: users,
            };
        case FILTER_TRACKED:
            const filter = {
                tracked: action.payload,
            };
            return {
                ...state,
                tableFilter: filter,
            };
        default:
            return state;
    }
};

export default userReducer;