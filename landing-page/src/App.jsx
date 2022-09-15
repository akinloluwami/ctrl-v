import { useState } from "react";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import Platforms from "./components/Platforms/Platforms";
import Pricing from "./components/Pricing/Pricing";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  console.log(window.navigator.userAgentData);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Platforms />
      <Pricing />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
