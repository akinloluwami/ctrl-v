import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getData, postData } from "../../utils/useAxios";
import LinkDisplay from "./LinkDisplay";
import TextDisplay from "./TextDisplay";
function MainBoard() {
  const [links, setLinks] = useState([]);
  const [texts, setTexts] = useState([]);
  const [data, setData] = useState([]);

  const getTexts = () => {
    getData("/text", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        deviceToken: localStorage.getItem("deviceToken"),
      },
    }).then((res) => {
      setTexts(res.data.texts);
    });
  };

  const getLinks = () => {
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
  };

  useEffect(() => {
    getLinks();
    getTexts();
  }, []);

  useEffect(() => {
    setData([...links, ...texts]);
  }, [links, texts]);

  return (
    <Box width="100%" margin={"auto"} marginTop="15px">
      <>
        {data
          ?.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((d, index) => {
            if (d.type == "link") {
              return (
                <LinkDisplay
                  key={index}
                  link={d.link}
                  createdAt={d.createdAt}
                />
              );
            } else {
              return (
                <TextDisplay
                  key={index}
                  text={d.text}
                  createdAt={d.createdAt}
                />
              );
            }
          })}
      </>
    </Box>
  );
}

export default MainBoard;
