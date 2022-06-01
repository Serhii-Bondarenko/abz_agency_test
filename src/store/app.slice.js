import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { appService } from '../services';

export const getAllUsers = createAsyncThunk(
    'appSlice/getAllUsers',
    async ({ page }, {
        dispatch,
        rejectWithValue,
    }) => {
        try {
            const data = await appService.getUsers(page);
            dispatch(setUserData({ data }));

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getUserPositions = createAsyncThunk(
    'appSlice/getUserPositions',
    async (_, {
        rejectWithValue
    }) => {
        try {
            const { positions } = await appService.getPositions();

            return { positions };
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const createUser = createAsyncThunk(
    'appSlice/createUser',
    async ({ user, setCreatingErr }, {
        dispatch,
        rejectWithValue,
    }) => {
        try {
            const { token } = await appService.getAuthToken();
            const response = await appService.createUser(user, token).catch(error => {
                return error.response.data;
            })

            dispatch(setNextPage({ page: 1 }));

            return response;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const appSlice = createSlice({
    name: 'appSlice',

    initialState: {
        status: null,
        error: null,
        currentPage: 1,
        totalPages: null,
        token: null,
        users: [],
        positions: [],
        responseStatus: null
    },

    reducers: {
        setUserData: (state, action) => {
            const { total_pages, users } = action.payload.data;

            let usersList = [...users];
            if  (state.currentPage !== 1) usersList = [...state.users, ...users];

            state.totalPages = total_pages;
            state.users = usersList
                .sort((a, b) => b.registration_timestamp - a.registration_timestamp);
        },

        setNextPage: (state, action) => {
            if (action.payload) {
                state.currentPage = action.payload.page;

                return;
            }

            state.currentPage = ++state.currentPage;
        }
    },

    extraReducers: {
        //      GET USERS
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },

        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
        },

        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        //      GET POSITIONS
        [getUserPositions.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },

        [getUserPositions.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.positions = action.payload.positions;
        },

        [getUserPositions.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        //      CREATE USER
        [createUser.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },

        [createUser.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.responseStatus = action.payload;
        },

        [createUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const appReducer = appSlice.reducer;

export default appReducer;

export const { setUserData, setNextPage } = appSlice.actions;