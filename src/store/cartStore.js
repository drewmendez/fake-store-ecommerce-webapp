import { create } from "zustand";

export const useCartItems = create((set, get) => ({
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  addToCart: (id, image, title, price, quantity) => {
    const duplicate = get().cartItems.find((item) => item.id === id);

    if (duplicate) {
      const dupIndex = get().cartItems.indexOf(duplicate);
      const prevQty = get().cartItems[dupIndex].quantity;
      const prevPrice = get().cartItems[dupIndex].price;

      set({
        cartItems: [
          ...get().cartItems.slice(0, dupIndex),
          {
            ...get().cartItems[dupIndex],
            quantity: Number(prevQty + quantity),
            total: Number((prevQty + quantity) * prevPrice),
          },
          ...get().cartItems.slice(dupIndex + 1),
        ],
      });
      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    } else {
      set({
        cartItems: [
          ...get().cartItems,
          {
            id,
            image,
            title,
            price,
            quantity,
            total: Number((price * quantity).toFixed(2)),
          },
        ],
      });
      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    }
  },
}));
