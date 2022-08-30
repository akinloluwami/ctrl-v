import React from "react";

function Platform({ name, comingSoon, logo }) {
  console.log(logo);
  return (
    <div className="platform">
      {comingSoon && <p>Coming soon</p>}
      {name === "Blackberry" && <p>Just kidding lol</p>}
      <div className="platform__logo">{logo}</div>
      <h3>{name}</h3>
    </div>
  );
}

export default Platform;
