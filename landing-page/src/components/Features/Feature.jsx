import React from "react";
import { RiFlashlightFill } from "react-icons/ri";
import { motion } from "framer-motion";
function Feature({ icon, title, text, color }) {
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      return r + "," + g + "," + b;
    }
    return null;
  }
  const bg = `rgba(${hexToRgb(color)}, 0.15)`;
  return (
    <div className="feature">
      <motion.div
        className="io"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          color: color,
          backgroundColor: bg,
        }}
      >
        {icon}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </motion.p>
    </div>
  );
}

export default Feature;
