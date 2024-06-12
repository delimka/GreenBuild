import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  currentProducts: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.products = action.payload;
    },
    setCurrentProducts: (state, action: PayloadAction<IProducts | null>) => {  
      state.currentProducts = action.payload;
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

export const { setProducts, setFilters, setCurrentProducts } = productsSlice.actions;

export default productsSlice.reducer;
