import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/taskSlice";

const TaskListScreen = () => {
  const navigation = useNavigation();
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => {
            Alert.alert(
              "Warning",
              "Are you sure to delete task?",
              [
                {
                  text: "No",
                  style: "cancel"
                },
                {
                  text: "Yes",
                  onPress: () => dispatch(removeTask(item.id))
                }
              ]
            )
          }}>
            <View style={styles.taskContainer}>
              <Text style={styles.task}>{item.title}</Text>
              <Text
                style={{
                  fontSize: 16,
                  paddingHorizontal: 10,
                  paddingTop: 2,
                  fontWeight: "400",
                  paddingBottom: 5,
                  color: "#7286D3",
                }}
              >
                {item.task}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addTask}
        onPress={() => {
          navigation.navigate("AddTaskScreen");
        }}
      >
        <Text style={{ fontSize: 36, color: "#FFF2F2" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2F2",
    alignItems: "center",
  },

  taskContainer: {
    width: (Dimensions.get("screen").width * 95) / 100,
    backgroundColor: "#E5E0FF",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#8EA7E9",
    borderRadius: 8,
    justifyContent: "flex-end",
  },

  task: {
    fontSize: 24,
    fontWeight: 600,
    paddingHorizontal: 10,
    paddingTop: 5,
    color: "#7286D3",
  },

  addTask: {
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#7286D3",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    bottom: "10%",
    right: "5%",
  },

  deleteButton: {
    width: (Dimensions.get("screen").width * 95) / 100,
    backgroundColor: "#E5E0FF",
    marginTop: 20,
    borderColor: "#8EA7E9",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteButtonText: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 2,
    fontWeight: "400",
    paddingBottom: 5,
    color: "#7286D3",
  },
});

export default TaskListScreen;
