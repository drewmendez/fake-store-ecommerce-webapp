import { create } from "zustand";

export const useProducts = create((set) => ({
  products: [],
  isLoading: false,
  fetchProducts: async () => {
    // const URL = "https://fakestoreapi.com/products";
    const URL = "https://dummyjson.com/products";

    set({ isLoading: true });
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (!response.ok) {
        console.log("404");
      }

      set({ products: data.products });
    } catch (error) {
      console.log("error");
    } finally {
      set({ isLoading: false });
    }
  },
}));
