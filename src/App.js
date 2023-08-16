import React from "react";
import "./App.css";
import CartPage from "./Pages/CartPage";
import ProductListPage from "./Pages/ProductListPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderPage from "./Pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ProductListPage />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <CartPage />
      </>
    ),
  },
  {
    path: "/order",
    element: (
      <>
        <Navbar />
        <OrderPage />
      </>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
