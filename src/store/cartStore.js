import { create } from "zustand";
import Swal from "sweetalert2";

export const useCartItems = create((set, get) => ({
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  addToCart: (id, image, title, price, rate, quantity) => {
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
          {
            id,
            image,
            title,
            price,
            rate,
            quantity,
            total: Number((price * quantity).toFixed(2)),
          },
          ...get().cartItems,
        ],
      });
      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    }
  },
  deleteItem: (cartItem) => {
    Swal.fire({
      title: "Do you want to remove this item?",
      text: cartItem.title,
      showCancelButton: true,
      confirmButtonColor: "#d71414",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "delete-notify",
        cancelButton: "no-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        get().cartItems.splice(get().cartItems.indexOf(cartItem), 1);
        set({
          cartItems: [...get().cartItems],
        });
        localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
      }
    });
  },
  handleQuantity: (cartItem, action) => {
    console.log(action);
    if (action === "add") {
      set({
        cartItems: [
          ...get().cartItems.slice(0, get().cartItems.indexOf(cartItem)),
          {
            ...get().cartItems[get().cartItems.indexOf(cartItem)],
            quantity: Number(cartItem.quantity + 1),
            total: Number((cartItem.quantity + 1) * cartItem.price),
          },
          ...get().cartItems.slice(get().cartItems.indexOf(cartItem) + 1),
        ],
      });
      localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
    } else {
      if (cartItem.quantity === 1) {
        get().deleteItem(cartItem);
      } else {
        set({
          cartItems: [
            ...get().cartItems.slice(0, get().cartItems.indexOf(cartItem)),
            {
              ...get().cartItems[get().cartItems.indexOf(cartItem)],
              quantity: Number(cartItem.quantity - 1),
              total: Number((cartItem.quantity - 1) * cartItem.price),
            },
            ...get().cartItems.slice(get().cartItems.indexOf(cartItem) + 1),
          ],
        });
        localStorage.setItem("cartItems", JSON.stringify(get().cartItems));
      }
    }
  },
}));
