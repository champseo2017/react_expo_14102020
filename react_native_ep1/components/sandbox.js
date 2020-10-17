//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex:2,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex:1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    flex:3,
    backgroundColor: "skyblue",
    padding: 40,
  },
});

//make this component available to the app
export default Sandbox;
