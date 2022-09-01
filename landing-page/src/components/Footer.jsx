import React from "react";
import logo from "../assets/ctrlV_logo.png";
import NigerianFlag from "../assets/NigerianFlag";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__item">
          <h3>Platforms</h3>
          <ul>
            <li>
              <a href="">Android</a>
            </li>
            <li>
              <a href="">iOS</a>
              <sup>Coming soon</sup>
            </li>
            <li>
              <a href="">Windows</a>
              <sup>Coming soon</sup>
            </li>
            <li>
              <a href="">Mac</a>
              <sup>Coming soon</sup>
            </li>
            <li>
              <a href="">Linux</a>
              <sup>Coming soon</sup>
            </li>
            <li>
              <a href="">Chrome</a>
            </li>
            <li>
              <a href="">Edge</a>
            </li>
            <li>
              <a href="">FireFox</a>
              <sup>Coming soon</sup>
            </li>
            <li>
              <a href="">Visual Studio Code</a>
              <sup>Coming soon</sup>
            </li>
            <li>
              <a href="">Figma</a>
              <sup>Coming soon</sup>
            </li>
          </ul>
        </div>
        <div className="footer__content__item">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="https://twitter.com/ctrlVapp">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer__content__item">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="footer__content__item">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Cookie Policy</a>
            </li>
            <li>
              <a href="">Help center</a>
            </li>
            <li>
              <a href="">Affiliate</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <img src={logo} className="footer__bottom__logo" />
        <p className="footer__bottom__text">
          Made with <span>(x² + y² – 1)³ = x² y³ </span> in{" "}
          <img src="https://flagcdn.com/ng.svg" width="30" alt="Nigeria"></img>
        </p>
      </div>
    </div>
  );
}

export default Footer;
