import { Link } from "react-router-dom";
import { useCartItems } from "../../../store/cartStore";
import { Rating } from "@smastrom/react-rating";
import { IoTrashBin } from "react-icons/io5";
import "./CartItem.scss";

export default function CartItem({ cartItem }) {
  return (
    <div className="cart-item">
      <div className="cart-product">
        <img src={cartItem.image} />
        <div className="details">
          <Link to={`/shop/${cartItem.id}`}>
            <h3 className="title">{cartItem.title}</h3>
          </Link>
          <p className="price">${cartItem.price.toFixed(2)}</p>
          <div className="status">
            <p className="rating">{cartItem.rate.toFixed(1)}</p>
            <div className="stars">
              <Rating
                readOnly
                style={{ maxWidth: 64, width: "100%" }}
                value={cartItem.rate}
              />
            </div>
          </div>
          <div className="qty-mobile">
            <CartQuantity cartItem={cartItem} />
          </div>
        </div>
      </div>
      <div className="cart-actions">
        <CartQuantity cartItem={cartItem} />
        <h3 className="total-price">${cartItem.total.toFixed(2)}</h3>
        <DeleteItem cartItem={cartItem} />
      </div>
    </div>
  );
}

function CartQuantity({ cartItem }) {
  const handleQuantity = useCartItems((state) => state.handleQuantity);

  return (
    <div className="cart-quantity">
      <button onClick={() => handleQuantity(cartItem, "remove")}>-</button>
      <p className="item-count">{cartItem.quantity}</p>
      <button onClick={() => handleQuantity(cartItem, "add")}>+</button>
    </div>
  );
}

function DeleteItem({ cartItem }) {
  const deleteItem = useCartItems((state) => state.deleteItem);

  return (
    <button className="delete" onClick={() => deleteItem(cartItem)}>
      <IoTrashBin />
      <p className="delete-text">Remove</p>
    </button>
  );
}
