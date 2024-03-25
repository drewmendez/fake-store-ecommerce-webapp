import { useEffect } from "react";
import { useProducts } from "./store/productStore";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

export default function App() {
  const fetchProducts = useProducts((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <RouterProvider router={router} />;
}
