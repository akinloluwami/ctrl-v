import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Signup from "../screens/auth/Signup";
import Login from "../screens/auth/Login";
import AuthNavigator from "./AuthNavigator";
import BoardNavigator from "./BoardNavigator";
import Onboarding from "../components/onboarding/Onboarding";

const Root = createStackNavigator();

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [onboardingViewed, setOnboardingViewed] = useState(false);

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
    <Root.Navigator screenOptions={{ headerShown: false }}>
      {!onboardingViewed && (
        <Root.Screen name="Onboarding" component={Onboarding} />
      )}
      <Root.Screen name="Auth" component={AuthNavigator} />
      <Root.Screen name="Board" component={BoardNavigator} />
    </Root.Navigator>
  );
}
