import { Link } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";
import "./CardItem.scss";

export default function CardItem({ product }) {
  return (
    <div className="card">
      <Link to={`/shop/${product.id}`}>
        <img className="image" src={product.image} />
        <div className="details">
          <h3>{product.title}</h3>

          <p>${product.price.toFixed(2)}</p>
          <div className="status">
            <Rating
              readOnly
              style={{ maxWidth: 70, width: "100%" }}
              value={product.rating.rate}
            />
            <p>{product.rating.count} sold</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
