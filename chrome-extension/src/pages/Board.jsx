import { Box, Button } from "@chakra-ui/react";
import React from "react";
import "../App.scss";
import BoardLayout from "../layouts/BoardLayout";

function Board() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return <BoardLayout></BoardLayout>;
}

export default Board;
