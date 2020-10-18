//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ReviewDetails = () => {
    return (
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 24
    },
});

//make this component available to the app
export default ReviewDetails;