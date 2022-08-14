import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Button, Flex, Link, Input } from "@chakra-ui/react";
import { getData, postData } from "../utils/useAxios";

function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };
    const res = await postData("/auth/signup", data);
    console.log(res);
  };

  return (
    <Box height="100vh" backgroundColor={"black"}>
      <Text>Signup</Text>
      <Box>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variantcolor="teal"
          variant="solid"
          backgroundColor="teal.500"
          onClick={(e) => handleSignup(e)}
        >
          Signup
        </Button>
      </Box>
    </Box>
  );
}

export default signup;
