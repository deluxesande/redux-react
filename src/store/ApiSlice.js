import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: ["Item"],
    endpoints: (builder) => ({
        // return hooks
        // query used for getting data
        getAllItems: builder.query({
            query: () => "products/",
            providesTags: ["Item"],
        }),
        getItem: builder.query({
            query: (id) => `products/${id}`,
            providesTags: ["Item"],
        }),
        addItem: builder.mutation({
            query: (item) => ({
                url: "products",
                method: "POST",
                body: item,
            }),
            invalidatesTags: ["Item"],
        }),
        updateItem: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `products/${id}`,
                method: "PUT",
                body: rest,
            }),
        }),
        deleteItem: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAllItemsQuery,
    useGetItemQuery,
    useAddItemMutation,
    useUpdateItemMutation,
    useDeleteItemMutation,
} = itemsApi;
