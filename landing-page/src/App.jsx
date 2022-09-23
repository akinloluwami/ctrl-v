import { useRef } from "react";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import Platforms from "./components/Platforms/Platforms";
import Pricing from "./components/Pricing/Pricing";
import Social from "./components/Social";
import Footer from "./components/Footer";


import "locomotive-scroll/dist/locomotive-scroll.min.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence, motion } from "framer-motion";

const scrollOptions = {
  smooth: true,
  //  multiplier:.6,
  inertial: 0.8,
};

function App() {
  const ref = useRef(null);
  console.log(window.navigator.userAgentData);
  return (
    <LocomotiveScrollProvider
      watch={[]}
      options={scrollOptions}
      containerRef={ref}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="home"
          className="App"
          data-scroll-container
          id="app"
          ref={ref}
        >
          <Navbar />
          <Hero />
          <Features />
          <Platforms />
          <Pricing />
          <Social />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}

export default App;
