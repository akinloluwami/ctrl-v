import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState, Fragment, useRef } from "react";
import { postData } from "../../../utils/useAxios";

function SendLink() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef();

  const handleSendLink = async () => {
    setLoading(true);
    const data = {
      link,
    };
    try {
      const res = await postData("/link", data, {
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
        setLink("");
        inputRef.current.value = "";
        setLoading(false);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setLoading(false);
        console.log(res.data.error);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
      setSuccess(false);
    }
  };

  return (
    <Fragment>
      <Box>
        {success && (
          <Text
            color="green.500"
            fontSize="lg"
            fontWeight="bold"
            textAlign="center"
          >
            Link sent successfully
          </Text>
        )}
        <Input
          type="text"
          placeholder="Paste link here"
          my={3}
          onChange={(e) => setLink(e.target.value)}
          ref={inputRef}
        />
        <Button
          backgroundColor={"#646cff"}
          color={"white"}
          width={"100%"}
          onClick={handleSendLink}
          disabled={loading || link === ""}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </Box>
    </Fragment>
  );
}

export default SendLink;
