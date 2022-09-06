import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Send from "../screens/Send";
import Settings from "../screens/Settings";
import colors from "../utils/colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#202020",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Board"
        component={Home}
        options={{
          tabBarLabel: "Board",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "clipboard-check" : "clipboard"}
              size={24}
              color="#fff"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Send"
        component={Send}
        options={{
          tabBarLabel: "Send",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "paper-plane" : "paper-plane-outline"}
              color="#fff"
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color="#fff"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
