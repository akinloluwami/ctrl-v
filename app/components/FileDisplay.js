import { StyleSheet, Text, View, Button } from "react-native";

import React, { useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import { useToast } from "react-native-toast-notifications";

import colors from "../utils/colors";

import { Ionicons } from "@expo/vector-icons";

export default FileDisplay = ({ fileFormat, fileName, fileUrl, fileSize }) => {
  const toast = useToast();
  const truncate = (str) => {
    if (str.length > 20) {
      return str.slice(0, 20) + "...";
    } else {
      return str;
    }
  };

  const preview = ["jpg", "png"];
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.link}>
        {truncate(fileName)}
        <Text style={{ color: colors.accent }}>{fileFormat.toUpperCase()}</Text>
      </Text>
      <Text
        style={{
          color: "white",
        }}
      >
        {formatBytes(fileSize)}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          toast.show("Downloading...", {
            duration: 2000,
          });
        }}
      >
        <Ionicons name="ios-cloud-download-outline" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    position: "relative",
  },
  from: {
    position: "absolute",
    top: 2,
    left: 10,
    color: "grey",
  },
  link: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.dots,
    padding: 7,
    borderRadius: 100,
  },
});
