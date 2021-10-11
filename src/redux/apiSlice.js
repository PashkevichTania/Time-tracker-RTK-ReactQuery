import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsersAPI} from "services/home";

export const fetchUsers = createAsyncThunk(
    'api/fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const users = await getUsersAPI();
            return users
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
    reducers: {
        extraReducers: (builder) => {
            builder
                .addCase(fetchUsers.pending, (state) => {
                    state.status = 'pending';
                    state.error = null;
                })
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.status = 'resolved';
                })
                .addCase(fetchUsers.rejected, (state, action) => {
                    state.status = 'rejected';
                    state.error = action.payload;
                })
        },
    },
})


export default apiSlice.reducer
