//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Button } from "native-base";

// create a component
const Home = ({ navigation }) => {
  const pressHandler = () => {
     navigation.navigate("ReviewDetails");
     //navigation.push('ReviewDetails');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button style={globalStyles.buttonText} primary onPress={pressHandler}>
        <Text style={globalStyles.titleText}> go to review dets </Text>
      </Button>
    </View>
  );
};

// const Styles = StyleSheet.create({
//   buttonText: {
//     width: "100%",
//     justifyContent: "center",
//   },
// });

//make this component available to the app
export default Home;
