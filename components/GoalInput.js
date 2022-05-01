import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.onOpenAddScreen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCloseModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 5,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "70%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
