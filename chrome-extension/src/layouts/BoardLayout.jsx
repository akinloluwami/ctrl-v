import {
  Box,
  Button,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import MainBoard from "../components/MainBoard";
import Send from "../components/Send";
import Settings from "../components/Settings";

function BoardLayout() {
  return (
    <Tabs isFitted>
      <TabList position={"sticky"} top={"0"} zIndex={"99999999"}>
        <Tab>Board</Tab>
        <Tab>Send</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MainBoard />
        </TabPanel>
        <TabPanel>
          <Send />
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default BoardLayout;
