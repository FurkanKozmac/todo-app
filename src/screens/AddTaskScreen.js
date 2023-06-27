import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      task,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setTask("");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ marginTop: "5%" }}>
          <Text style={styles.inputTitles}>Add Title</Text>
          <TextInput
            style={styles.addTitleInput}
            returnKeyType="done"
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.inputTitles}>Add task</Text>
          <TextInput
            style={styles.addTaskInput}
            multiline
            returnKeyType="done"
            value={task}
            onChangeText={setTask}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleTask();
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 18, color: "#FFF2F2", fontWeight: "700" }}>
            Create task
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2F2",
    alignItems: "center",
  },

  inputTitles: {
    fontSize: 14,
    color: "#8EA7E9",
    paddingTop: 10,
  },

  addTitleInput: {
    width: (Dimensions.get("screen").width * 90) / 100,
    height: 45,
    borderColor: "#8EA7E9",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 10,
    color: "#7286D3",
    fontSize: 16,
    fontWeight: "500",
  },

  addTaskInput: {
    width: (Dimensions.get("screen").width * 90) / 100,
    height: 350,
    borderColor: "#8EA7E9",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 10,
    paddingTop: 10,
    color: "#7286D3",
    fontSize: 16,
    textAlignVertical: "top",
    fontWeight: "500",
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: "#7286D3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 18,
  },
});
export default AddTaskScreen;
