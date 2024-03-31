import { useCartItems } from "../../../store/cartStore";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../../../assets/empty-cart.png";
import "./CartView.scss";
import { Link } from "react-router-dom";

export default function CartView() {
  const cartItems = useCartItems((state) => state.cartItems);

  return (
    <section className="cart">
      <h2>Shopping Cart ({cartItems.length})</h2>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <div className="cart-empty">
          <img src={EmptyCart} />
          <h3>Your cart is empty</h3>
          <Link to="/shop">
            <button>Keep Browsing</button>
          </Link>
        </div>
      )}
    </section>
  );
}
