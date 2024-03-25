import ShopCategories from "../ShopCategories/ShopCategories";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import { useProducts } from "../../../store/productStore";
import GridLoader from "react-spinners/GridLoader";

export default function Womens() {
  const womensProducts = useProducts((state) => state.products).filter(
    (product) => product.category === "women's clothing"
  );
  const isLoading = useProducts((state) => state.isLoading);

  return (
    <>
      <ShopCategories />
      {isLoading ? (
        <div className="loading">
          <GridLoader size={15} color="black" />
        </div>
      ) : (
        <ProductGrid products={womensProducts} />
      )}
    </>
  );
}
