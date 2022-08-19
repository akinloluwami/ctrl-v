import { StyleSheet, Text, View, Button, DevSettings } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Home = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.accent,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Get me litttt!!!! 🔥🔥🔥🔥🔥🔥🔥{" "}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
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
    fontSize: 18,
  },
});
