import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Button, Flex, Link, Input } from "@chakra-ui/react";
import { getData, postData } from "../utils/useAxios";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const res = await postData("/auth/login", data);
    if (res.status === 200) {
      setSuccess(true);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("deviceToken", res.data.deviceToken);
      setTimeout(() => {
        router.push("/board/main");
      }, 200);
    } else {
      setError(true);
      setErrorMessage(res.error);
      console.log(res);
    }
  };

  return (
    <Box height="100vh" backgroundColor={"black"}>
      <Text>Login</Text>

      <Box>
        {error && (
          <Box>
            <Text color="red.500">{errorMessage}</Text>
            <Button>
              <Link href="/pro">Upgrade to Pro</Link>
            </Button>
          </Box>
        )}
        {success && (
          <Text
            color="green.500"
            textAlign={"center"}
            backgroundColor="rgba(0, 255, 0, 0.1)"
            borderRadius="lg"
            padding={2}
          >
            Login successful
          </Text>
        )}
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variantcolor="teal"
          variant="solid"
          backgroundColor="teal.500"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default login;
