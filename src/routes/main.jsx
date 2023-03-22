import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { products } from "data/dummy";
import Layout from "@/components/Layout/Layout";
import ProductsScreen from "@/screens/Products/ProductsScreen";
import NoPage from "@/screens/NoPage/NoPage";
import ProductDetails from "@/screens/Products/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        path: "category/:categoryId/",
        element: <ProductsScreen products={products} />,
        children: [
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export const setActive = ({ isActive }) =>
  isActive ? { color: "coral" } : { color: "white" };

export default MainRouter;
