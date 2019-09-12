import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from '../constants/colors'
import Texts from '../constants/texts'

const SecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>{Texts.second_title}</Text>
      <Text style={styles.text_subtitle}>{Texts.second_subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.light,
  },
  text_title: {
    fontSize: 40,
    textAlign: 'center'
  },
  text_subtitle: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default SecondScreen;
