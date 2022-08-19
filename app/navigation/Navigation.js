import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Signup from "../screens/auth/Signup";
import Login from "../screens/auth/Login";

const Stack = createStackNavigator();

export default function Navigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
