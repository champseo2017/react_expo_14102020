import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone"/>
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      headerTitle: "Review Details",
      // headerStyle: {
      //   backgroundColor: "#eee",
      // },
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor:'#ffffff',
      height: 60
    },
  },
});
export default HomeStack;
