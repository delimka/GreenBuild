=import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entities/products/model/productsSlice";
import { categoriesApi } from "@/entities/category/api/categoriesApi";
import { productsApi } from "@/entities/products/api/api";

export const rootReducer = combineReducers({
  products: newsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});