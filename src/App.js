import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";
import { fetchProducts, setProducts } from "./store/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [products, setProducts] = useState([]);
  //react-redux
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);
  // const [cartItems, setCartItems] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  // const removeCartItem = (id) => {
  //   const cartFilter = cartItems.filter((product) => product.id !== id);
  //   setCartItems([...cartFilter]);
  // };

  useEffect(() => {
    // axios
    //   .get("https://dummyjson.com/products")
    //   .then((response) => {
    //     dispatch(setProducts(response.data["products"]));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching products:", error);
    //   });
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex justify-between">
          <h1 className="mb-4 text-2xl font-semibold">Products Page</h1>
          <div className="relative my-2 mr-6">
            <input
              type="search"
              className="px-4 py-1 border-0 rounded shadow bg-purple-white"
              placeholder="Search by name..."
            />
          </div>
        </div>
        <ProductList />
      </div>
      <div className="sticky top-0 w-[30%] bg-gray-100 p-4 -webkit-sticky max-h-[100vh]  overflow-y-auto  no-scrollbar">
        <Cart />
      </div>
    </div>
  );
}

export default App;
