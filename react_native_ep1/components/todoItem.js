//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

// create a component
const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
      <MaterialIcons name="delete" size={18} color="#333" />
      <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row'
  },
  itemText:{
    marginLeft: 10
  }
});

//make this component available to the app
export default TodoItem;
