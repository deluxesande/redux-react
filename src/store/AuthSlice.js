import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: { isLoggedin: false },
    reducers: {
        login(state) {
            state.isLoggedin = true;
        },
        logout(state) {
            state.isLoggedin = false;
        },
    },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;
