import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TaskListScreen from "./src/screens/TaskListScreen";
import AddTaskScreen from "./src/screens/AddTaskScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskListScreen">
          <Stack.Screen
            name="TaskListScreen"
            component={TaskListScreen}
            options={{ title: "To Do App" }}
          />
          <Stack.Screen
            name="AddTaskScreen"
            component={AddTaskScreen}
            options={{ title: "Create a task" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
