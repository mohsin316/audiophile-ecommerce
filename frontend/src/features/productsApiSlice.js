import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `/products/category/${category}`,
      transformResponse: (responseData) => {
        return productsAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
