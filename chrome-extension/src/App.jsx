import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./pages/Board";
import Login from "./pages/Login";
import "./App.scss";

function App() {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <Box color={"#fff"} width="350px" height="500px" margin={"auto"}>
      {isLoggedIn ? <Board /> : <Login />}
    </Box>
  );
}

export default App;
