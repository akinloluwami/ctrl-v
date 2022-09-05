import { StyleSheet, Text, View, Button } from "react-native";

import React, { useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../utils/colors";

export default LinkDisplay = ({ link }) => {
  const truncate = (str) => {
    if (str.length > 30) {
      return str.slice(0, 30) + "...";
    } else {
      return str;
    }
  };
  return (
    <View style={styles.container}>
      <Text>{truncate(link.link)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
