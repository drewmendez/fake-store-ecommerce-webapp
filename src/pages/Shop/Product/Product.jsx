import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../store/productStore";
import { Rating } from "@smastrom/react-rating";
import Trending from "../../../components/Trending/Trending";
import "./Product.scss";
import SquareLoader from "react-spinners/SquareLoader";
import { BsCartPlus } from "react-icons/bs";

export default function Product() {
  const { productId } = useParams();
  const product = useProducts((state) => state.products).find(
    (item) => item.id === parseInt(productId)
  );

  return (
    <>
      {product === undefined ? (
        <div className="loading">
          <SquareLoader size={100} color="black" />
        </div>
      ) : (
        <ProductItem product={product} />
      )}

      <Trending />
    </>
  );
}

function ProductItem({ product }) {
  return (
    <section className="product">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="details">
        <div className="top">
          <h2 className="title">{product.title}</h2>
          <div className="status">
            <p className="rating">{product.rating.rate.toFixed(1)}</p>
            <div className="stars">
              <Rating
                readOnly
                style={{ maxWidth: 90, width: "100%" }}
                value={product.rating.rate}
              />
            </div>
            <p className="count">{product.rating.count} sold</p>
          </div>
          <p className="desc">{product.description}</p>
        </div>

        <div className="bottom">
          <h3 className="price">${product.price.toFixed(2)}</h3>
          <Quantity />
          <div className="buttons">
            <AddToCartButton />
            <BuyButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity">
      <p>Quantity</p>
      <div className="quantity-control">
        <button
          onClick={() => (quantity !== 1 ? setQuantity(quantity - 1) : null)}
        >
          -
        </button>
        <p className="item-count">{quantity}</p>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}

function AddToCartButton() {
  return (
    <button className="addtocart-btn">
      <BsCartPlus /> Add to Cart
    </button>
  );
}

function BuyButton() {
  return <button className="buy-btn">Buy Now</button>;
}
