import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getData, postData } from "../../utils/useAxios";
import FileDisplay from "./FileDisplay";
import LinkDisplay from "./LinkDisplay";
import TextDisplay from "./TextDisplay";
function MainBoard() {
  const [links, setLinks] = useState([]);
  const [texts, setTexts] = useState([]);
  const [files, setFiles] = useState([]);
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
  const getFiles = () => {
    getData("/file", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        deviceToken: localStorage.getItem("deviceToken"),
      },
    }).then((res) => {
      setFiles(res.data.files);
    });
  };

  useEffect(() => {
    getLinks();
    getTexts();
    getFiles();
  }, []);

  useEffect(() => {
    setData([...links, ...texts, ...files]);
  }, [links, texts, files]);

  return (
    <Box width="100%" margin={"auto"} marginTop="15px">
      <>
        {data
          ?.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((d, index) =>
            d.link ? (
              <LinkDisplay key={index} link={d.link} createdAt={d.createdAt} />
            ) : d.text ? (
              <TextDisplay key={index} text={d.text} createdAt={d.createdAt} />
            ) : (
              <FileDisplay
                key={index}
                fileName={d.fileName}
                createdAt={d.createdAt}
                fileUrl={d.fileUrl}
                fileFormat={d.fileFormat}
                fileSize={d.fileSize}
              />
            )
          )}
      </>
    </Box>
  );
}

export default MainBoard;
