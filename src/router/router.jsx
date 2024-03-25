import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import All from "../pages/Shop/Categories/All";
import Mens from "../pages/Shop/Categories/Mens";
import Womens from "../pages/Shop/Categories/Womens";
import Jewelery from "../pages/Shop/Categories/Jewelery";
import Electronics from "../pages/Shop/Categories/Electronics";
import Product from "../pages/Shop/Product/Product";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop",
            element: <All />,
          },
          {
            path: "/shop/men's clothing",
            element: <Mens />,
          },
          {
            path: "/shop/women's clothing",
            element: <Womens />,
          },
          {
            path: "/shop/jewelery",
            element: <Jewelery />,
          },
          {
            path: "/shop/electronics",
            element: <Electronics />,
          },
          {
            path: "/shop/:productId",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

export default router;
