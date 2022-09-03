import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { postData } from "../../utils/useAxios";

function Settings() {
  return (
    <>
      <Text fontSize={"2em"} fontWeight={"bold"} textAlign={"center"}>
        Settings
      </Text>
      <Button
        onClick={() => {
          postData("/auth/logout", {
            deviceToken: localStorage.getItem("deviceToken"),
          })
            .then((res) => {
              localStorage.removeItem("token");
              localStorage.removeItem("deviceToken");
              console.log(res);
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Logout
      </Button>
    </>
  );
}

export default Settings;
