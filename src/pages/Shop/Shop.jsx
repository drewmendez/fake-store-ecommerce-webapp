import { Outlet } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

export default function Shop() {
  return (
    <>
      <main className="container">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
