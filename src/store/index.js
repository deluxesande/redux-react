// eslint-disable-next-line no-unused-vars
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./CartSlice";
import { itemsApi } from "./ApiSlice";

const store = configureStore({
    reducer: {
        // apislice reducer
        [itemsApi.reducerPath]: itemsApi.reducer,
        auth: AuthSlice.reducer,
        cart: CartSlice.reducer,
    },

    // middleware for the api slice
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemsApi.middleware),
});

export default store;
