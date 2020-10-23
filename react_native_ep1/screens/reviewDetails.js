//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Button } from "native-base";
import Card from "../shared/card";

// create a component
const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      </Card>
    </View>
  );
};

//make this component available to the app
export default ReviewDetails;
