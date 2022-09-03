import { Box, Flex, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import moment from "moment";
import { FaClone, FaCheck, FaClock } from "react-icons/fa";

function LinkDisplay({ link, createdAt }) {
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);

  const truncate = (str) => {
    if (str.length > 30) {
      return str.slice(0, 30) + "...";
    } else {
      return str;
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
    <Flex
      justifyContent="space-between"
      alignItems="center"
      my="15px"
      backgroundColor={"rgba(0,0,0,0.2"}
    >
      <Box>
        <Text fontWeight={"400"}>{truncate(link)}</Text>
        <Text fontSize={"10px"} display="flex" alignItems={"center"} gap="5px">
          <FaClock />
          {moment(createdAt).fromNow()}
        </Text>
      </Box>
      <Button
        onClick={() => {
          copyToClipboard(link);
        }}
        background={"#646cff"}
        _hover={{
          backgroundColor: "#649cff",
        }}
      >
        <Box
          transition="all ease 0.5s"
          backgroundColor="transparent"
          transform={`rotate(${copy ? "45deg" : "0"})}`}
        >
          {!copy ? (
            <FaClone
              style={{
                backgroundColor: "transparent",
              }}
            />
          ) : (
            <FaCheck
              style={{
                backgroundColor: "transparent",
                transform: "rotate(-45deg)",
              }}
            />
          )}
        </Box>
      </Button>
    </Flex>
  );
}

export default LinkDisplay;
