import {
  StyleSheet,
  Text,
  View,
  Button,
  DevSettings,
  FlatList,
  SafeAreaView,
} from "react-native";
import colors from "../utils/colors";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Send = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to send?</Text>
      {/* <View style={styles.boxes}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: colors.background,
    width: "100%",
  },
  // box: {
  //   width: 100,
  //   height: 50,
  //   backgroundColor: "red",
  // },
  button: {
    marginTop: 20,
    backgroundColor: colors.accent,
    alignItems: "center",
    color: colors.text,
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  text: {
    color: colors.text,
    fontSize: 24,
    textAlign: "center",
  },
});
