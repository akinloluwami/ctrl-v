import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Home = () => {
  return (
    <View>
      <Text>Welcome to CtrlV</Text>
      <View>
        <Button title="Login" onPress={() => {}} />
        <Button
          title="Register"
          onPress={() => {
            AsyncStorage.removeItem("@viewedOnboarding");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
