import { createSlice } from "@reduxjs/toolkit";

const priceFilterSlice = createSlice({
  name: "priceFilter",
  initialState: {
    minPrice: "",
    maxPrice: "",
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    resetPriceFilter: (state) => {
      state.minPrice = "";
      state.maxPrice = "";
    },
  },
});

export const { setMinPrice, setMaxPrice, resetPriceFilter } =
  priceFilterSlice.actions;

export default priceFilterSlice.reducer;
