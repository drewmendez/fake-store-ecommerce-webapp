import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Store locator</a>
            <a href="#">FAQs</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>
          <p>
            Design Reference :{" "}
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://raouf.vercel.app"
            >
              Raouf Store
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
