import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "GameZone",
      // headerStyle: {
      //   backgroundColor: "#333",
      // },
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
      backgroundColor: "#eee",
    },
  },
});
export default HomeStack;
