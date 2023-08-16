import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { fetchProducts, setProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  resetPriceFilter,
} from "../store/priceFilterSlice";

function ProductListPage() {
  // const [products, setProducts] = useState([]);
  //react-redux
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const { minPrice, maxPrice } = useSelector((state) => state.priceFilter);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

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
  useEffect(() => {
    if (products.length > 0) {
      const filteredByTitle = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      const filteredByPrice = filteredByTitle.filter((product) => {
        const productPrice = parseFloat(product.price);
        return (
          (minPrice === "" || productPrice >= parseFloat(minPrice)) &&
          (maxPrice === "" || productPrice <= parseFloat(maxPrice))
        );
      });

      setFilteredProducts(filteredByPrice);
    }
  }, [searchInput, minPrice, maxPrice, products]);

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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="relative my-2 mr-6">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => dispatch(setMinPrice(e.target.value))}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => dispatch(setMaxPrice(e.target.value))}
            />
            <button
              className="px-4 py-1 border-0 rounded shadow bg-purple-white  hover:translate-y-0.5 transform transition"
              onClick={(e) => dispatch(resetPriceFilter())}
            >
              Reset filter
            </button>
          </div>
        </div>

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductListPage;
