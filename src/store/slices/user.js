import { createSlice } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

export const userSlice = createSlice({
    name: 'user',

    initialState: {
        user: {}
    },

    reducers: {
        addUser: (state, user) => {
            if (!isEmpty(user)) state.user = user;
        },
        removeUser: (state) => {
            state.user = {};
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;