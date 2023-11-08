// styles
import "./Navbar.css";

// images
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import Headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Arrow from "../assets/shared/desktop/icon-arrow-right.svg";

// imports
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

export default function Navbar() {
  const [open, isOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <button onClick={() => isOpen(!open)}>
            <img src={Hamburger} alt="hamburger-menu" />
          </button>
          <Link className="logo-link" to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <nav className={`primary-navigation ${open ? "open" : "close"}`}>
            <ul className="flow spacer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <img src={Headphone} alt="headphone-navigation" />
                <Link to="headphones">Headphones</Link>
                <Link className="mobile-only" to="headphones">
                  SHOP
                  <div
                    style={{ backgroundImage: `url(${Arrow})` }}
                    className="mobile-only-arrow"
                  ></div>
                </Link>
              </li>
              <li>
                <img src={Speaker} alt="speaker-navigation" />
                <Link to="speakers">Speakers</Link>
                <Link className="mobile-only" to="speakers">
                  SHOP
                  <div
                    style={{ backgroundImage: `url(${Arrow})` }}
                    className="mobile-only-arrow"
                  ></div>
                </Link>
              </li>
              <li>
                <img src={Earphone} alt="earphone-navigation" />
                <Link to="earphones">Earphones</Link>
                <Link className="mobile-only" to="earphones">
                  SHOP
                  <div
                    style={{ backgroundImage: `url(${Arrow})` }}
                    className="mobile-only-arrow"
                  ></div>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="cart">
            <img src={Cart} alt="cart" />
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
