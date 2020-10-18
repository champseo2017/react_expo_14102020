//import liraries
import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import About from "./screens/about";
import ReviewDetails from "./screens/reviewDetails";
import { AppLoading } from "expo";
import Navigator from './routes/homeStack'

const getFonts = () => {
  return Font.loadAsync({
    "kanit-regular": require("./assets/fonts/Kanit-Regular.ttf"),
    "kanit-bold": require("./assets/fonts/Kanit-Bold.ttf"),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator/>;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

//make this component available to the app
export default App;
