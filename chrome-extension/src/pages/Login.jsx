import { useState } from "react";
import { Box, Text, Link, Img, Input, Button, Center } from "@chakra-ui/react";
import HashLoader from "react-spinners/HashLoader";
import { postData } from "../utils/useAxios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem("token", "123");
    setTimeout(() => {
      setLoading(false);
      window.location.reload();
    }, 5000);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      padding={2}
    >
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <Img
            src="/vite.svg"
            alt="Vite logo"
            height="10em"
            padding="1.5em"
            willChange={"filter"}
            _hover={{
              filter: "drop-shadow(0 0 2em #646cffaa)",
            }}
            background="transparent"
          />
        </Link>
      </Box>
      <Text
        fontSize="4em"
        fontWeight="bold"
        textAlign="center"
        marginBottom="1em"
      >
        CtrlV
      </Text>
      <Box width={"100%"}>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          padding={"0.5em"}
          borderRadius={"0.25em"}
          border="1px solid #ccc"
          fontSize="1.5em"
          color="#fff"
          background={"transparent"}
          transition="all 0.2s ease-in-out"
          width="100%"
          margin="0.5em auto"
          _focus={{
            borderColor: "#646cff",
            outline: "none",
            boxShadow: "0 0 0.5em #646cff",
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          //   margin="0.5em"
          padding={"0.5em"}
          borderRadius={"0.25em"}
          border="1px solid #ccc"
          fontSize="1.5em"
          color="#fff"
          width="100%"
          margin="0.5em auto"
          background={"transparent"}
          transition="all 0.2s ease-in-out"
          _focus={{
            borderColor: "#646cff",
            outline: "none",
            boxShadow: "0 0 0.5em #646cff",
          }}
        />
        <Center>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            padding={"0.5em"}
            borderRadius={"0.25em"}
            border="1px solid #ccc"
            fontSize="1.5em"
            color="#fff"
            background={"transparent"}
            transition="all 0.2s ease-in-out"
            width="90%"
            margin="0.5em auto"
            _focus={{
              borderColor: "#646cff",
              outline: "none",
              boxShadow: "0 0 0.5em #646cff",
            }}
            _hover={{
              background: "#646cff",
              color: "#fff",
              borderColor: "#646cff",
              boxShadow: "0 0 0.5em #646cff",
            }}
          >
            {loading ? (
              <Center>
                <HashLoader
                  size={35}
                  color={"#fff"}
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </Center>
            ) : (
              "Login"
            )}
          </Button>
        </Center>
      </Box>
      <Text marginTop="1em" fontSize="1.3em">
        New to CtrlV?{" "}
        <Link
          href="https://vitejs.dev/docs/ctrl-v"
          target="_blank"
          color="#646cff"
        >
          Create an account
        </Link>
      </Text>
    </Box>
  );
}

export default Login;
