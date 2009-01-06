import { useEffect } from "react";
import logo from "../../assets/ctrlV_logo.png";
import { IoLogoAndroid } from "react-icons/io";
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
  useEffect(() => {
    document.querySelectorAll(".circular > *").forEach((el, i) => {
      //  var letter = text[i];
      // var span = document.createElement('span');
      // var node = document.createTextNode(el);
      var r = (360 / 11) * i;
      var x = (Math.PI / 11).toFixed(0) * i;
      var y = (Math.PI / 11).toFixed(0) * i;
      // span.appendChild(node);
      el.style.webkitTransform =
        "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
      el.style.transform =
        "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
      // element.appendChild(span);
    });
  }, []);
  return (
    <>
      <h1 className="h1__text">Supported Platforms</h1>
      <div className="platforms">
        <img src={logo} className="logo" />
        <div className="circular">
          {platforms.map((platform) => (
            <Platform
              key={platforms.indexOf(platform)}
              name={platform.name}
              comingSoon={platform.comingSoon}
              logo={platform.logo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Platforms;
