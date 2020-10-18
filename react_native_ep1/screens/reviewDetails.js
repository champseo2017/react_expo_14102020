//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Button } from "native-base";

// create a component
const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button style={globalStyles.buttonText} primary onPress={pressHandler}>
        <Text style={globalStyles.titleText}> back to home screen </Text>
      </Button>
    </View>
  );
};

//make this component available to the app
export default ReviewDetails;
