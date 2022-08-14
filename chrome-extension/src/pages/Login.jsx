import { useState } from "react";
import { Box, Text, Link, Img, Input, Button, Center } from "@chakra-ui/react";
import HashLoader from "react-spinners/HashLoader";
import { postData } from "../../utils/useAxios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    postData("/auth/login", { email, password }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("deviceToken", res.data.deviceToken);
        setSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        setLoading(false);
        setError(true);
        setErrorMessage(res.data.error);
      }
    });
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
      <Text fontSize="4em" fontWeight="bold" textAlign="center">
        CtrlV
      </Text>
      <Box width={"100%"}>
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
        {error &&
          errorMessage === "You have reached the maximum number of devices" && (
            <Box>
              <Text color="white" textAlign="center" mb="2">
                <Text
                  color="red.500"
                  textAlign={"center"}
                  backgroundColor="rgba(255, 0, 0, 0.1)"
                  borderRadius="lg"
                  padding={2}
                >
                  {errorMessage}
                </Text>
                <Link href="/pro" color="#646cff" fontWeight="500">
                  <br />
                  Upgrade to Pro{" "}
                </Link>
                to use CtrlV on up to 10 devices.
              </Text>
            </Box>
          )}
        {error &&
          errorMessage !== "You have reached the maximum number of devices" && (
            <Text
              color="red.500"
              textAlign={"center"}
              backgroundColor="rgba(255, 0, 0, 0.1)"
              borderRadius="lg"
              padding={2}
            >
              {errorMessage}
            </Text>
          )}
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          padding={"0.5em"}
          borderRadius={"0.25em"}
          border="1px solid #ccc"
          fontSize="1.2em"
          color="#fff"
          background={"transparent"}
          transition="all 0.2s ease-in-out"
          width="100%"
          margin="0.5em auto"
          _focus={{
            borderColor: "#646cff",
            outline: "none",
            boxShadow: "0 0 0.5em #646cff",
            background: "transparent",
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
          fontSize="1.2em"
          color="#fff"
          width="100%"
          margin="0.5em auto"
          background={"transparent"}
          transition="all 0.2s ease-in-out"
          _focus={{
            borderColor: "#646cff",
            outline: "none",
            boxShadow: "0 0 0.5em #646cff",
            background: "transparent",
          }}
        />
        <Center>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            padding={"0.5em"}
            borderRadius={"0.25em"}
            fontSize="1.2em"
            color="#fff"
            background={"#646cff"}
            transition="all 0.2s ease-in-out"
            width="100%"
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
                  size={20}
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
      <Text marginTop="1.2em" fontSize="1.2em">
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
