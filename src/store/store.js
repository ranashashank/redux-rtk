import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import priceFilterReducer from "./priceFilterSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cartItems: cartSlice,
    priceFilter: priceFilterReducer,
  },
});

export default store;
