import { StyleSheet, Text, View, Button, DevSettings } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../api/auth/UserAuth";

export default Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState("");

  useEffect(() => {
    const getDeviceToken = async () => {
      const token = await AsyncStorage.getItem("deviceToken");
      setDeviceToken(token);
    };
    getDeviceToken();
  }),
    [deviceToken];

  const handleLogout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("deviceToken");
    const response = await logout(deviceToken);
    if (response.status === 200) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("deviceToken");
      setIsLoading(false);
      setTimeout(() => {
        navigation.navigate("Auth", { screen: "Login" });
      }),
        1000;
    } else {
      setIsLoading(false);
      console.log("Error @handleLogout", response.data);
    }
  };

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
      <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.text}>
          {isLoading ? "Logging out..." : "Logout"}
        </Text>
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
