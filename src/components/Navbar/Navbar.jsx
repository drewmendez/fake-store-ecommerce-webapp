import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDisableScroll } from "../../hooks/useDisableScroll";

import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const [top, setTop] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navRef.current.classList.add("shrink");
        setTop("73.89px");
      } else {
        navRef.current.classList.remove("shrink");
        setTop("105.89px");
      }
    });
  }, []);

  useDisableScroll(isOpen);

  return (
    <>
      <header>
        <div className="container">
          <div ref={navRef} className="wrapper">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/shop">SHOP</NavLink>
            </nav>
            <div className="logo">
              <Link to="/">
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
  return (
    <Link to="/" className="cart-link">
      <PiShoppingCartSimpleLight className="cart-icon" />
      <span className="cart-count">0</span>
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
      <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
        HOME
      </NavLink>
      <NavLink to="/shop" onClick={() => setIsOpen(!isOpen)}>
        SHOP
      </NavLink>
    </div>
  );
}
