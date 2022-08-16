import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getData } from "../../utils/useAxios";
import LinkDisplay from "./LinkDisplay";
function MainBoard() {
  const [links, setLinks] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    getData("/text", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        deviceToken: localStorage.getItem("deviceToken"),
      },
    }).then((res) => {
      console.log(res);
      setTexts(res.data.texts);
    });
  }, []);

  useEffect(() => {
    getData("/link", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        deviceToken: localStorage.getItem("deviceToken"),
      },
    }).then((res) => {
      setLinks(res.data.links);
    });
  }, []);

  return (
    <Box width="100%" margin={"auto"} marginTop="15px">
      {links.map((link, index) => (
        <LinkDisplay key={index} link={link.link} createdAt={link.createdAt} />
      ))}
    </Box>
  );
}

export default MainBoard;
