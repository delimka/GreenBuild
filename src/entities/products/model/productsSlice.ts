import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilters } from "../../../shared/interfaces";
import { PAGE_SIZE } from "../../../shared/constants/constants";
import { IProducts } from "..";

interface State {
  products: IProducts[];
  filters: IFilters;
  currentProducts: IProducts | null;
}

const initialState: State = {
  products: [],
  currentProduts: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProducts>[]) => {
      state.products = action.payload;
    },
    setCurrentPrudcts: (state, action: PayloadAction<IProducts | null>) => {
      state.currentNews = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setProducts, setFilters, setCurrentProducts } = products.Slice.actions;

export default newsSlice.reducer;
