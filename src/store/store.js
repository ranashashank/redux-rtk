import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cartItems: cartSlice,
  },
});

export default store;
