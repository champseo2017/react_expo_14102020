import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: "About GameZone",
      // headerStyle: {
      //   backgroundColor: "#333",
      // },
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});
export default AboutStack;
