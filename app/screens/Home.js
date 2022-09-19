import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Button,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../utils/colors";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import { getFiles, getLinks, getTexts } from "../api/data/data";
import LinkDisplay from "../components/LinkDisplay";
import TextDisplay from "../components/TextDisplay";

export default Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState("");
  const [JWT, setJWT] = useState("");
  const [texts, setTexts] = useState([]);
  const [links, setLinks] = useState([]);
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

  const getTextsData = async () => {
    const response = await getTexts();
    if (response.status === 200) {
      setTexts(response.data.texts);
      setRefreshing(false);
    } else {
      console.log(response.data.error);
    }
  };
  const getLinksData = async () => {
    const response = await getLinks();

    if (response.status === 200) {
      setLinks(response.data.links);
      setRefreshing(false);
    } else {
      console.log(response.data.error);
    }
  };

  const getFilesData = async () => {
    const response = await getFiles();
    console.log(response);

    if (response.status === 200) {
      setFiles(response.data.files);
      setRefreshing(false);
    } else {
      console.log(response.data.error);
    }
  };

  useEffect(() => {
    setData([...links, ...texts, ...files]);
  }, [links, texts, files]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getLinksData();
    getTextsData();
    getFilesData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#fff"
        />
      }
    >
      {data.length < 1 && <Text style={styles.nodata}>No data</Text>}
      {data
        ?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((d, i) => {
          if (d.link) {
            return <LinkDisplay key={i} link={d.link} />;
          } else if (d.text) {
            return <TextDisplay key={i} text={d.text} />;
          } else {
            return <Text>File</Text>;
          }
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: colors.background,
    marginHorizontal: 20,
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
  nodata: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
  },
});
