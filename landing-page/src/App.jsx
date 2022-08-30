import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
