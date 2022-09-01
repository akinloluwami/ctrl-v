import React from "react";
import { SiTwitter } from "react-icons/si";

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
    </div>
  );
}

export default Social;
