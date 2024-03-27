import { Link } from "react-router-dom";
import Banner1 from "../../../assets/banner1.jpg";
import Banner2 from "../../../assets/banner2.jpg";
import "./Banner.scss";

const details = {
  reverse: {
    title: "Retail Reverie: Finding Stories in Every Aisle",
    desc: "Shopping is not just about buying things, it's about the experience and the stories you create with each purchase.",
    image: Banner2,
  },

  notReverse: {
    title: "Fake Store: Where Convenience Reigns",
    desc: "Fake Store transforms the way we shop, offering convenience at our fingertips and a world of possibilities in every click.",
    image: Banner1,
  },
};

export default function Banner({ isReverse }) {
  return (
    <section className="banner">
      {isReverse ? (
        <BannerContainer isReverse={isReverse} details={details.reverse} />
      ) : (
        <BannerContainer isReverse={isReverse} details={details.notReverse} />
      )}
    </section>
  );
}

function BannerContainer({ isReverse, details }) {
  return (
    <div className="banner-card">
      <div className={`text ${isReverse ? "reverse" : ""}`}>
        <div className="text-container">
          <h2>{details.title}</h2>
          <p>{details.desc}</p>
          <Link to="/shop">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={details.image} alt="Banner" />
      </div>
    </div>
  );
}
