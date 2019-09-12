import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

const SharedComponent = () => {
    return(
        <View style={Styles.container}>
            <Text style={Styles.label}>{`Platform: ${Platform.OS}`}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: 6,
        borderColor: '#1ECD97',
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    label: {
        color: '#1ECD97'
    }
})

export default SharedComponent;