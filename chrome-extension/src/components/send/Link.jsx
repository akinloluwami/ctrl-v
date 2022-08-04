import { Box, Button, Input } from "@chakra-ui/react";
import React, { Fragment } from "react";

function SendLink() {
  return (
    <Fragment>
      <Box>
        <Input type="text" placeholder="Paste link here" my={3} />
        <Button backgroundColor={"#646cff"} color={"white"} width={"100%"}>
          Send
        </Button>
      </Box>
    </Fragment>
  );
}

export default SendLink;
