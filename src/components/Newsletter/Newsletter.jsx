import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="wrapper">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
