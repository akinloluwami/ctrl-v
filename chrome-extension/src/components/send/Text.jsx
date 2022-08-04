import { Button, Textarea } from "@chakra-ui/react";
import React from "react";

function SendText() {
  return (
    <>
      <Textarea placeholder="Paste text" my={3} height="200px" />
      <Button backgroundColor={"#646cff"} color={"white"} width={"100%"}>
        Send
      </Button>
    </>
  );
}

export default SendText;
