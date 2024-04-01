import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <h2>ERROR</h2>
      <p>Page Not Found</p>
      <Link>
        <button>Homepage</button>
      </Link>
    </section>
  );
}
