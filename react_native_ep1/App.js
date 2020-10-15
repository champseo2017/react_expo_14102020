//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const App = () => {
  const [name, setName] = useState("shaun");
  const [person, setPerson] = useState({
    name: "mario",
    age: 40,
  });
  const clickHandler = () => {
    setName("chun-li");
    setPerson({
      name: 'luigi',
      age: 45
    })
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
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
});

//make this component available to the app
export default App;
