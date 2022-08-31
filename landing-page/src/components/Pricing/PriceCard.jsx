import React from "react";

function PriceCard({
  plan,
  price,
  duration,
  features,
  buttonText,
  monthsFree,
}) {
  return (
    <div className="price">
      <h2 className="price__plan">{plan}</h2>
      <h1 className="price__price">
        ${price}
        <span>{duration}</span>
      </h1>
      {monthsFree && <p>{monthsFree} months free</p>}
      <ul className="price__features">
        {features.map((feature, i) => (
          <li key={i} className="price__features__feature">
            {feature}
          </li>
        ))}
      </ul>
      <button className="price__button">{buttonText}</button>
    </div>
  );
}

export default PriceCard;
