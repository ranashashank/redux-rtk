import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const total = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4 border">
      <h2 className="mb-4 text-lg font-semibold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              <div>
                <span className="font-semibold">{item.title}</span> - $
                {item.price.toFixed(2)}
              </div>
              <div className="flex items-center justify-between">
                <span className="">Qty - 1</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
          <li className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Cart;
