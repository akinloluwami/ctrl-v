import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
