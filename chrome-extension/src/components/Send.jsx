import {
  Box,
  Button,
  Flex,
  Link,
  Select,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import SendFile from "./send/File";
import SendText from "./send/Text";
import SendLink from "./send/Link";

function Send() {
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
      <Tabs variant="soft-rounded" colorScheme="purple" isFitted>
        <TabList>
          <Tab>Link</Tab>
          <Tab>Text</Tab>
          <Tab>File</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SendLink />
          </TabPanel>
          <TabPanel>
            <SendText />
          </TabPanel>
          <TabPanel>
            <SendFile />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Send;
