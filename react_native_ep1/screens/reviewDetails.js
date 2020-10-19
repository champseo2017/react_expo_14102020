//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Button } from "native-base";

// create a component
const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
};

//make this component available to the app
export default ReviewDetails;
