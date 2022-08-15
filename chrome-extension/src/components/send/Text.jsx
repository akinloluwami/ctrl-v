import { Button, Textarea, Text, Box, Link } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { postData } from "../../../utils/useAxios";

function SendText() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendText = async () => {
    setLoading(true);
    const data = {
      text,
    };
    try {
      const res = await postData("/text", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          deviceToken: localStorage.getItem("deviceToken"),
        },
      });
      if (res.status === 200) {
        setSuccess(true);
        setError(false);
        setText("");
        inputRef.current.value = "";
        setLoading(false);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setLoading(false);
        setError(true);
        setSuccess(false);
        console.log(res.data.error);
        setErrorMessage(res.data.error);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
      setSuccess(false);
    }
  };
  return (
    <>
      {error && (
        <Text textAlign="center" fontWeight={"bold"} color="red.500">
          {errorMessage}
        </Text>
      )}
      {error && errorMessage === "Word limit is 250" && (
        <Box>
          <Text textAlign={"center"}>
            <Link href="/pro" fontWeight={"bold"} color="#646cff">
              Upgrade to Pro
            </Link>{" "}
            to send up to 10,000 words.
          </Text>
        </Box>
      )}
      {success && (
        <Text textAlign="center" fontWeight={"bold"} color="green.500">
          Text sent successfully
        </Text>
      )}
      <Textarea
        placeholder="Paste text"
        my={3}
        height="200px"
        onChange={(e) => {
          setText(e.target.value);
        }}
        ref={inputRef}
      />
      <Button
        backgroundColor={"#646cff"}
        color={"white"}
        width={"100%"}
        disabled={loading || text.length < 10}
        onClick={handleSendText}
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </>
  );
}

export default SendText;
