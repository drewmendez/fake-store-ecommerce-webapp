import CartFooter from "./CartFooter/CartFooter";
import CartView from "./CartView/CartView";

export default function ShoppingCart() {
  return (
    <>
      <main className="container" style={{ minHeight: "calc(100vh - 13rem)" }}>
        <CartView />
      </main>
      <CartFooter />
    </>
  );
}
