import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const BoardStack = createStackNavigator();

export default function BoardNavigator() {
  return (
    <BoardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BoardStack.Screen name="Home" component={Home} />
    </BoardStack.Navigator>
  );
}
