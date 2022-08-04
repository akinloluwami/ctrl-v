import { Button } from "@chakra-ui/react";
import React from "react";

function SendFile() {
  return (
    <>
      <Button backgroundColor={"#646cff"} color={"white"} width={"100%"} my={3}>
        Select file
      </Button>
    </>
  );
}

export default SendFile;
