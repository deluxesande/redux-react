import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/index.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { itemsApi } from "./store/ApiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ApiProvider api={itemsApi}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApiProvider>
    </React.StrictMode>
);
