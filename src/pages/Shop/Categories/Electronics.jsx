import { useProducts } from "../../../store/productStore";
import ShopCategories from "../ShopCategories/ShopCategories";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import GridLoader from "react-spinners/GridLoader";

export default function Electronics() {
  const electronicsProducts = useProducts((state) => state.products).filter(
    (product) => product.category === "electronics"
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
        <ProductGrid products={electronicsProducts} />
      )}
    </>
  );
}
