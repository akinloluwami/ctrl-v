import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./scss/App.scss";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1>CtrlV</h1>
    </div>
  );
}

export default App;
