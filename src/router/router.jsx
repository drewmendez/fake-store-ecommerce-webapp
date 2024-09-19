import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import All from "../pages/Shop/Categories/All";
import Groceries from "../pages/Shop/Categories/Groceries";
import Beauty from "../pages/Shop/Categories/Beauty";
import Fragrances from "../pages/Shop/Categories/Fragrances";
import Furniture from "../pages/Shop/Categories/Furniture";
import Product from "../pages/Shop/Product/Product";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
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
            path: "/shop/groceries",
            element: <Groceries />,
          },
          {
            path: "/shop/beauty",
            element: <Beauty />,
          },
          {
            path: "/shop/fragrances",
            element: <Fragrances />,
          },
          {
            path: "/shop/furniture",
            element: <Furniture />,
          },
          {
            path: "/shop/:productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default router;
