import React from "react";
import { useState } from "react";
import PriceCard from "./PriceCard";
import { IoMdArrowDropdown } from "react-icons/io";

function Pricing() {
  const freeFeatures = [
    "2 connected devices",
    "25MB per file",
    "Access on all supported platforms",
    "1,000 words",
    "10 links per day",
    "Auto delete after 7 days",
    "Access to all future updates",
    "Download 10 files per minute",
  ];
  const proFeatures = [
    "Up to 10 connected devices",
    "250MB per file",
    "Access on all supported platforms",
    "15,000 words",
    "Unlimited links per day",
    "No auto delete",
    "Access to all future updates",
    "Unlimited file downloads",
    "New beta feature testing",
  ];
  const billingCycles = [
    {
      label: "Monthly",
      value: "monthly",
    },
    {
      label: "Yearly",
      value: "yearly",
    },
    {
      label: "2 Years",
      value: "2-years",
    },
  ];
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(2.99);
  const [duration, setDuration] = useState("/month");
  const [monthsFree, setMonthsFree] = useState();
  return (
    <div className="pricing" id="pricing">
      <h1 className="pricing__text">Pricing</h1>
      <div className="pricing__billingCycle">
        <p>Billing Cycle</p>
        <div className="pricing__billingCycle__content">
          <button
            className="pricing__billingCycle__content__button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {billingCycle}
            <IoMdArrowDropdown className={`io ${isOpen ? "rotate" : ""}`} />
          </button>
          <div
            className={`pricing__billingCycle__content__options ${
              isOpen ? "open" : ""
            }`}
          >
            {billingCycles.map((bC, _) => (
              <button
                key={_}
                className="pricing__billingCycle__content__options__option"
                onClick={() => {
                  setBillingCycle(bC.label);
                  setIsOpen(false);
                  if (bC.label === "Yearly") {
                    setDuration("/year");
                    setPrice(29.99);
                    setMonthsFree(2);
                  } else if (bC.label === "Monthly") {
                    setDuration("/month");
                    setPrice(2.99);
                    setMonthsFree();
                  } else {
                    setDuration("/2 years");
                    setPrice(56.81);
                    setMonthsFree(5);
                  }
                }}
              >
                {bC.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pricing__container">
        <PriceCard
          plan={"Free"}
          price={0}
          duration={"forever"}
          features={freeFeatures}
          buttonText={"Download"}
        />
        <PriceCard
          plan={"Pro"}
          price={price}
          duration={duration}
          features={proFeatures}
          buttonText={"Get Pro"}
          monthsFree={monthsFree}
        />
      </div>
    </div>
  );
}

export default Pricing;
