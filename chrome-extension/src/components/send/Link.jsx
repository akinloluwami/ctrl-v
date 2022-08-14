import { Box, Button, Input } from "@chakra-ui/react";
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
      const res = await postData("/link", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          deviceToken: localStorage.getItem("deviceToken"),
        },
      });
      if (res.status === 200) {
        setSuccess(true);
        setError(false);
        setLink("");
        inputRef.current.value = "";
        console.log(res.data);
        setLoading(false);
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
