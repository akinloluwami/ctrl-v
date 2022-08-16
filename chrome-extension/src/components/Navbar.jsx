import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";

function Navbar({ selectedId, handleSelectedId }) {
  const NavItems = [
    {
      name: "Board",
      id: 1,
    },
    {
      name: "Send",
      id: 2,
    },
    {
      name: "Settings",
      id: 3,
    },
  ];
  return (
    <UnorderedList
      listStyleType={"none"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding="0.5em 0"
      backgroundColor="rgba(0,0,0,0.2)"
      width={"100%"}
      margin={"0"}
    >
      {NavItems.map((item) => (
        <ListItem key={item.name}>
          <Button
            color={selectedId === item.id ? "#fff" : "#646cff"}
            background={selectedId === item.id ? "#646cff" : "rgba(0,0,0,0.2)"}
            onClick={() => {
              handleSelectedId(item.id);
            }}
            _hover={{
              background: "#646cff",
              color: "#fff",
            }}
          >
            {item.name}
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default Navbar;
