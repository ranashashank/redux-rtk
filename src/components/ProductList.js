import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  // const products = useSelector((state) => state.products);
  return (
    <div className="grid grid-cols-3 gap-4">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
