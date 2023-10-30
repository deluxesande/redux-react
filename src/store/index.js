import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        add(state, action) {
            state.counter++;
        },
        sub(state, action) {
            state.counter--;
        },
    },
});

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
