import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import CartWrapper from "./CartWrapper";
import "./index.css";

// ✅ Routing only
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Something went wrong 🚨</h1>,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <CartWrapper />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);