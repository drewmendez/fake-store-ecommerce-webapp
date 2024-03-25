import { Link } from "react-router-dom";

import Menbg from "../../../assets/mens-bg.jpg";
import Womenbg from "../../../assets/womens-bg.jpg";
import Jewelrybg from "../../../assets/jewelry-bg.jpg";
import Electronicsbg from "../../../assets/electronics-bg.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">
        <div
          className="hero-card men"
          style={{ backgroundImage: `url(${Menbg})` }}
        >
          <Link to="/shop/men's clothing">
            <p>Men's Clothing</p>
          </Link>
        </div>
        <div
          className="hero-card women"
          style={{ backgroundImage: `url(${Womenbg})` }}
        >
          <Link to="/shop/women's clothing">
            <p>Women's Clothing</p>
          </Link>
        </div>
        <div
          className="hero-card jewelry"
          style={{ backgroundImage: `url(${Jewelrybg})` }}
        >
          <Link to="/shop/jewelery">
            <p>Jewelry</p>
          </Link>
        </div>
        <div
          className="hero-card electronics"
          style={{ backgroundImage: `url(${Electronicsbg})` }}
        >
          <Link to="/shop/electronics">
            <p>Electronics</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
