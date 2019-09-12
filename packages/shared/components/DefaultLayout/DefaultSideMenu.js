import React from 'react';
import { View } from 'react-native';

const DefaultSideMenu = () => {
    return (
        <View style={{ width: '250px'}}>
          <View style={{height: 50, backgroundColor: 'powderblue'}} />
          <View style={{height: 50, backgroundColor: 'skyblue'}} />
          <View style={{height: 50, backgroundColor: 'steelblue'}} />
        </View>
    )
}

export default DefaultSideMenu;