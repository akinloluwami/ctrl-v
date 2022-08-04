import { Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function MainBoard() {
  const [count, setCount] = useState(0);

  //count seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <Text fontSize={"2em"} fontWeight={"bold"} textAlign={"center"}>
        {count}
      </Text>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}

export default MainBoard;
