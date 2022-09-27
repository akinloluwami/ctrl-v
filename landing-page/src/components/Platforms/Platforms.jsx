import { useEffect, useRef } from "react";
import logo from "../../assets/ctrlV_logo.png";
import { motion } from "framer-motion";
import { BsApple, BsWindows } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";
import MacOs from "../../assets/MacOs";
import {
  SiGooglechrome,
  SiMicrosoftedge,
  SiFirefox,
  SiVisualstudiocode,
  SiFigma,
  SiBlackberry,
  SiAndroid,
} from "react-icons/si";
import Platform from "./Platform";

function Platforms() {
  const platforms = [
    {
      name: "Android",
      comingSoon: false,
      logo: <SiAndroid />,
    },
    {
      name: "iOS",
      comingSoon: true,
      logo: <BsApple />,
    },
    {
      name: "Blackberry",
      comingSoon: false,
      logo: <SiBlackberry />,
    },
    {
      name: "Windows",
      comingSoon: true,
      logo: <BsWindows />,
    },
    {
      name: "Linux",
      comingSoon: true,
      logo: <VscTerminalLinux />,
    },
    {
      name: "MacOS",
      comingSoon: true,
      logo: <MacOs />,
    },
    {
      name: "Chrome",
      comingSoon: false,
      logo: <SiGooglechrome />,
    },
    {
      name: "Edge",
      comingSoon: false,
      logo: <SiMicrosoftedge />,
    },
    {
      name: "FireFox",
      comingSoon: false,
      logo: <SiFirefox />,
    },
    {
      name: "Visual Studio",
      comingSoon: true,
      logo: <SiVisualstudiocode />,
    },
    {
      name: "Figma",
      comingSoon: true,
      logo: <SiFigma />,
    },
  ];
  const elements = useRef([]);
  useEffect(() => {
    if (elements.current) {
      elements.current.forEach((el, i) => {
        var r = (360 / elements.current.length) * i;
        var x = (Math.PI / elements.current.length).toFixed(0) * i;
        var y = (Math.PI / elements.current.length).toFixed(0) * i;

        el.style.webkitTransform =
          "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
        el.style.transform =
          "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
      });
    }
  }, [elements]);
  return (
    <>
      <motion.h1
        className="h1__text"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Supported Platforms
      </motion.h1>
      <div className="platforms">
        <img src={logo} className="logo" />
        <motion.div className="circular">
          {platforms.map((platform) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              ref={(e) => elements.current.push(e)}
            >
              <Platform
                key={platforms.indexOf(platform)}
                name={platform.name}
                comingSoon={platform.comingSoon}
                logo={platform.logo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Platforms;
