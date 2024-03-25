import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import TopRatedProducts from "./TopRatedProducts/TopRatedProducts";
import Trending from "../../components/Trending/Trending";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <TopRatedProducts />
        <Banner isReverse={false} />
        <Trending />
        <Banner isReverse={true} />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
