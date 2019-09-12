import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import Colors from '../../../constants/colors.js'
import Hoverable from '../../../lib/Hoverable.js'

const HeaderButton = (props) => {
  return (
    <Hoverable>
      {hover => (
        <TouchableOpacity 
          onPress={props.onPress}
          style={styles.container}>
          <Text style={[styles.text, hover && styles.textHover]}>{props.text}</Text>
        </TouchableOpacity>
      )}
    </Hoverable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.dark,
  },
  text: {
    color: Colors.header_menu,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textHover: {
    color: Colors.header_menu_over  
  }
});

export default HeaderButton;
