import { Box, Flex, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import moment from "moment";
import { FaClone, FaCheck, FaClock, FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";

function FileDisplay({ fileUrl, createdAt, fileName, fileFormat, fileSize }) {
  const truncate = (str) => {
    if (str.length > 15) {
      return str.slice(0, 15) + "...";
    } else {
      return str;
    }
  };

  const downloadFile = () => {
    saveAs(fileUrl, `${fileName}.${fileFormat}`);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      my="15px"
      backgroundColor={"rgba(0,0,0,0.2"}
    >
      <img src={fileUrl} width="20%" />
      <Box>
        <Text fontWeight={"400"}>{truncate(fileName)}</Text>
        <Box fontSize={"10px"} display="flex" alignItems={"center"} gap="5px">
          <Text color={"green.200"} fontWeight="bold">
            {fileFormat?.toUpperCase() || "??"}
          </Text>

          <Text>{formatBytes(fileSize)}</Text>
        </Box>
      </Box>
      <Button
        onClick={() => {
          downloadFile();
        }}
        background={"#646cff"}
        _hover={{
          backgroundColor: "#649cff",
        }}
      >
        <FaDownload
          style={{
            backgroundColor: "transparent",
          }}
        />
      </Button>
    </Flex>
  );
}

export default FileDisplay;
