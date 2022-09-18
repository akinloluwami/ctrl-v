import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { postData } from "../../../utils/useAxios";

function SendFile() {
  const inputRef = useRef();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState();
  const [fileType, setFileType] = useState();
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [domImage, setDomImage] = useState("");

  const handleFileInput = async (e) => {
    setDomImage();
    setFile(e?.target.files[0]);
    setFileName(e?.target.files[0].name.split(".")[0]);
    setFileSize(e?.target.files[0].size);
    setFileType(e?.target.files[0].type);
    if (e?.target.files[0].type.includes("image")) {
      setDomImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleClick = () => {
    inputRef.current.click();
  };

  const uploadFile = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("upload", file);
    formData.append("filename", fileName);

    const res = await postData("/file", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        deviceToken: localStorage.getItem("deviceToken"),
      },
    });
    if (res.status === 201) {
      setUploading(false);
      setFile();
      setSuccess(true);
      setSuccessMessage(res.data.message);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      console.log(res);
    }
  };
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  };
  return (
    <>
      <Input
        ref={inputRef}
        type={"file"}
        onChange={handleFileInput}
        display={"none"}
      />

      {success && (
        <Text
          color="green.500"
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
        >
          {successMessage}
        </Text>
      )}
      <Button
        backgroundColor={"#646cff"}
        color={"white"}
        width={"100%"}
        my={3}
        onClick={() => {
          handleClick();
          handleFileInput();
        }}
        disabled={uploading}
      >
        {!file ? "Select file" : "Change file"}
      </Button>
      {file && (
        <Box>
          <Text>File info</Text>
          <p>Filename: {fileName}</p>
          <p>Size: {formatBytes(fileSize)}</p>
          <p>Type: {fileType}</p>
        </Box>
      )}
      {domImage && <img src={domImage} width="50%" />}
      <Button
        onClick={uploadFile}
        backgroundColor={"#646cff"}
        color={"white"}
        width={"100%"}
        my={3}
        disabled={!file || uploading}
      >
        {uploading ? "Uploading..." : "Upload file"}
      </Button>
    </>
  );
}

export default SendFile;
