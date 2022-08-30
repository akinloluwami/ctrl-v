import React from "react";
import Feature from "./Feature";
import { VscExtensions, VscEllipsis } from "react-icons/vsc";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function Features() {
  const features = [
    {
      icon: <VscExtensions />,
      title: "Connect up to 10 devices",
      color: "#4336f4",
    },
    {
      icon: <BsFileEarmarkPlus />,
      title: "Up to 1GB per file",
      color: "#db307a",
    },
    {
      icon: <CgInfinity />,
      title: "Unlimited texts",
      color: "#ff5722",
    },
    {
      icon: <BsShieldLock />,
      title: "Secure",
      color: "#ffc522",
    },
    {
      icon: <AiOutlineDeploymentUnit />,
      title: "Cross-plaform",
      color: "#673ab7",
    },
    {
      icon: <VscEllipsis />,
      title: "...and more",
      color: "#4caf50",
    },
  ];
  return (
    <div className="features">
      {features.map((feature, _) => (
        <Feature
          key={_}
          title={feature.title}
          icon={feature.icon}
          color={feature.color}
        />
      ))}
    </div>
  );
}

export default Features;
