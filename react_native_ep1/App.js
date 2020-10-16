//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// create a component
const App = () => {
  const [name, setName] = useState("shaun");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. JohnDoe"
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter age: </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(val) => setAge(val)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

//make this component available to the app
export default App;
