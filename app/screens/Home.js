import {
  StyleSheet,
  Text,
  View,
  Button,
  DevSettings,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../api/auth/UserAuth";
import { getLinks, getTexts } from "../api/data/data";
import LinkDisplay from "../components/LinkDisplay";

export default Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState("");
  const [JWT, setJWT] = useState("");
  const [texts, setTexts] = useState([]);
  const [links, setLinks] = useState([]);
  const [data, setData] = useState([]);
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
      setJWT(token);
    };
    getJWT();
  }),
    [JWT];

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

  const getTextsData = async () => {
    const response = await getTexts(JWT, deviceToken);
    // console.log(response);
    if (response.status === 200) {
      setTexts(response.data.texts);
    }
  };
  const getLinksData = async () => {
    const response = await getLinks(JWT, deviceToken);
    // console.log(response);
    if (response.status === 200) {
      setLinks(response.data.links);
    }
  };

  useEffect(() => {
    getTextsData();
    getLinksData();
  }, []);

  useEffect(() => {
    setData([...links, ...texts]);
  }, [links, texts]);

  return (
    <View style={styles.container}>
      {data
        ?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((d, index) => {
          if (d.type == "link") {
            return <Text>{d.link}</Text>;
          } else {
            return <Text>Hellooooo</Text>;
          }
        })}
      <TouchableOpacity
        onPress={() => {
          fetch("https://fakestoreapi.com/products/1")
            .then((res) => res.json())
            .then((json) => console.log(json));
        }}
      >
        <Text>Fetch</Text>
      </TouchableOpacity>
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
