import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainBoard from "../components/MainBoard";
import Navbar from "../components/Navbar";
import Send from "../components/Send";
import Settings from "../components/Settings";

function BoardLayout() {
  const [selectedId, setSelectedId] = useState(1);
  const handleSelectedId = useCallback(
    (id) => {
      setSelectedId(id);
    },
    [selectedId]
  );

  return (
    <Box>
      <Navbar selectedId={selectedId} handleSelectedId={handleSelectedId} />
      {selectedId === 2 ? (
        <Send />
      ) : selectedId === 3 ? (
        <Settings />
      ) : (
        <MainBoard />
      )}
    </Box>
  );
}

export default BoardLayout;
