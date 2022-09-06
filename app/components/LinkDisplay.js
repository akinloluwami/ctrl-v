import { StyleSheet, Text, View, Button } from "react-native";

import React, { useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import { useToast } from "react-native-toast-notifications";

import { Feather } from "@expo/vector-icons";

import colors from "../utils/colors";

import * as Clipboard from "expo-clipboard";

export default LinkDisplay = ({ link }) => {
  const toast = useToast();
  const truncate = (str) => {
    if (str.length > 30) {
      return str.slice(0, 30) + "...";
    } else {
      return str;
    }
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.link}>{truncate(link)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          copyToClipboard();
          toast.show("Copied to clipboard", {
            duration: 2000,
          });
        }}
      >
        <Feather name="clipboard" size={18} color="white" />
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
  },
  link: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.dots,
    padding: 7,
    borderRadius: 100,
  },
});
