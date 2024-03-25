import CardItem from "../CardItem/CardItem";
import "./ProductGrid.scss";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  );
}
