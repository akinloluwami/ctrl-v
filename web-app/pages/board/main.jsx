import React, { useState, useEffect } from "react";
import { Button, Text, Flex, Link, Box } from "@chakra-ui/react";
import { postData, getData } from "../../utils/useAxios";
import { useRouter } from "next/router";
function main() {
  const router = useRouter();
  const [deviceToken, setDeviceToken] = useState("");
  useEffect(() => {
    setDeviceToken(localStorage.getItem("deviceToken"));
  }, []);

  const handleLogout = () => {
    postData("/auth/logout", {
      deviceToken,
    }).then((res) => {
      console.log(res);
      localStorage.removeItem("deviceToken");
      localStorage.removeItem("token");

      setTimeout(()=>{
        router.push("/login")
      },300)
    });
  };
  return (
    <Box height="100vh" color="#fff">
      <Text>Main board</Text>

      <Button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default main;
