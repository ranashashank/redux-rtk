import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter((cartItems) => cartItems.id !== action.payload); // new array []
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
