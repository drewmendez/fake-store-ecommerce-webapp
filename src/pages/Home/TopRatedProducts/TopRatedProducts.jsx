import { useProducts } from "../../../store/productStore";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import GridLoader from "react-spinners/GridLoader";
import "./TopRatedProducts.scss";

export default function TopRatedProducts() {
  const topRatedProducts = useProducts((state) => state.products).filter(
    (product) => product.rating.rate >= 4 || product.rating.rate === 3.8
  );
  const isLoading = useProducts((state) => state.isLoading);

  return (
    <section className="top-rated">
      <h2>Our Top-Rated Products</h2>
      {isLoading ? (
        <div className="loader">
          <GridLoader color="black" size={15} />
        </div>
      ) : (
        <ProductGrid products={topRatedProducts} />
      )}
    </section>
  );
}
