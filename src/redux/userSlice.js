import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: {},
  tableFilter: {
    tracked: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    updateUser: (state, action) => {
      const userArrayIndex = action.payload.indexArray;
      const users = state.users;
      const userUpdates = action.payload;
      users.splice(userArrayIndex, 1, userUpdates);
      state.currentUser = users
    },
    filterTracked: (state, action) => {
      state.tableFilter.tracked = action.payload
    },

  },
})

export const { setUsers, setCurrentUser, updateUser, filterTracked } = userSlice.actions

export default userSlice.reducer
