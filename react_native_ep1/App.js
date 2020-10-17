//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/header'

// create a component
const App = () => {
  const [todos, setTodos] = useState([
      {text: 'buy coffee', key: '1'},
      {text: 'create an app', key: '2'},
      {text: 'play on the switch', key: '3'}
  ])
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
              <Text>{item.text}</Text>
              )}
            />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list:{
    marginTop:20
  }
});

//make this component available to the app
export default App;
