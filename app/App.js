import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./utils/colors";
import RootNavigator from "./navigation/RootNavigator";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./components/onboarding/Onboarding";
import AuthNavigator from "./navigation/AuthNavigator";
import BoardNavigator from "./navigation/BoardNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastProvider } from "react-native-toast-notifications";
import * as Notifications from "expo-notifications";

const Loading = () => {
  <View>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>;
};
const Root = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [onboardingViewed, setOnboardingViewed] = useState(false);

  useEffect(() => {
    Notifications.then((token) => console.log(token));
  }, []);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setOnboardingViewed(true);
      }
    } catch (err) {
      console.log("Error @checkOnboarding", err);
    }
  };

  useEffect(() => {
    checkOnboarding();
    console.log("onboardingViewed", onboardingViewed);
  }),
    [];
  const checkAuth = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.log("Error @checkAuth", err);
    } finally {
      return false;
    }
  };

  useEffect(() => {
    checkAuth();
  }),
    [checkAuth];
  return (
    <ToastProvider>
      <NavigationContainer
        theme={{ colors: { background: colors.background } }}
      >
        <RootNavigator />
        <StatusBar backgroundColor="rgba(255,255,255,0.6)" />
      </NavigationContainer>
    </ToastProvider>
  );
}
