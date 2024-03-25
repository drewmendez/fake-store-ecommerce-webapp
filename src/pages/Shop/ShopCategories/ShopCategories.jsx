import { NavLink } from "react-router-dom";
import { useTitle } from "../../../hooks/useTitle";
import "./ShopCategories.scss";

const CATEGORIES = [
  {
    text: "All",
    link: "",
  },
  {
    text: "Men's",
    link: "/men's clothing",
  },
  {
    text: "Women's",
    link: "/women's clothing",
  },
  {
    text: "Jewelery",
    link: "/jewelery",
  },
  {
    text: "Electronics",
    link: "/electronics",
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
