import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./utils/colors";
import RootNavigator from "./navigation/RootNavigator";
const Loading = () => {
  <View>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>;
};

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: colors.background } }}>
      <RootNavigator />
      <StatusBar backgroundColor="rgba(255,255,255,0.6)" />
    </NavigationContainer>
  );
}
