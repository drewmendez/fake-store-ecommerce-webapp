import { useRef } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useProducts } from "../../store/productStore";
import CardItem from "../CardItem/CardItem";
import "./Trending.scss";

export default function Trending() {
  const trendingProducts = useProducts((state) => state.products).filter(
    (product) => product.rating.count > 300
  );
  const isLoading = useProducts((state) => state.isLoading);
  const carouselRef = useRef();

  return (
    <section className="trending">
      <div className="top">
        <h2>Trending Now</h2>
        <div className="buttons">
          <button onClick={() => (carouselRef.current.scrollLeft -= 237)}>
            <FaArrowLeft />
          </button>
          <button onClick={() => (carouselRef.current.scrollLeft += 237)}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="loader">
          <BeatLoader size={15} color="black" />
        </div>
      ) : (
        <div ref={carouselRef} className="carousel">
          {trendingProducts.map((trendingProduct) => (
            <CardItem key={trendingProduct.id} product={trendingProduct} />
          ))}
        </div>
      )}
    </section>
  );
}
