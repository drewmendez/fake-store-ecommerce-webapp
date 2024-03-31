import { useCartItems } from "../../../store/cartStore";
import "./CartFooter.scss";

export default function CartFooter() {
  const cartItems = useCartItems((state) => state.cartItems);
  const totalValue = cartItems.length
    ? cartItems.reduce((total, cartItem) => {
        return Number((total + cartItem.total).toFixed(2));
      }, 0)
    : 0;

  return (
    <div className="cart-footer">
      <div className="container">
        <div className="wrapper">
          <h2>Total: ${totalValue}</h2>
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}
