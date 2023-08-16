import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../store/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { itemQuantities } = useSelector((state) => state.cartItems);

  const isItemInCart = itemQuantities.hasOwnProperty(product.id);
  const cartQuantity = isItemInCart ? itemQuantities[product.id] : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4 mb-4 transition duration-300 ease-in-out transform border rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain h-[100px] w-full"
        />
      </div>

      <h2 className="font-semibold text-md">{product.title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        {isItemInCart ? (
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <button
              className="btn btn-primary px-3 me-2"
              onClick={() => dispatch(decreaseItemQuantity(product.id))}
            >
              <i className="fas fa-minus"></i>
            </button>
            <div className="form-outline">
              <input
                id={`form-${product.id}`}
                min="0"
                name="quantity"
                value={cartQuantity}
                type="tel"
                className="form-control"
                onChange={() => null}
              />
              <label className="form-label" htmlFor={`form-${product.id}`}>
                {cartQuantity}
              </label>
            </div>
            <button
              className="btn btn-primary px-3 ms-2"
              onClick={() => dispatch(increaseItemQuantity(product.id))}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        ) : (
          <button
            className="px-2 py-2 mt-2 text-xs text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
