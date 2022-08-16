import { Box, Flex, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import moment from "moment";

function LinkDisplay({ link, createdAt }) {
  const [copy, setCopy] = useState(false);

  const truncate = (str) => {
    if (str.length > 30) {
      return str.slice(0, 30) + "...";
    }
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Text>{truncate(link)}</Text>
        <Text>{moment(createdAt).fromNow()}</Text>
      </Box>
      <Button
        onClick={() => {
          copyToClipboard(link);
        }}
      >
        Copy
      </Button>
    </Flex>
  );
}

export default LinkDisplay;
