import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDisableScroll } from "../../hooks/useDisableScroll";
import { useCartItems } from "../../store/cartStore";

import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setTop("73.89px");
      } else {
        setTop("105.89px");
      }
    });
  }, []);

  useDisableScroll(isOpen);

  return (
    <>
      <header>
        <div className="container">
          <div
            className="wrapper"
            style={{ paddingBlock: `${top === "73.89px" ? "1rem" : "2rem"}` }}
          >
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/shop">SHOP</NavLink>
            </nav>
            <div className="logo">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={Logo} alt="Fake Store" width={100} />
              </Link>
            </div>

            <div className="right">
              <IoIosSearch className="search-icon" />
              <CartLink />
            </div>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} top={top} />
    </>
  );
}

function CartLink() {
  const cartCount = useCartItems((state) => state.cartItems);

  return (
    <Link to="/" className="cart-link">
      <PiShoppingCartSimpleLight className="cart-icon" />
      <p className="cart-count" key={cartCount.length}>
        {cartCount.length}
      </p>
    </Link>
  );
}

function Menu({ isOpen, setIsOpen }) {
  return (
    <div className="menu">
      {!isOpen ? (
        <CiMenuBurger onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
}

function MobileNav({ isOpen, setIsOpen, top }) {
  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`} style={{ top: top }}>
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        HOME
      </NavLink>
      <NavLink to="/shop" onClick={() => setIsOpen(false)}>
        SHOP
      </NavLink>
    </div>
  );
}
