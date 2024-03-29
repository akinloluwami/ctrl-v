import { StyleSheet, Text, View, Platform, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { logout } from "../api/auth/UserAuth";

export default Settings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const getDeviceToken = async () => {
      const token = await AsyncStorage.getItem("deviceToken");
      setDeviceToken(token);
    };
    getDeviceToken();
  }),
    [deviceToken];

  useEffect(() => {
    const getJWT = async () => {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    };
    getJWT();
  }),
    [token];

  const handleLogout = async () => {
    console.log("Logging out...");
    setIsLoading(true);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("deviceToken");
    const response = await logout(deviceToken);
    if (response.status === 200) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("deviceToken");
      setIsLoading(false);
      console.log("Logged out.");
      setTimeout(() => {
        navigation.navigate("Auth", { screen: "Login" });
      }),
        1000;
    } else {
      setIsLoading(false);
      console.log("Error @handleLogout", response.data);
    }
  };
  const settingsOptions = [
    {
      title: "Connected Devices",
      icon: <MaterialIcons name="devices" size={24} color="#fff" />,
    },
    {
      title: "Manage Subscription",
      icon: <FontAwesome name="credit-card" size={24} color="#fff" />,
      pro: true,
    },
    {
      title: "Change Password",
      icon: <Octicons name="key-asterisk" size={24} color="#fff" />,
    },
    {
      title: "Download my data",
      icon: <AntDesign name="clouddownloado" size={26} color="#fff" />,
      pro: true,
    },
    {
      title: "Terms and Conditions",
      icon: <Octicons name="code-of-conduct" size={24} color="#fff" />,
    },
    {
      title: "Privacy Policy",
      icon: <Ionicons name="shield-checkmark-outline" size={24} color="#fff" />,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.name}></View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upgrade to Pro ⚡</Text>
      </TouchableOpacity>
      {settingsOptions.map((option, _) => (
        <TouchableOpacity key={_} style={styles.settingsOption}>
          <Text style={styles.settingsOptionIcon}> {option.icon}</Text>
          <Text style={styles.settingsOptionText}>{option.title}</Text>
          {option.pro && <Text style={styles.pro}>Pro</Text>}
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          handleLogout();
        }}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Logging out..." : "Logout"}
        </Text>
      </TouchableOpacity>
      {/* <Button 
        title="Logout"
        onPress={() => {
          handleLogout();
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsOption: {
    marginLeft: 25,
    marginVertical: 30,
    display: "flex",
    flexDirection: "row",
  },
  pro: {
    color: "#fff",
    marginLeft: 10,
    color: colors.accent,
  },
  settingsOptionText: {
    fontSize: 17,
    marginLeft: 15,
    color: "#fff",
  },
  container: {
    paddingTop: Platform.OS === "android" ? 90 : 0,
    backgroundColor: colors.background,
    width: "100%",
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgba(0, 145, 254, 0.5)",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    width: "90%",
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "rgba(255, 0, 0, 0.35)",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    width: "90%",
  },
  text: {
    color: colors.text,
    fontSize: 18,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  name: {
    width: "90%",
    height: 100,
    marginHorizontal: 20,
    backgroundColor: "rgba(0, 145, 254, 0.2)",
    borderRadius: 10,
  },
});
