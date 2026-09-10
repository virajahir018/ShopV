import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },

        logoutUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.token = null;
        },

        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
