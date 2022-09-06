import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/auth/Signup";
import Login from "../screens/auth/Login";
import AuthNavigator from "./AuthNavigator";
import BoardNavigator from "./BoardNavigator";
import Onboarding from "../components/onboarding/Onboarding";
import TabNavigator from "./TabNavigator";

const Root = createStackNavigator();

export default function RootNavigator() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Onboarding" component={Onboarding} />

      <Root.Screen name="Auth" component={AuthNavigator} />
      {/* <Root.Screen name="Board" component={BoardNavigator} />
       */}
      <Root.Screen name="Tab" component={TabNavigator} />
    </Root.Navigator>
  );
}
