import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },
  textInput: {
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
  },
});

export default GoalInput;
