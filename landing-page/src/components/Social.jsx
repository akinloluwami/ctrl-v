import React from "react";
import { SiTwitter } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";

function Social() {
  return (
    <div className="social">
      <SiTwitter className="social__icon" />
      <h1 className="social__title">Stay in touch</h1>
      <p className="social__text">
        We want to stay connected to our users on Twitter.
        <br />
        Follow <a href="https://twitter.com/ctrlVapp">@ctrlVapp</a> for all the
        latest updates.
      </p>

      <button className="scroll-down-btn-indicator">
        <FaArrowDown />
      </button>
    </div>
  );
}

export default Social;
