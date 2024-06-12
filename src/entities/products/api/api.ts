import { ParamsType } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsApiResponse } from "..";
import { setProducts } from "../model/productsSlice";

const BASE_URL = import.meta.env.VITE_PRODUCTS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_PRODUCTS_API_KEY;
console.log("Base URL:", BASE_URL);
console.log("API Key:", API_KEY);

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category,
          keywords,
        } = params || {};
        return {
          url: "search",
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setProducts(data.products));
      },
    }),
    getLatestProducts: builder.query<ProductsApiResponse, null>({
      query: () => {
        return {
          url: "latest-products",
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetLatestProductsQuery } = productsApi;
