import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://todo-mern-api.vercel.app" }),
    endpoints: (builder) => ({
        // return hooks
        // query used for getting data
        getAllItems: builder.query({
            query: () => "api/v1/tasks/",
        }),
        getItem: builder.query({
            query: (product) => `products/search?q=${product}`,
        }),
    }),
});

export const { useGetAllItemsQuery, useGetITemsQuery } = itemsApi;
