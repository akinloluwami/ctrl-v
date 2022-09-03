import { Box, Button, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheck, FaClone } from "react-icons/fa";

function TextDisplay({ text, createdAt }) {
  const [copy, setCopy] = useState(false);
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
    <Box my="20px" position={"relative"}>
      <Textarea
        value={text}
        outline="none"
        border={"1px solid #aaa"}
        overflowY="hidden"
        readOnly
      />
      <Button
        onClick={() => {
          copyToClipboard(text);
        }}
        background={"#646cff"}
        height="25px"
        width="25px"
        padding="5px"
        _hover={{
          backgroundColor: "#649cff",
        }}
        position="absolute"
        right={"5px"}
        top="5px"
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
    </Box>
  );
}

export default TextDisplay;
