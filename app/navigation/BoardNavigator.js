import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Main from "../screens/Main";

const BoardStack = createStackNavigator();

export default function BoardNavigator() {
  return (
    <BoardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BoardStack.Screen name="Main" component={Main} />
    </BoardStack.Navigator>
  );
}
