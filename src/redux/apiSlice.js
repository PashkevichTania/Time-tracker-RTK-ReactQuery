import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsersAPI} from "services/home";

export const fetchUsers = createAsyncThunk(
  'api/fetchUsers',
  async function (_, {rejectWithValue}) {
    try {
      return await getUsersAPI();
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

const initialState = {
  data: [],
  status: null,
  error: null,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]:
      (state) => {
        state.status = 'pending';
        state.error = null;
      },
    [fetchUsers.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.status = 'resolved';
      },
    [fetchUsers.rejected]:  (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      }
  },
})


export default apiSlice.reducer
