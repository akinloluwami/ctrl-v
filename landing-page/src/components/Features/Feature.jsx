import React from "react";
import { RiFlashlightFill } from "react-icons/ri";

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
      <div
        className="io"
        style={{
          color: color,
          backgroundColor: bg,
        }}
      >
        {icon}
      </div>
      <h2>{title}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default Feature;
