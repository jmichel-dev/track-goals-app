import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showAddScreen, setShowAddScreen] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals((oldGoals) => {
      return [...oldGoals, { text: enteredGoal, id: Math.random().toString() }];
    });
    setShowAddScreen(false);
  };

  const showAddScreenHandler = () => {
    setShowAddScreen(true);
  };

  const closeAddScreenHandler = () => {
    setShowAddScreen(false);
  };

  const deleteGoalHandler = (id) => {
    setGoals((oldGoals) => {
      return oldGoals.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#5e0acc"
          onPress={showAddScreenHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onOpenAddScreen={showAddScreen}
          onCloseModal={closeAddScreenHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteGoal={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 32,
  },
});
