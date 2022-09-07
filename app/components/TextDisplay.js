import { StyleSheet, Text, View, Button } from "react-native";

import React, { useState } from "react";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { useToast } from "react-native-toast-notifications";

import { Feather } from "@expo/vector-icons";

import colors from "../utils/colors";

import * as Clipboard from "expo-clipboard";

export default TextDisplay = ({ text }) => {
  const toast = useToast();
  const truncate = (str) => {
    if (str.length > 200) {
      return str.slice(0, 200) + "...";
    } else {
      return str;
    }
  };
  const truncated = truncate(text);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={5}
        multiline={true}
        value={truncated}
        editable={false}
        spellCheck={false}
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          copyToClipboard();
          toast.show("Copied to clipboard", {
            duration: 2000,
          });
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Copy
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#3d3d3d",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    position: "relative",
  },
  textArea: {
    color: colors.text,
  },
  button: {
    // position: "absolute",
    backgroundColor: colors.dots,
    padding: 7,
    borderRadius: 10,
    width: 100,
  },
});
