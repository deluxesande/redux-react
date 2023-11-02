import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        // return hooks
        // query used for getting data
        getAllItems: builder.query({
            query: () => "products/",
        }),
        getItem: builder.query({
            query: (product) => `products/${product}`,
        }),
    }),
});

export const { useGetAllItemsQuery, useGetItemQuery } = itemsApi;
