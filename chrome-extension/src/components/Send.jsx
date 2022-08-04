import { Box, Button, Flex, Link, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import SendFile from "./send/File";
import SendText from "./send/Text";
import SendLink from "./send/Link";

function Send() {
  const [option, setOption] = useState(0);

  const options = [
    {
      id: 1,
      name: "Link",
      value: "link",
    },
    {
      id: 2,
      name: "Text",
      value: "text",
    },
    {
      id: 3,
      name: "File",
      value: "file",
    },
  ];

  return (
    <>
      <Text
        fontSize={"1.5em"}
        fontWeight={"bold"}
        textAlign={"center"}
        my={"2"}
      >
        What do you want to send?
      </Text>
      <Flex justifyContent={"space-between"} my={"3"}>
        {options.map((item) => (
          <Button
            key={item.id}
            onClick={() => setOption(item.id)}
            backgroundColor={option === item.id ? "#646cff" : "rgba(0,0,0,0.2)"}
          >
            {item.name}
          </Button>
        ))}
      </Flex>
      <Box>
        {!option && (
          <Text fontSize={"2em"} fontWeight={"bold"} textAlign={"center"}>
            Select an option
          </Text>
        )}
        {option === 1 && <SendLink />}
        {option === 2 && <SendText />}
        {option === 3 && <SendFile />}
      </Box>
    </>
  );
}

export default Send;
