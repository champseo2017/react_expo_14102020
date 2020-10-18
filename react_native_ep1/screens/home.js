//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText:{
        fontFamily:'kanit-regular',
        fontSize: 18
    }
});

//make this component available to the app
export default Home;
