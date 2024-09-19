import { Link } from "react-router-dom";

import GroceriesBg from "../../../assets/groceries.jpg";
import BeautyBg from "../../../assets/beauty.jpg";
import FragrancesBg from "../../../assets/fragrances.jpg";
import FurnitureBg from "../../../assets/furniture.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">
        <div
          className="hero-card men"
          style={{ backgroundImage: `url(${GroceriesBg})` }}
        >
          <Link to="/shop/groceries">
            <p>Groceries</p>
          </Link>
        </div>
        <div
          className="hero-card women"
          style={{ backgroundImage: `url(${BeautyBg})` }}
        >
          <Link to="/shop/beauty">
            <p>Beauty Products</p>
          </Link>
        </div>
        <div
          className="hero-card jewelry"
          style={{ backgroundImage: `url(${FragrancesBg})` }}
        >
          <Link to="/shop/fragrances">
            <p>Fragrances</p>
          </Link>
        </div>
        <div
          className="hero-card electronics"
          style={{ backgroundImage: `url(${FurnitureBg})` }}
        >
          <Link to="/shop/furniture">
            <p>Furnitures</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
