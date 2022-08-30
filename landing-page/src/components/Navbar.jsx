import React from "react";
import logo from "../assets/ctrlV_logo.png";
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__links__link">
            <a href="#">Features</a>
          </li>
          <li className="navbar__links__link">
            <a href="#">Platforms</a>
          </li>
          <li className="navbar__links__link">
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="navbar__ctas">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="navbar__toggle">
          <RiMenu4Fill className="io" />
        </div>
      </div>
      <div className="navbar__mobile__menu"></div>
    </div>
  );
}

export default Navbar;
