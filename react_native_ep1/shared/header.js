//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// create a component
const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems:'center'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});

//make this component available to the app
export default Header;
