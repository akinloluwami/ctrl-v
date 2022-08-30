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
  return (
    <>
      <h1 className="h1__text">Supported Platforms</h1>
      <div className="platforms">
        {platforms.map((platform) => (
          <Platform
            name={platform.name}
            comingSoon={platform.comingSoon}
            logo={platform.logo}
          />
        ))}
      </div>
    </>
  );
}

export default Platforms;
