import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo"></div>
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
        <a href="#">
          <button>Sign Up</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;