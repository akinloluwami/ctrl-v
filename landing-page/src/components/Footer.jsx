import React from "react";
import logo from "../assets/ctrlV_logo.png";
import NigerianFlag from "../assets/NigerianFlag";
import { IoLogoAndroid } from "react-icons/io";
import { BsApple, BsWindows } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";
import MacOs from "../assets/MacOs";
import { SiGooglechrome, SiVisualstudiocode, SiFigma } from "react-icons/si";
function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer__content">
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
      </div> */}

      <div className="footer_content">
        <div className="col-1">
          <div className="logo">
            <img src={logo} alt="ctrlV" />
          </div>
          <p className="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            saepe!
          </p>
          <ul className="f_link">
            <li className="link">
              <a href="">Home</a>
            </li>
            <li className="link">
              <a href="">Features</a>
            </li>
            <li className="link">
              <a href="">Platform</a>
            </li>
            <li className="link">
              <a href="">Pricing</a>
            </li>
            <li className="link">
              <a href="">Help</a>
            </li>
            <li className="link">
              <a href="">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <div className="">
            <h4>Get now on:</h4>
            <ul className="f_link device-lists">
              <li className="link">
                <a href="">
                  <SiGooglechrome />
                </a>
              </li>
              <li className="link">
                <a href="">
                  <SiVisualstudiocode />
                </a>
              </li>
              <li className="link">
                <a href="">
                  <SiFigma />
                </a>
              </li>
              <li className="link">
                <a href="">
                  <BsApple />
                </a>
              </li>
              <li className="link">
                <a href="">
                  <IoLogoAndroid />
                </a>
              </li>
              <li className="link">
                <a href="">
                  <BsWindows />
                </a>
              </li>
            </ul>
          </div>
          <div className="follow-us">
            <h4 className="head">Follow us on:</h4>
            <a href="Twitter" className="link">
              Twitter
            </a>
            <a href="Twitter" className="link">
              Instagram
            </a>
          </div>
          <div className="footer__bottom">
            <p className="footer__bottom__text">
              Made with <span>(x² + y² – 1)³ = x² y³ </span> in{" "}
              <img
                src="https://flagcdn.com/ng.svg"
                width="30"
                alt="Nigeria"
              ></img>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
