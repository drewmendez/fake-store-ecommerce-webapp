import { NavLink } from "react-router-dom";
import { useTitle } from "../../../hooks/useTitle";
import "./ShopCategories.scss";

const CATEGORIES = [
  {
    text: "All",
    link: "",
  },
  {
    text: "Groceries",
    link: "/groceries",
  },
  {
    text: "Beauty",
    link: "/beauty",
  },
  {
    text: "Fragrances",
    link: "/fragrances",
  },
  {
    text: "Furniture",
    link: "/furniture",
  },
];

export default function ShopCategories() {
  const title = useTitle();

  return (
    <div className="categories">
      <h2>{title}</h2>
      <nav>
        {CATEGORIES.map((CATEGORY, index) => (
          <NavLink key={index} to={`/shop${CATEGORY.link}`} end>
            {CATEGORY.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
