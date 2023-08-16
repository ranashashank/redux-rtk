import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  orders: [],
  itemQuantities: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      state.itemQuantities[id] = (state.itemQuantities[id] || 0) + 1;
      if (state.itemQuantities[id] <= 1) state.cart.push(action.payload);
    },
    getCartTotal: (state, action) => {
      const { totalQuant, totalPr } = state.cart.reduce(
        (total, item) => {
          const itemTotal = item.price * state.itemQuantities[item.id];
          total.totalQuant += state.itemQuantities[item.id];
          total.totalPr += itemTotal;
          return total;
        },
        {
          totalQuant: 0,
          totalPr: 0,
        }
      );
      state.totalPrice = parseInt(totalPr.toFixed(2));
      state.totalQuantity = totalQuant;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      delete state.itemQuantities[action.payload];
    },
    increaseItemQuantity: (state, action) => {
      state.itemQuantities[action.payload] += 1;
    },
    decreaseItemQuantity: (state, action) => {
      if (state.itemQuantities[action.payload] > 0)
        state.itemQuantities[action.payload] -= 1;
      if (state.itemQuantities[action.payload] === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        delete state.itemQuantities[action.payload];
      }
    },

    placeOrder: (state, action) => {
      console.log(action.payload);
      if (action.payload.length >= 1) {
        state.orders.push({
          id: new Date().getTime(),
          items: action.payload,
          date: new Date().toLocaleString("en-GB"),
        });
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.itemQuantities = {};
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  getCartTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
  placeOrder,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
