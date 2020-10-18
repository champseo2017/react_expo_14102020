//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {globalStyles} from '../styles/global'

// create a component
const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    );
};


//make this component available to the app
export default Home;