import React from "react";
import { SiTwitter } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

function Social() {
  return (
    <div className="social">
      <SiTwitter className="social__icon" />
      <motion.h1
        className="social__title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Stay in touch
      </motion.h1>
      <motion.p
        className="social__text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        We want to stay connected to our users on Twitter.
        <br />
        Follow <a href="https://twitter.com/ctrlVapp">@ctrlVapp</a> for all the
        latest updates.
      </motion.p>

      <button className="scroll-down-btn-indicator">
        <FaArrowDown />
      </button>
    </div>
  );
}

export default Social;
