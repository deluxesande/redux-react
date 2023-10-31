import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        cart: CartSlice.reducer,
    },
});

export default store;
